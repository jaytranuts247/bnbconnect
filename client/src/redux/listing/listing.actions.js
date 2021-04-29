import {
  SET_LISTINGS,
  TOGGLE_ISFETCHING,
  SET_FILTERED_LISTINGS,
} from "../types";
import { filterListingInBound } from "../../utils/map_utils";

const toggleIsFetching = () => ({
  type: TOGGLE_ISFETCHING,
});

// need to include the number of listings in request ??
export const setListings = (requestBody) => async (dispatch) => {
  try {
    // dispatch(toggleIsFetching());
    console.log("set listings");

    dispatch(toggleIsFetching());
    const res = await fetch("http://localhost:5000/api/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const data = await res.json();
    console.log(data);

    if (data) {
      dispatch({ type: SET_LISTINGS, payload: data });
      // dispatch(toggleIsFetching());
      dispatch(toggleIsFetching());
    }
  } catch (err) {
    console.log(err);
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
  }
};
