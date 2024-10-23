import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Counter/counterSlice';
import userSlice from '../features/Auth/userSlice';

const rootReducer = {
  // counterReducer là reducer trong counterSlice
  count: counterReducer,
  user: userSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
