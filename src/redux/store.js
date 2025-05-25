import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './slices/counterSlise'

import category from './slices/categorySlice'

export const store = configureStore({
  reducer: {
    category,
    counter: counterReducer,
  },
})