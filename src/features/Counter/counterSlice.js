import { createSlice } from '@reduxjs/toolkit';

const counteSlice = createSlice({
  name: 'count',
  initialState: 2,
  reducers: {
    increase(state, action) {
      return state + 1;
    },
    decrease(state, action) {
      return state - 1;
    },
  },
});

const { actions, reducer } = counteSlice;
export const { increase, decrease } = actions;
export default reducer;
