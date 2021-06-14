import {
  LOAD_PROFILE_INTRO,
  SET_ERROR_PROFILE,
  SET_PROFILE_INTRO,
  CLEAR_ERROR_PROFILE,
} from "../types";
import axios from "axios";

export const loadProfile = (user_id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/profile/${user_id}`);
    dispatch({
      type: LOAD_PROFILE_INTRO,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SET_ERROR_PROFILE,
      payload: err.message,
    });
  }
};

export const createProfile = (profile) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/profile", profile, config);
    dispatch({
      type: LOAD_PROFILE_INTRO,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SET_ERROR_PROFILE,
      payload: err.message,
    });
  }
};

export const updateProfile = (profile) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.patch("/api/profile", profile, config);
    dispatch({
      type: LOAD_PROFILE_INTRO,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SET_ERROR_PROFILE,
      payload: err.message,
    });
  }
};

export const clearProfileErrors = () => {
  return { type: CLEAR_ERROR_PROFILE };
};

// no need to delete
export const handleChange = (value) => {
  return {
    type: SET_PROFILE_INTRO,
    payload: value,
  };
};
