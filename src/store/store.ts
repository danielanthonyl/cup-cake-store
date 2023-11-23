import {configureStore} from '@reduxjs/toolkit';
import {productsReducer} from './product/reducer/productReducer';
import {cartReducer} from './cart/reducer/cartReducer';

export const store = configureStore({
  reducer: {
    productsReducer,
    cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
