import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

type CartItem = {
    id: number
    imageUrl: string
    title: string
    author: string
    price:number
    count:number
}

interface CartSliceState {
    items: CartItem[]
    totalCount: number
    totalPrice: Number
}

const initialState:CartSliceState = {
    items: [],
    totalCount: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       onAddToCart(state,action:PayloadAction<CartItem>){
        
        state.items.push({...action.payload, count: 1})
        state.totalCount = state.items.reduce((acc,obj) => acc + obj.count, 0)
        state.totalPrice = state.items.reduce((acc,obj) => acc + obj.count * obj.price, 0)
       },

       increment(state,action:PayloadAction<{id:number}>){
        const item = state.items.find((obj) => obj.id === action.payload.id)
        if (item) {
            item.count ++
        }
        
        state.totalCount = state.items.reduce((acc,obj) => acc + obj.count, 0)
        state.totalPrice = state.items.reduce((acc,obj) => acc + obj.count * obj.price, 0)
       },
       decrement: (state,action:PayloadAction<{id:number}>) => {
        const item = state.items.find((obj) => obj.id === action.payload.id)
        if (item) {
            item.count --
        }
        state.totalCount = state.items.reduce((acc,obj) => acc + obj.count, 0)
        state.totalPrice = state.items.reduce((acc,obj) => acc + obj.count * obj.price, 0)
    },
       clearCart(state){
        state.totalCount = 0
        state.totalPrice = 0
        state.items = []
    },
      removeCartItem(state,action:PayloadAction<{id:number}>) {
        state.items = state.items.filter(item => item.id !== action.payload.id)
        state.totalCount = state.items.reduce((acc,obj) => acc + obj.count, 0)
        state.totalPrice = state.items.reduce((acc,obj) => acc + obj.count * obj.price, 0)
      }
    
    }
})

export const {onAddToCart ,increment,decrement, clearCart, removeCartItem} = cartSlice.actions

export const selectCarttSlice = (state:RootState) => state.cart;

export default cartSlice.reducer