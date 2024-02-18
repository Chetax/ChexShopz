import { configureStore } from '@reduxjs/toolkit';
import { CartSlice } from './Slices/CartSlice';

export default configureStore({
  reducer: {
    cart: CartSlice.reducer,  // Assuming CartSlice is created using createSlice
    // Add other slices or reducers here if needed
  },
});
