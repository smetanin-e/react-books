import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: [],
}

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        onClickItem(state,action) {
            state.item = action.payload
        }
    }
})

export const {onClickItem} = itemSlice.actions
export default itemSlice.reducer