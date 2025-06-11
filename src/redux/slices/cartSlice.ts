import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { getCartItemsFromLocalStorage } from "../../utils/getCartItemsFromLocalStorage"
import { calcTotalCount,  } from "../../utils/calcTotalCount"
import { calcTotalPrice } from "../../utils/calcTotalPrice"

export type CartItem = {
    id: number
    imageUrl: string
    title: string
    author: string
    price:number
    count?:number
}

interface CartSliceState {
    items: CartItem[]
    totalCount: number
    totalPrice: Number
}
const {items, totalCount,totalPrice} = getCartItemsFromLocalStorage();
const initialState:CartSliceState = {
    items,
    totalCount,
    totalPrice,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       onAddToCart(state,action:PayloadAction<CartItem>){
        
        state.items.push({...action.payload, count: 1})
        state.totalCount = calcTotalCount(state.items)
        state.totalPrice = calcTotalPrice(state.items)
       },

       increment(state,action:PayloadAction<{id:number}>){
        const item = state.items.find((obj) => obj.id === action.payload.id)
        if (item?.count) {
            item.count ++
        }
        
        state.totalCount = calcTotalCount(state.items)
        state.totalPrice = calcTotalPrice(state.items)
       },
       decrement: (state,action:PayloadAction<{id:number}>) => {
        const item = state.items.find((obj) => obj.id === action.payload.id)
        if (item?.count) {
            item.count --
        }
        state.totalCount = calcTotalCount(state.items)
        state.totalPrice = calcTotalPrice(state.items)
    },
       clearCart(state){
        state.totalCount = 0
        state.totalPrice = 0
        state.items = []
    },
      removeCartItem(state,action:PayloadAction<{id:number}>) {
        state.items = state.items.filter(item => item.id !== action.payload.id)
        state.totalCount = calcTotalCount(state.items)
        state.totalPrice = calcTotalPrice(state.items)
      }
    
    }
})

export const {onAddToCart ,increment,decrement, clearCart, removeCartItem} = cartSlice.actions

export const selectCarttSlice = (state:RootState) => state.cart;

export default cartSlice.reducer

