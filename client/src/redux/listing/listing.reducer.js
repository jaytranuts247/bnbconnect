import {
  SET_LISTINGS,
  TOGGLE_ISFETCHING,
  SET_FILTERED_LISTINGS,
} from "../types";

const initialState = {
  isFetching: false,
  listings: null,
  filtered_listings: null,
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
    default:
      return state;
  }
};

export default listingReducer;
