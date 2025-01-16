import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/Auth/userSlice';
import cartSlice from '../features/Cart/cartSlice';
import counterReducer from '../features/Counter/counterSlice';

const rootReducer = {
  // counterReducer là reducer trong counterSlice
  count: counterReducer,
  user: userSlice,
  cart: cartSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
