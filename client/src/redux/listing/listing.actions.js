import axios from "axios";
import {
  SET_LISTINGS,
  TOGGLE_ISFETCHING,
  SET_FILTERED_LISTINGS,
  SET_CURRENT_LISTING,
  SET_ERROR_LISTING,
  CLEAR_ERROR_LISTING,
} from "../types";

import { filterListingInBound } from "../../utils/map_utils";

const toggleIsFetching = () => ({
  type: TOGGLE_ISFETCHING,
});

export const loadCurrentListing = (listing_id) => async (dispatch) => {
  try {
    // set loading
    dispatch(toggleIsFetching());

    // start fetching
    const res = await axios.get(`/api/listings/${listing_id}`);
    console.log(res.data);
    dispatch({
      type: SET_CURRENT_LISTING,
      payload: res.data,
    });

    // stop loading
    dispatch(toggleIsFetching());
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SET_ERROR_LISTING,
      payload: err.message,
    });
  }
};

// need to include the number of listings in request ??
export const setListings = (requestBody) => async (dispatch) => {
  try {
    // dispatch(toggleIsFetching());
    console.log("set listings");

    dispatch(toggleIsFetching());
    const res = await fetch("/api/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const data = await res.json();

    dispatch({ type: SET_LISTINGS, payload: data });

    dispatch(toggleIsFetching());
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SET_ERROR_LISTING,
      payload: err.message,
    });
  }
};

export const filterOnMapChange = (bounds, listings) => async (dispatch) => {
  try {
    // console.log("filterOnMapChange");
    const filtered = await listings.filter((listing) => {
      return filterListingInBound(bounds, listing.coords);
    });
    // console.log("filtered", filtered);

    dispatch({ type: SET_FILTERED_LISTINGS, payload: filtered });
  } catch (err) {
    console.log(err);
    dispatch({
      type: SET_ERROR_LISTING,
      payload: err.message,
    });
  }
};

export const listingsOnMapChange = (bounds) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/listings/boundListing", bounds, config);
    console.log("listingsOnMapChange", res.data);
    dispatch({
      type: SET_LISTINGS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: SET_ERROR_LISTING,
      payload: err.message,
    });
  }
};

export const clearListingErrors = () => {
  return { type: CLEAR_ERROR_LISTING };
};
