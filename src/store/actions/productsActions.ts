import {createAsyncThunk} from '@reduxjs/toolkit';
import {PRODUCTS_URLS} from '../../service/urls';
import {getRequest} from '../../service/verbs';
import {Params} from '../../models/data/productsState';

const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (params: object) => {
    const producstUrl =
      params.category == 'Tümü'
        ? PRODUCTS_URLS.ALL_PRODUCTS
        : `${PRODUCTS_URLS.CATEGORY_PRODUCTS}/${params.category}`;
    const response = await getRequest(params, producstUrl);
    return response.data;
  },
);
const getBestSellerProducts = createAsyncThunk(
  'products/getBestSellerProducts',
  async (params: object) => {
    const response = await getRequest(
      params,
      PRODUCTS_URLS.BEST_SELLER_PRODUCTS,
    );

    return response.data;
  },
);
const getPopulerProducts = createAsyncThunk(
  'products/getPopulerProducts',
  async (params: object) => {
    const response = await getRequest(params, PRODUCTS_URLS.POPULER_PRODUCTS);
    return response.data;
  },
);

const getProductDetail = createAsyncThunk(
  'products/getProductDetail',
  async (params: Params) => {
    const pruductUrl = `${PRODUCTS_URLS.ALL_PRODUCTS}/${params.id}`;
    const response = await getRequest(params, pruductUrl);
    return response.data;
  },
);
export {
  getBestSellerProducts,
  getPopulerProducts,
  getProductDetail,
  getAllProducts,
};
