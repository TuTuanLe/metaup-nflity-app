import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../reducer/authReducer';
import productReducer from '../reducer/product';
import projectReducer from '../reducer/project';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    project: projectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
