import * as Listing from '../../services/listing';
import * as ListingAction from '../actionTypes/listingActionsTypes';

export const CategoryListing = token => async dispatch => {
  const res = await Listing.CategoryList (token);

  dispatch ({
    type: ListingAction.CATEGORY_LISTING,
    payload: res.data,
  });
  return res.data;
};
