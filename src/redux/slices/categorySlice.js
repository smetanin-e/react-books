import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    curentCategory: '',
    itSubCategory: false
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        changeCategory(state, action) {
            state.curentCategory = action.payload
        },
        isItSubCategory(state, action) {
            state.itSubCategory = action.payload
        }
    }
})

export const {changeCategory, isItSubCategory} = categorySlice.actions
export default categorySlice.reducer