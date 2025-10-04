import { createSlice } from '@reduxjs/toolkit';

// Load cart from localStorage
const loadCartFromStorage = () => {
  try {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : {
      items: [],
      totalQuantity: 0,
      totalAmount: 0,
    };
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
    return {
      items: [],
      totalQuantity: 0,
      totalAmount: 0,
    };
  }
};

// Save cart to localStorage
const saveCartToStorage = (cart) => {
  try {
    localStorage.setItem('cart', JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

const initialState = loadCartFromStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      state.totalQuantity++;
      state.totalAmount = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
      
      // Save to localStorage
      saveCartToStorage(state);
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
        state.totalAmount = state.totalAmount - existingItem.totalPrice;
        state.items = state.items.filter(item => item.id !== id);
      }
      
      // Save to localStorage
      saveCartToStorage(state);
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
        state.totalQuantity++;
        state.totalAmount = state.totalAmount + existingItem.price;
      }
      
      // Save to localStorage
      saveCartToStorage(state);
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        state.totalQuantity--;
        state.totalAmount = state.totalAmount - existingItem.price;
      } else if (existingItem && existingItem.quantity === 1) {
        // If quantity is 1, remove the item completely
        state.totalQuantity--;
        state.totalAmount = state.totalAmount - existingItem.price;
        state.items = state.items.filter(item => item.id !== id);
      }
      
      // Save to localStorage
      saveCartToStorage(state);
    },
  },
});

export const { addItemToCart, removeItemFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
