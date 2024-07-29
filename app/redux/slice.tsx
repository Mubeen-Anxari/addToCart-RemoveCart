import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
interface Rating {
  rate: number;
  count: number;
}
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface userState {
  cart: Product[];
  products: Product[];
}

const initialState: userState = {
  cart: [],
  products: [],
};
export const getProducts = createAsyncThunk("cart/getProducts", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});
export const cartProduct = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers:(builder)=>{
builder.addCase(getProducts.fulfilled,(state,action)=>{
    state.products=action.payload
})
  }
});

export const {addToCart,removeCart} = cartProduct.actions;

export default cartProduct.reducer;
