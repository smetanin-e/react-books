import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       onAddToCart(state,action){
        
        state.items.push({...action.payload, count: 1})
       },

       increment(state,action){
        console.log(action.payload.count);
        
       }
        
    }
})

export const {onAddToCart ,increment} = cartSlice.actions
export default cartSlice.reducer