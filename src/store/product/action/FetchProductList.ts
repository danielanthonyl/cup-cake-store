import {Dispatch} from '@reduxjs/toolkit';
import {PRODUCT_TYPES} from '../types/ProductTypes';
import {fetchProductListApi} from '../../../service/fetchProductListApi';

export const fetchProductList = async (dispatch: Dispatch) => {
  try {
    const products = await fetchProductListApi();

    dispatch({
      type: PRODUCT_TYPES.FETCH_PRODUCTS,
      payload: products,
    });
  } catch {}
};
