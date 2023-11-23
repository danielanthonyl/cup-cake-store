import {Product} from '../../interfaces/interfaces';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchProductListApi} from '../../../service/fetchProductListApi';

export const fetchProductList = createAsyncThunk(
  'product-slice/fetch-product-list',
  async (_, thunkAPI) => {
    try {
      const products = await fetchProductListApi();

      return products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
export interface ProductsReducer {
  products: Product[];
  controls: {
    status: 'fulfilled' | 'pending' | 'rejected' | null;
  };
}

const initialState: ProductsReducer = {
  products: [],
  controls: {
    status: null,
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProductList.fulfilled, (state, action) => {
      state.controls.status = 'fulfilled';
      state.products = action.payload;
    });
    builder.addCase(fetchProductList.pending, state => {
      state.controls.status = 'pending';
    });
    builder.addCase(fetchProductList.rejected, state => {
      state.controls.status = 'rejected';
    });
  },
});

export const productsReducer = productsSlice.reducer;
