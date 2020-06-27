import * as Category from '../actionTypes/categoryActionsTypes';
import * as CategoryAPI from '../../services/category';

export const categoryList = params => async dispatch => {
  const res = await CategoryAPI.category (params);
  dispatch ({
    type: Category.CATEGORY_LIST,
    payload: res.data,
  });
  return res.data;
};

export const subcategoryList = (params, token) => async dispatch => {
  // console.log (params, 'paramssm action');
  const res = await CategoryAPI.subCategory (params, token);
  dispatch ({
    type: Category.SUBCATEGORY_LIST,
    payload: res.data,
  });
  return res.data;
};

export const productList = (params, token) => async dispatch => {
  // console.log (params, 'paramssm action');
  // console.log (token, 'paramssm action2');
  const res = await CategoryAPI.product (params, token);
  // console.log (res.data, 'in actionssss');
  dispatch ({
    type: Category.PRODUCT_LIST,
    payload: res.data,
  });
  return res.data;
};

export const productDetail = params => async dispatch => {
  dispatch ({
    type: Category.PRODUCT_DETAIL,
    payload: params,
  });
};

export const addToCart = (params, token) => async dispatch => {
  // console.log (params, 'paramssmaction addtocart');
  // console.log (token, 'paramssm action2');
  const res = await CategoryAPI.addCart (params, token);
   console.log (res.data, 'res of add to cart');
  dispatch ({
    type: Category.ADD_TO_CART,
    payload: res.data,
  });
  return res.data;
};

export const CartProduct = token => async dispatch => {
  let res = await CategoryAPI.CartList (token);
  console.log (res.data, 'res of product in cart');
  dispatch ({
    type: Category.CART_ITEMS,
    payload: res.data,
  });
  return res.data;
};

export const removeToCart = (params, token) => async dispatch => {
  const res = await CategoryAPI.deleteCart (params, token);
  dispatch ({
    type: Category.REMOVE_FROM_CART,
    payload: params.productId,
  });
  return res.data;
};
