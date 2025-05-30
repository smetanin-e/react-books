import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    totalCount: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       onAddToCart(state,action){
        
        state.items.push({...action.payload, count: 1})
        state.totalCount = state.items.reduce((acc,obj) => acc + obj.count, 0)
        state.totalPrice = state.items.reduce((acc,obj) => acc + obj.count * obj.price, 0)
       },

       increment(state,action){
        state.items.find((obj) => obj.id === action.payload.id).count ++
        state.totalCount = state.items.reduce((acc,obj) => acc + obj.count, 0)
        state.totalPrice = state.items.reduce((acc,obj) => acc + obj.count * obj.price, 0)
       },
       decrement: (state,action) => {
        state.items.find((obj) => obj.id === action.payload.id).count --
        state.totalCount = state.items.reduce((acc,obj) => acc + obj.count, 0)
        state.totalPrice = state.items.reduce((acc,obj) => acc + obj.count * obj.price, 0)
    },
       clearCart(state){
        state.totalCount = 0
        state.totalPrice = 0
        state.items = []
    },
      removeCartItem(state,action) {
        state.items = state.items.filter(item => item.id !== action.payload.id)
        state.totalCount = state.items.reduce((acc,obj) => acc + obj.count, 0)
        state.totalPrice = state.items.reduce((acc,obj) => acc + obj.count * obj.price, 0)
      }
    
    }
})

export const {onAddToCart ,increment,decrement, clearCart, removeCartItem} = cartSlice.actions
export default cartSlice.reducer