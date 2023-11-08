import {Product} from '../../interfaces/interfaces';
import {PRODUCT_TYPES} from '../types/ProductTypes';

export interface ProductsReducer {
  products: Product[];
}

const initialState: ProductsReducer = {
  products: [],
};

export const productsReducer = ({
  state = initialState,
  action,
}: {
  state: ProductsReducer;
  action: {type: string; payload: any};
}) => {
  switch (action.type) {
    case PRODUCT_TYPES.FETCH_PRODUCTS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
