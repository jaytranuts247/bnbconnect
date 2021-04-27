import { SET_LISTINGS, TOGGLE_ISFETCHING } from "../types";

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
