import axios from "axios";
import _ from "lodash";
import {
  LOAD_REVIEWS,
  LOAD_ALL_REVIEWS,
  SET_ERROR_REVIEW,
  LOAD_CURRENT_REVIEW,
  SET_CURRENT_REVIEW,
  UPDATE_REVIEW,
  CLEAR_CURRENT_REVIEW,
  SET_IS_REVIEWED,
} from "../types";

// load all reviews for those listings
export const loadAllReviews = (listings) => async (dispatch) => {
  try {
    const results = await Promise.all(
      listings.map(async (listing) => {
        const res = await axios.get(`/api/reviews/${listing._id}`);
        return res.data;
      })
    );
    dispatch({
      type: LOAD_ALL_REVIEWS,
      payload: _.flatten(results),
    });
    console.log("results", _.flatten(results));
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SET_ERROR_REVIEW,
      payload: err.message,
    });
  }
};

// get reviews for specific listing
export const loadReviews = (listing_id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/reviews/${listing_id}`);
    console.log("loadReviews", res.data);
    dispatch({
      type: LOAD_REVIEWS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SET_ERROR_REVIEW,
      payload: err.message,
    });
  }
};

export const loadReview = (listing_id, user) => async (dispatch) => {
  const initialReview = {
    listing_id,
    author_id: user._id,
    author_name: user.firstName + " " + user.lastName || "User name",
    reviewContent: "",
    accuracy: 3,
    location: 3,
    communication: 3,
    checkin: 3,
    cleanliness: 3,
    value: 3,
  };
  try {
    const res = await axios.get(`/api/reviews/${listing_id}/${user._id}`);
    const review = res.data !== null ? res.data : initialReview;

    // load all reviews for that listing
    dispatch({
      type: LOAD_CURRENT_REVIEW,
      payload: review,
    });

    // set isReviewed - did the user write review for this listing ?
    dispatch({
      type: SET_IS_REVIEWED,
      payload: res.data !== null,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SET_ERROR_REVIEW,
      payload: err.message,
    });
  }
};

export const createReview = (review) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/reviews", review, config);
    console.log(res.data);
    dispatch(loadReviews(res.data.listing_id));
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SET_ERROR_REVIEW,
      payload: err.message,
    });
  }
};

export const updateReview = (review) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    console.log("updateReview", review);
    const res = await axios.patch("/api/reviews", review, config);
    dispatch({
      type: UPDATE_REVIEW,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SET_ERROR_REVIEW,
      payload: err.message,
    });
  }
};

export const handleChange = (key, value) => {
  return {
    type: SET_CURRENT_REVIEW,
    payload: {
      key,
      value,
    },
  };
};

export const clearCurrentReview = () => (dispatch) => {
  dispatch({
    type: CLEAR_CURRENT_REVIEW,
  });
};
