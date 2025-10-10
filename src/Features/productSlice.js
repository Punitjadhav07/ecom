import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const loadProductsFromStorage = () => {
  const productsData = localStorage.getItem('products');
  if (productsData) {
    const parsed = JSON.parse(productsData);
    return Array.isArray(parsed) ? parsed : [];
  }
  return [];
};

const saveProductsToStorage = (products) => {
  if (products) {
    localStorage.setItem('products', JSON.stringify(products));
  }
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const cachedProducts = loadProductsFromStorage();
    if (cachedProducts.length > 0) {
      return cachedProducts;
    }

    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    saveProductsToStorage(data);

    return data;
  }
);

const initialState = {
  products: loadProductsFromStorage(),
  filteredProducts: loadProductsFromStorage(),
  selectedCategory: 'all',
  searchTerm: '',
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
      const term = state.searchTerm.trim().toLowerCase();
      const byCategory = action.payload === 'all'
        ? state.products
        : state.products.filter(product => product.category === action.payload);
      state.filteredProducts = term
        ? byCategory.filter(p =>
            p.title.toLowerCase().includes(term) ||
            p.description.toLowerCase().includes(term)
          )
        : byCategory;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      const term = state.searchTerm.trim().toLowerCase();
      const byCategory = state.selectedCategory === 'all'
        ? state.products
        : state.products.filter(product => product.category === state.selectedCategory);
      state.filteredProducts = term
        ? byCategory.filter(p =>
            p.title.toLowerCase().includes(term) ||
            p.description.toLowerCase().includes(term)
          )
        : byCategory;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        const term = state.searchTerm.trim().toLowerCase();
        const byCategory = state.selectedCategory === 'all'
          ? state.products
          : state.products.filter(product => product.category === state.selectedCategory);
        state.filteredProducts = term
          ? byCategory.filter(p =>
              p.title.toLowerCase().includes(term) ||
              p.description.toLowerCase().includes(term)
            )
          : byCategory;
      });
  }
});

export const { setCategory, setSearchTerm } = productSlice.actions;
export default productSlice.reducer;