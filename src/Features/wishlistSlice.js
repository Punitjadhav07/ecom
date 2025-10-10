import { createSlice } from '@reduxjs/toolkit';

const loadWishlistFromStorage = () => {
  const wishlistData = localStorage.getItem('wishlist');
  if (wishlistData) {
    const parsed = JSON.parse(wishlistData);
    if (parsed && typeof parsed === 'object') {
      return parsed;
    } else {
      return {
        items: [],
        totalQuantity: 0,
      };
    }
  } else {
    return {
      items: [],
      totalQuantity: 0,
    };
  }
};

const saveWishlistToStorage = (wishlist) => {
  if (wishlist) {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }
};

const initialState = loadWishlistFromStorage();

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItemToWishlist: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          image: newItem.image,
          price: newItem.price,
        });
        state.totalQuantity++;
      }

      saveWishlistToStorage(state);
    },
    removeItemFromWishlist: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        state.items = state.items.filter(item => item.id !== id);
        state.totalQuantity--;
      }

      saveWishlistToStorage(state);
    },
  },
});

export const { addItemToWishlist, removeItemFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
