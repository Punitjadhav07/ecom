import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../Features/productSlice'
import cartReducer from '../Features/cartSlice'
import wishlistReducer from '../Features/wishlistSlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
})
