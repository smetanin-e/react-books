import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ItemBook } from "./itemSlice"
import axios from "axios"

type CategoryArgs = {
    activeCategory: string
    itSubCategory: boolean
}
type CategorySliceState = {
    products: ItemBook[]
    curentCategory: string
    itSubCategory: boolean
}

const initialState:CategorySliceState = {
    curentCategory: '',
    itSubCategory: false,
    products: []
}

export const fetchCategoryBooks = createAsyncThunk<ItemBook[],CategoryArgs>('book/fetchCategoryBooksStatus', async ({activeCategory, itSubCategory}) => {
    //ссылка на массив объектов, содержащий книги
  const url =
    activeCategory === 'ВСЕ'
      ? 'https://815c3fb7d56c4537.mokky.dev/books'
      : itSubCategory
      ? `https://815c3fb7d56c4537.mokky.dev/books?subCategory=${activeCategory}`
      : `https://815c3fb7d56c4537.mokky.dev/books?category=${activeCategory}`;
    const {data} = await axios.get<ItemBook[]>(url)
    return data
})

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
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategoryBooks.pending, (state) => {
                    state.products = [];
                    console.log('pending');
                })
                builder.addCase(fetchCategoryBooks.fulfilled, (state,action:PayloadAction<ItemBook[]>) => {
                    state.products = action.payload;
                
                    console.log('success');
                    
                })
                builder.addCase(fetchCategoryBooks.rejected, (state) => {
                    state.products = [];
                    console.log('error');
                })
    }
})

export const {changeCategory, isItSubCategory} = categorySlice.actions
export default categorySlice.reducer