import {
  AUTH_ERROR,
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_CURRENT_USER,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
} from "../types";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";

export const loadUser = () => async (dispatch) => {
  console.log("load user");
  if (localStorage.token) setAuthToken(localStorage.token);
  try {
    console.log("object");
    const res = await axios.get("/api/auth");
    console.log("res", res.data);
    dispatch({
      type: SET_CURRENT_USER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: AUTH_ERROR,
      payload: err.message,
    });
  }
};

export const signUpUser = (user) => async (dispatch) => {
  try {
    console.log(user);
    // const res = await fetch("http://localhost:5000/api/users", {
    // 	method: "POST",
    // 	body: user,
    // 	// mode: "no-cors",
    // 	header: {
    // 		"Content-Type": "application/json",
    // 	},
    // });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:5000/api/users",
      user,
      config
    );

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    console.log(err);
    dispatch({
      type: SIGNUP_FAIL,
      payload: err.response.data.msg,
    });
  }
};

export const loginUser = (user) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/auth", user, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    // dispatch(loadUser());
    await dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.msg,
    });
  }
};

export const LogOutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

export const clearErrors = () => (dispatch) =>
  dispatch({
    type: CLEAR_ERRORS,
  });
