import {
  SET_LISTINGS,
  TOGGLE_ISFETCHING,
  SET_FILTERED_LISTINGS,
  SET_CURRENT_LISTING,
  CLEAR_CURRENT_LISTING,
  SET_ERROR_LISTING,
  CLEAR_ERROR_LISTING,
} from "../types";

const initialState = {
  isFetching: false,
  listings: null,
  filtered_listings: null,
  currentListing: null,
  errors: null,
};

const listingReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ISFETCHING:
      return {
        ...state,
        isFetching: !state.isFetching,
      };
    case SET_LISTINGS:
      return {
        ...state,
        listings: [...action.payload],
      };
    case SET_FILTERED_LISTINGS:
      return {
        ...state,
        filtered_listings: [...action.payload],
      };
    case SET_CURRENT_LISTING:
      return {
        ...state,
        currentListing: action.payload,
      };
    case CLEAR_CURRENT_LISTING:
      return {
        ...state,
        currentListing: null,
      };
    case SET_ERROR_LISTING:
      return {
        ...state,
        errors: action.payload,
        isFetching: false,
      };
    case CLEAR_ERROR_LISTING:
      return {
        ...state,
        errors: null,
      };
    default:
      return state;
  }
};

export default listingReducer;
