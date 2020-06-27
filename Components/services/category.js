import {client} from './serviceConfig';

export const category = params =>
  client.get ('category/categorylist', {
    headers: {
      Authorization: `Bearer ${params}`,
    },
  });

export const subCategory = (params, token) =>
  client.post ('subcategory/subcategorybycategory', params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const product = (params, token) =>
  client.post ('product-store/productData', params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const addCart = (params, token) =>
  client.post ('cart/addCart', params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const CartList = token =>
  client.post ('cart/getAllCart', '', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const deleteCart = (params, token) =>
  client.post ('cart/deleteCart', params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
