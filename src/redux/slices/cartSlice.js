import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    totalCount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       onAddToCart(state,action){
        
        state.items.push({...action.payload, count: 1})
        state.totalCount = state.items.reduce((acc,obj) => acc + obj.count, 0)
       },

       increment(state,action){
        state.items.find((obj) => obj.id === action.payload.id).count ++
        state.totalCount = state.items.reduce((acc,obj) => acc + obj.count, 0)
       },
       decrement: (state,action) => {
        state.items.find((obj) => obj.id === action.payload.id).count --
        state.totalCount = state.items.reduce((acc,obj) => acc + obj.count, 0)
    },
    clearCart(state){
        state.totalCount = 0
        state.items = []
    }
    
    }
})

export const {onAddToCart ,increment,decrement, clearCart} = cartSlice.actions
export default cartSlice.reducer