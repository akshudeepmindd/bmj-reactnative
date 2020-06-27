import * as ListingAction from '../actionTypes/listingActionsTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ListingAction.CATEGORY_LISTING:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};
