import moment from "moment";

export const DOTOGGLE = "DOTOGGLE";
export const FORCETRUE = true;

export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";

// for cors bypass
export const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
export const TARGET_URL =
  "https://maps.googleapis.com/maps/api/place/autocomplete/json?&key=KEY";
export const URL = PROXY_URL + TARGET_URL;

export const validateTypes = {
  OK: "OK",
  NO_GUEST: "NO_GUEST",
  START_DATE: "START_DATE",
  END_DATE: "END_DATE",
  LOCATION: "LOCATION",
};

export const demoLocationSearchResults = [
  {
    id: 1,
    name: "Las Vegas",
    state: "Nevada",
    stateSymbol: "NV",
    city: "Las Vegas",
  },
  {
    id: 2,
    name: "Las Vegas Strip",
    state: "Nevada",
    stateSymbol: "NV",
    city: "Las Vegas",
  },
  {
    id: 3,
    name: "North Las Vegas",
    state: "Nevada",
    stateSymbol: "NV",
    city: "Las Vegas",
  },
];

export const dateDisplay = (date) => moment(date).format("MMMM DD");

export const guestDisplay = (adultsCount, childrenCount, infantsCount = 0) => {
  if (adultsCount + childrenCount + infantsCount === 0) {
    return "Add Guests";
  }
  return `${adultsCount + childrenCount} ${
    adultsCount + childrenCount <= 1 ? "guest" : "guests"
  } ${infantsCount !== 0 ? ", " + infantsCount : ""} ${
    infantsCount !== 0 ? (infantsCount <= 1 ? "infant" : "infants") : ""
  }`;
};

export const validateBookingInfo = (bookingInfo) => {
  console.log("validateBookingInfo", bookingInfo);
  const {
    selectedLocation,
    startDate,
    endDate,
    adultsNum,
    childrenNum,
    infantsNum,
  } = bookingInfo;
  if (selectedLocation === null) return validateTypes.LOCATION;
  if (startDate === null) return validateTypes.START_DATE;
  if (endDate === null) return validateTypes.END_DATE;

  if (adultsNum + childrenNum + infantsNum === 0) return validateTypes.NO_GUEST;
  return validateTypes.OK;
};

export const guestDisplaySearch = (guestNumber) => {
  return guestNumber === 0
    ? "Add Guests"
    : guestNumber + " " + (guestNumber <= 1 ? "guest" : "guests");
};

export const calcDayDiff = (
  checkIn,
  checkOut,
  measurementString = "days",
  formatString = "MMMM-DD-YYYY"
) => {
  const a = moment(checkIn);
  const b = moment(checkOut);

  return Math.abs(a.diff(b, measurementString));
};

export const getPriceNum = (string) => {
  if (!string) return 0;
  const n = string.match(/(\d+)/);
  return parseInt(n[0]);
};

export const getTotalPrice = (pricePerNight, dayRange) => {
  console.log("getTotalPrice", pricePerNight, dayRange);
  return pricePerNight * dayRange;
};

export const unitDisplay = (itemNumber, unit) => {
  return itemNumber >= 1 ? unit + "s" : unit;
};

export const onlyUnique = (array, key) => {
  let mymap = new Map();

  let unique = array.filter((obj) => {
    if (!mymap.has(obj[key])) {
      mymap.set(obj[key], true);
      return true;
    }
    return false;
  });

  return unique;
};
