import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './slices/counterSlise'

import category from './slices/categorySlice'
import currentItem from './slices/itemSlice'
import cart from './slices/cartSliceTemp'

export const store = configureStore({
  reducer: {
    category,
    currentItem,
    cart,
    counter: counterReducer,
  },
})