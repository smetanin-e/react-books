import { configureStore } from '@reduxjs/toolkit'

import category from './slices/categorySlice'
import books from './slices/itemSlice'
import cart from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    category,
    books,
    cart,
  },
})