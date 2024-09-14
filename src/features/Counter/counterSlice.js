import { createSlice } from '@reduxjs/toolkit';

const counteSlice = createSlice({
  name: 'count',
  initialState: 0,
  reducers: {
    increase(state) {
      return state + 1;
    },
    decrease(state) {
      return state - 1;
    },
  },
});

const { actions, reducer } = counteSlice;
export const { increase, decrease } = actions;
export default reducer;
