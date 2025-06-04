import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type CategoryState = {
    curentCategory: string
    itSubCategory: boolean
}

const initialState:CategoryState = {
    curentCategory: '',
    itSubCategory: false
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        changeCategory(state, action:PayloadAction<string>) {
            state.curentCategory = action.payload
        },
        isItSubCategory(state, action:PayloadAction<boolean>) {
            state.itSubCategory = action.payload
        },
        
    }
})

export const {changeCategory, isItSubCategory} = categorySlice.actions
export default categorySlice.reducer