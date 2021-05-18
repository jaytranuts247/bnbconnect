import {
  INCREMENT_ADULTS_NUMBER,
  INCREMENT_CHILDREN_NUMBER,
  INCREMENT_INFANTS_NUMBER,
  DECREMENT_ADULTS_NUMBER,
  DECREMENT_CHILDREN_NUMBER,
  DECREMENT_INFANTS_NUMBER,
  RESET_GUESTS_NUMBER,
  SET_BOOKING_DATES,
} from "../types";

export const guestIncrement = (guestType) => {
  let actionType = "";

  if (guestType === "adult") actionType = INCREMENT_ADULTS_NUMBER;
  if (guestType === "children") actionType = INCREMENT_CHILDREN_NUMBER;
  if (guestType === "infant") actionType = INCREMENT_INFANTS_NUMBER;

  return { type: actionType };
};

export const guestDecrement = (guestType) => {
  let actionType = "";

  if (guestType === "adult") actionType = DECREMENT_ADULTS_NUMBER;
  if (guestType === "children") actionType = DECREMENT_CHILDREN_NUMBER;
  if (guestType === "infant") actionType = DECREMENT_INFANTS_NUMBER;

  return { type: actionType };
};

export const resetGuestsNumber = () => {
  return { type: RESET_GUESTS_NUMBER };
};

export const setBookingDates = (dateRange) => {
  return { type: SET_BOOKING_DATES, payload: dateRange };
};
