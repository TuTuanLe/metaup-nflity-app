import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
const baseurl = '';

export const me = createAsyncThunk('auth/principal', async thunkAPI => {
  try {
    const token = await AsyncStorage.getItem('jwt');
    if (token == null) return undefined;
    const config = {
      url: `${baseurl}`,
      headers: {
        Authorization: `Bearer ${JSON.parse(token).access_token}`,
      },
    };
    const response = await axios(config);
    return response.data.result;
  } catch (err) {
    return undefined;
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    principal: undefined,
  },
  reducers: {
    setPrincipal: (state, action) => {
      state.principal = action.payload;
    },

    clearPrincipal: state => {
      state.principal = undefined;
    },
  },
  extraReducers: {
    [me.fulfilled.type]: (state, action) => {
      state.principal = action.payload;
    },
  },
});

export const {setPrincipal, clearPrincipal} = authSlice.actions;

export default authSlice.reducer;
