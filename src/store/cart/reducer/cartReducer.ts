import {CartProduct} from '../../interfaces/interfaces';

export interface CartReducer {
  cartProduct: CartProduct[];
}
const initialState: CartReducer = {
  cartProduct: [],
};

export const cartReducer = ({
  state = initialState,
  action,
}: {
  state: CartReducer;
  action: {type: string; payload: any};
}) => {
  switch (action.type) {
    default:
      return state;
  }
};
