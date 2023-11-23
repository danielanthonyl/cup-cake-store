import {CartProduct} from '../../interfaces/interfaces';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

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
    addCartProduct: (
      state,
      {
        payload: {price, ...cartProduct},
      }: PayloadAction<Omit<CartProduct, 'totalPrice'> & {price: number}>,
    ) => {
      const existingProduct = state.cartproducts.find(
        product => product.id === cartProduct.id,
      );

      if (!existingProduct) {
        state.cartproducts.push({
          ...cartProduct,
          totalPrice: Number((price * cartProduct.quantity).toFixed(2)),
        });
      } else {
        state.cartproducts = updateProduct({
          state,
          cartProduct: {price, ...cartProduct},
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
  cartProduct: Omit<CartProduct, 'totalPrice'> & {price: number};
}) => {
  const updatedProduct = [...state.cartproducts];
  const productToUpdateIndex = state.cartproducts.findIndex(
    product => product.id === cartProduct.id,
  );
  const newTotalPrice = Number(
    (cartProduct.price * cartProduct.quantity).toFixed(2),
  );

  updatedProduct[productToUpdateIndex].quantity = cartProduct.quantity;
  updatedProduct[productToUpdateIndex].totalPrice = newTotalPrice;

  return updatedProduct;
};

export const {addCartProduct} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
