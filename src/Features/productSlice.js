import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Load products from localStorage
const loadProductsFromStorage = () => {
  try {
    const productsData = localStorage.getItem('products');
    return productsData ? JSON.parse(productsData) : [];
  } catch (error) {
    console.error('Error loading products from localStorage:', error);
    return [];
  }
};

// Save products to localStorage
const saveProductsToStorage = (products) => {
  try {
    localStorage.setItem('products', JSON.stringify(products));
  } catch (error) {
    console.error('Error saving products to localStorage:', error);
  }
};

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    // Check if products exist in localStorage first
    const cachedProducts = loadProductsFromStorage();
    if (cachedProducts.length > 0) {
      return cachedProducts;
    }
    
    // If not in localStorage, fetch from API
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    
    // Save to localStorage for future use
    saveProductsToStorage(data);
    
    return data;
  }
);

const initialState = {
  products: loadProductsFromStorage(),
  filteredProducts: loadProductsFromStorage(),
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