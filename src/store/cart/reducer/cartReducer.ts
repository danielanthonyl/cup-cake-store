import {CartProduct} from '../../interfaces/interfaces';
import {createSlice} from '@reduxjs/toolkit';

export interface CartReducer {
  cartproducts: CartProduct[];
  controls: {
    status: 'fulfilled' | 'pending' | 'rejected' | null;
  };
}

const initialState: CartReducer = {
  cartproducts: [],
  controls: {
    status: null,
  },
};

const cartSlice = createSlice({
  name: 'cartproducts',
  initialState,
  reducers: {
    addCartProduct: (state, action) => {
      const existingProduct = state.cartproducts.find(
        product => product.id === action.payload.id,
      );

      if (!existingProduct) {
        state.cartproducts.push(action.payload);
      } else {
        state.cartproducts = updateProduct({
          state,
          cartProduct: action.payload,
        });
      }
    },
  },
});

const updateProduct = ({
  state,
  cartProduct,
}: {
  state: CartReducer;
  cartProduct: CartProduct;
}) => {
  return state.cartproducts.map(product => {
    if (product.id === cartProduct.id) {
      return (product = cartProduct);
    } else {
      return product;
    }
  });
};

export const {addCartProduct} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
