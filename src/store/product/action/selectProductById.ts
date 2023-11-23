import {ProductsReducer} from '../reducer/productReducer';

export const selectProductById = ({
  state,
  id,
}: {
  state: ProductsReducer;
  id: string;
}) => state.products.find(product => product.id === id);
