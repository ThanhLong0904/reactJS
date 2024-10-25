import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import StorageKeys from 'constants/storage-key';

//acction register
export const register = createAsyncThunk('user/register', async (payload) => {
  // call API to register
  const data = await userApi.register(payload);
  // save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  //  return về gì thì action.payload (extraReducers) nhận về cái đấy từ BE trả về
  return data.user;
});

export const login = createAsyncThunk('user/login', async (payload) => {
  const data = await userApi.login(payload);
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data.user;
});

//tạo acction
const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    settings: {},
  },
  reducers: {
    logout(state, acction) {
      localStorage.removeItem(StorageKeys.TOKEN);
      localStorage.removeItem(StorageKeys.USER);
      state.current = {};
    },
  },

  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.current = action.payload;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.current = action.payload;
    });
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
