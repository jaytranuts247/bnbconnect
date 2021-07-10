import axios from "axios";
import _ from "lodash";
import { onlyUnique } from "../../utils/utils";
import {
  CLEAR_USER_BOOKING_ERRORS,
  LOAD_BOOKINGS,
  REMOVE_ALL_BOOKINGS,
  SET_USER_BOOKING_ERROR,
  UPDATE_BOOKING,
} from "../types";

export const loadUserBooking = (user_id) => async (dispatch) => {
  try {
    console.log("loadUserBooking");
    const userBookingRes = await axios.get(`/api/bookings/${user_id}`);

    const booking_listings = await Promise.all(
      onlyUnique(userBookingRes.data, "listing_id").map(async (booking) => {
        let booking_listing = await axios.get(
          `/api/listings/${booking.listing_id}`
        );
        return booking_listing.data;
      })
    );
    console.log("booking_listings", booking_listings, userBookingRes.data);
    dispatch({
      type: LOAD_BOOKINGS,
      payload: {
        bookings: userBookingRes.data,
        booking_listings: _.flatten(booking_listings),
      },
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SET_USER_BOOKING_ERROR,
      payload: err.message,
    });
  }
};

export const createUserBooking = (booking) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    console.log("createUserBooking");
    const res = await axios.post(
      "http://localhost:5000/api/bookings",
      booking,
      config
    );

    // if  user booking date range is overlapping with existing bookings in database
    // then raise the booking error
    if (
      res.data.msg &&
      res.data.msg === "Your Booking day range is overalapped with others"
    ) {
      dispatch({
        type: SET_USER_BOOKING_ERROR,
        payload: res.data.msg,
      });
      return res.data.msg;
    }

    console.log("newBooking", res.data, res.data.guest_id);
    let user_id =
      res.data.guest_id !== undefined ? res.data.guest_id : booking.guest_id;

    dispatch(loadUserBooking(user_id));
  } catch (err) {
    console.log(err, err.message);
    dispatch({
      type: SET_USER_BOOKING_ERROR,
      payload: err.message,
    });
  }
};

export const updateBooking = (booking) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const updatedBooking = await axios.patch(
      `/api/bookings/${booking._id}`,
      booking,
      config
    );
    dispatch({
      type: UPDATE_BOOKING,
      payload: updatedBooking,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SET_USER_BOOKING_ERROR,
      payload: err.message,
    });
  }
};

export const removeBooking = (booking_id) => async (dispatch) => {
  try {
    await axios.delete(`api/bookings/${booking_id}`);
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SET_USER_BOOKING_ERROR,
      payload: err.message,
    });
  }
};

export const removeAllBookings = () => async (dispatch) => {
  try {
    const res = await axios.delete("/api/bookings");
    console.log(res);
    dispatch({
      type: REMOVE_ALL_BOOKINGS,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SET_USER_BOOKING_ERROR,
      payload: err.message,
    });
  }
};

export const clearUserBookingErrors = () => (dispatch) => {
  dispatch({
    type: CLEAR_USER_BOOKING_ERRORS,
  });
};
