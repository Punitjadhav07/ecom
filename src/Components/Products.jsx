import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  }
);

const initialState = {
  products: [],
  filteredProducts: [],
  selectedCategory: 'all',
  categories: {
    'all': 'All',
    'electronics': 'Electronics', 
    'jewelery': 'Jewelery',
    "men's clothing": "Men's Clothing",
    "women's clothing": "Women's Clothing"
  }
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
      // Filter products based on selected category
      if (action.payload === 'all') {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(
          product => product.category === action.payload
        );
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.filteredProducts = action.payload;
      });
  }
});

export const { setCategory } = productSlice.actions;
export default productSlice.reducer;