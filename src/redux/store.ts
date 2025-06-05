import { configureStore } from '@reduxjs/toolkit'

import category from './slices/categorySlice'
import books from './slices/itemSlice'
import cart from './slices/cartSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    category,
    books,
    cart,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispath>()