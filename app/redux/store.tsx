import { configureStore } from '@reduxjs/toolkit'
import { cartProduct } from './slice'

export const store = configureStore({
  reducer: {
    cart:cartProduct.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch