import {
  LOAD_BOOKINGS,
  REMOVE_BOOKING,
  UPDATE_BOOKING,
  REMOVE_ALL_BOOKINGS,
  SET_USER_BOOKING_ERROR,
  CLEAR_USER_BOOKING_ERRORS,
  LOAD_BOOKINGS_LISTINGS,
  REMOVE_BOOKING_LISTING,
  CLEAR_BOOKING_LISTING,
} from "../types";

const updateBooking = (booking_list, booking) => {
  let tmp_booking_list = [booking_list];
  const foundIndex = tmp_booking_list.findIndex(
    (item) => item._id === booking._id
  );
  tmp_booking_list[foundIndex] = { ...booking };
  return tmp_booking_list;
};

const removeBookingListing = (booking_listings, listing) => {};

const initialState = {
  bookings: null,
  booking_listings: null,
  errors: null,
};

const userBookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKINGS:
      return {
        ...state,
        bookings: [...action.payload.bookings],
        booking_listings: [...action.payload.booking_listings],
      };
    case UPDATE_BOOKING:
      return {
        ...state,
        bookings: [...updateBooking(state.bookings, action.payload)],
      };
    case REMOVE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.filter(
          (booking) => booking._id !== action.payload._id
        ),
      };
    case REMOVE_ALL_BOOKINGS:
      return {
        ...state,
        bookings: null,
      };
    case LOAD_BOOKINGS_LISTINGS:
      return {
        ...state,
        booking_listings: [...action.payload],
      };
    case REMOVE_BOOKING_LISTING:
      return {
        ...state,
        booking_listings: removeBookingListing(
          state.booking_listings,
          action.payload
        ),
      };
    case CLEAR_BOOKING_LISTING:
      return {
        ...state,
        booking_listings: null,
      };
    case SET_USER_BOOKING_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    case CLEAR_USER_BOOKING_ERRORS:
      return {
        ...state,
        errors: null,
      };
    default:
      return state;
  }
};

export default userBookingReducer;
