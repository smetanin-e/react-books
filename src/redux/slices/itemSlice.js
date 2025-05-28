import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: [],
    wishItems: []
}

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        onClickItem(state,action) {
            state.item = action.payload
        },

        onCheckWish(state,action){
        state.wishItems.push(action.payload)
        },
        onRemoveWish(state,action) {
            state.wishItems = state.wishItems.filter(obj => obj.id !== action.payload.id)
        
        }
    }
})

export const {onClickItem,onCheckWish, onRemoveWish} = itemSlice.actions
export default itemSlice.reducer