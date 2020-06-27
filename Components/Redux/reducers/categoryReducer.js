import * as Category from '../actionTypes/categoryActionsTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case Category.CATEGORY_LIST:
      return {
        ...state,
        categoryList: action.payload,
      };
    case Category.SUBCATEGORY_LIST:
      return {
        ...state,
        subcategory: action.payload,
      };
    case Category.PRODUCT_LIST:
      return {
        ...state,
        product: action.payload,
      };
    case Category.PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };
    case Category.ADD_TO_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case Category.CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};
