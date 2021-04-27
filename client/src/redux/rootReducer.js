import { combineReducers } from "redux";

import bookingReducer from "./booking/booking.reducer";
import listingReducer from "./listing/listing.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  booking: bookingReducer,
  user: userReducer,
  listing: listingReducer,
});

export default rootReducer;
