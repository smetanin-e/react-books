import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getWishItemsFromLocalStorage } from "../../utils/getWishItemsFromLocalStorage";



export type ItemBook = {
    id: number
    imageUrl: string
    title: string
    author: string
    description?:string
    price:number
    sale?:number
    tab?:string
    slider?:boolean
   category:string
    subCategory:string
}
type ItemSliceState = {
    status: 'loading' | 'success' | 'error'
    books: ItemBook[]
    menu: string[]
    banner:ItemBook | null
    wishItems:ItemBook[]
    searchValue: string
}

const initialState:ItemSliceState = {
    status: 'loading', // loading | success | error
    books: [],
    menu: [],
    banner: null,
    wishItems: getWishItemsFromLocalStorage(),
    searchValue: ''
}
export const fetchBooks = createAsyncThunk<ItemBook[],void>('book/fetchBooksStatus', async () => {
    const {data} = await axios.get<ItemBook[]>(`https://815c3fb7d56c4537.mokky.dev/books`)
    return data
})


const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addWish(state,action:PayloadAction<ItemBook>){
        state.wishItems.push(action.payload)
        },
        onRemoveWish(state,action:PayloadAction<{id:number}>) {
            state.wishItems = state.wishItems.filter(obj => obj.id !== action.payload.id)
        
        },
        search(state,action:PayloadAction<string>) {
            state.searchValue = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.books = [];
            state.status = 'loading';
        })
        builder.addCase(fetchBooks.fulfilled, (state,action:PayloadAction<ItemBook[]>) => {
            state.books = action.payload;
            state.status = 'success';

            //получаем 7 категорий для меню в header
            state.menu = [...new Set(action.payload.map((obj) => obj.subCategory))]
              .filter((item) => !item.includes(' '))
              .slice(0, 7)

            //получаем объект у которого самая большая скидка(sale)
            state.banner = action.payload
            .filter((obj) => obj.sale)
            .reduce((prev, cur) => (cur.sale && (!prev.sale || +cur.sale > +prev.sale) ? cur : prev))
        })
        builder.addCase(fetchBooks.rejected, (state) => {
            state.books = [];
            state.status = 'error';
            console.log('error');
        })
    }
})

export const {addWish, onRemoveWish,search} = itemSlice.actions
export default itemSlice.reducer