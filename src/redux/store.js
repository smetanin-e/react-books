import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './slices/counterSlise'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})