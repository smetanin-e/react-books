import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type CategorySliceState = {
    curentCategory: string
    itSubCategory: boolean
}

const initialState:CategorySliceState = {
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