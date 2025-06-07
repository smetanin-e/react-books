import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ItemBook } from "./itemSlice"
import axios from "axios"

type CategorySliceState = {
    curentCategory: string
    itSubCategory: boolean
    //products:ItemBook[]
}

const initialState:CategorySliceState = {
    curentCategory: '',
    itSubCategory: false,
   // products: []
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