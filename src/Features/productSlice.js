import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const loadProductsFromStorage = () => {
  const productsData = localStorage.getItem('products');
  if (productsData) {
    const parsed = JSON.parse(productsData);
    if (Array.isArray(parsed)) {
      return parsed;
    } else {
      return [];
    }
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
      let byCategory;
      if (action.payload === 'all') {
        byCategory = state.products;
      } else {
        byCategory = state.products.filter(product => product.category === action.payload);
      }
      
      if (term) {
        state.filteredProducts = byCategory.filter(p =>
          p.title.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term)
        );
      } else {
        state.filteredProducts = byCategory;
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      const term = state.searchTerm.trim().toLowerCase();
      let byCategory;
      if (state.selectedCategory === 'all') {
        byCategory = state.products;
      } else {
        byCategory = state.products.filter(product => product.category === state.selectedCategory);
      }
      
      if (term) {
        state.filteredProducts = byCategory.filter(p =>
          p.title.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term)
        );
      } else {
        state.filteredProducts = byCategory;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        const term = state.searchTerm.trim().toLowerCase();
        let byCategory;
        if (state.selectedCategory === 'all') {
          byCategory = state.products;
        } else {
          byCategory = state.products.filter(product => product.category === state.selectedCategory);
        }
        
        if (term) {
          state.filteredProducts = byCategory.filter(p =>
            p.title.toLowerCase().includes(term) ||
            p.description.toLowerCase().includes(term)
          );
        } else {
          state.filteredProducts = byCategory;
        }
      });
  }
});

export const { setCategory, setSearchTerm } = productSlice.actions;
export default productSlice.reducer;