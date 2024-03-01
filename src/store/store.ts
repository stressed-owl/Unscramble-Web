import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { unscrambleApi } from '../services/unscramble'

export const store = configureStore({
  reducer: {
    [unscrambleApi.reducerPath]: unscrambleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(unscrambleApi.middleware),
})

setupListeners(store.dispatch)