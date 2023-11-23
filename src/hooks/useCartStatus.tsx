import {useSelector} from 'react-redux';
import {RootState} from '../store/store';

export const useCartStatus = () => {
  const {cartproducts} = useSelector((store: RootState) => {
    return store.cartReducer;
  });

  return cartproducts.length > 0;
};
