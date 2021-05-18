import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer } from "redux-persist";

import bookingReducer from "./booking/booking.reducer";
import listingReducer from "./listing/listing.reducer";
import userReducer from "./user/user.reducer";
import alertReducer from "./alert/alert.reducer";
import userBookingReducer from "./user_booking/user_booking.reducer";
import reviewReducer from "./review/review.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["listing", "booking", "user", "user_booking"],
};

const rootReducer = combineReducers({
  booking: bookingReducer,
  user: userReducer,
  user_booking: userBookingReducer,
  review: reviewReducer,
  listing: listingReducer,
  alert: alertReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
