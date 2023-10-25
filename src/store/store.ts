import {configureStore} from '@reduxjs/toolkit';
import {
  ProductsReducer,
  productsReducer,
} from './product/reducer/productReducer';
import {ReviewsReducer, reviewsReducer} from './review/reducer/reviewReducer';
import {UsersReducer, usersReducer} from './user/reducer/userReducer';

export interface Store {
  productsReducer: ProductsReducer;
  reviewsReducer: ReviewsReducer;
  usersReducer: UsersReducer;
}

export const store = configureStore({
  reducer: {productsReducer, reviewsReducer, usersReducer},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
