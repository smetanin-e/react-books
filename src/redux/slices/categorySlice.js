import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    curentCategory: ''
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        changeCategory(state, action) {
            state.curentCategory = action.payload
        }
    }
})

export const {changeCategory} = categorySlice.actions
export default categorySlice.reducer