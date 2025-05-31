import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk('book/fetchBooksStatus', async () => {
    const {data} = await axios.get(`https://815c3fb7d56c4537.mokky.dev/books`)
    return data
})


const initialState = {
    status: '', // loading | success | error
    books: [],
    menu: [],
    banner: {},
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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.books = [];
            state.status = 'loading';
            console.log('pending');
        })
        builder.addCase(fetchBooks.fulfilled, (state,action) => {
            state.books = action.payload;
            state.status = 'success';
            //получаем 7 категорий для меню в header
            state.menu = [...new Set(action.payload.map((obj) => obj.subCategory))]
              .filter((item) => !item.includes(' '))
              .slice(0, 7)

            //получаем объект у которого самая большая скидка(sale)
            state.banner = action.payload
            .filter((obj) => obj.sale)
            .reduce((prev, cur) => (+cur.sale > +prev.sale ? cur : prev))

            console.log('success');
        })
        builder.addCase(fetchBooks.rejected, (state) => {
            state.books = [];
            state.status = 'error';
            console.log('error');
        })
    }
})

export const {onClickItem,onCheckWish, onRemoveWish} = itemSlice.actions
export default itemSlice.reducer