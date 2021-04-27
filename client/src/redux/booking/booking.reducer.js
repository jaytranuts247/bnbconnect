// import {} from '../actions/types'
import { DOTOGGLE } from "../../utils/utils";
import {
	SET_LOCATION,
	SET_BOOKING_DATES,
	INCREMENT_ADULTS_NUMBER,
	DECREMENT_ADULTS_NUMBER,
	INCREMENT_CHILDREN_NUMBER,
	DECREMENT_CHILDREN_NUMBER,
	INCREMENT_INFANTS_NUMBER,
	DECREMENT_INFANTS_NUMBER,
	RESET_GUESTS_NUMBER,
	TOGGLE_DATE_PICKER,
	TOGGLE_LOCATION_SEARCH,
	TOGGLE_GUEST,
	TOGGLE_CHECK_IN,
	TOGGLE_CHECK_OUT,
	RESET_TOGGLE,
	LOAD_RECOMMENDED_LOCATION_RESULTS,
} from "../types";

import { incrementWithLimit, decrementWithLimit } from "../utils";

const initialState = {
	startDate: null,
	endDate: null,
	adultsNum: 0,
	childrenNum: 0,
	infantsNum: 0,
	selectedLocation: null,
	region: null,
	recommendedResults: null,
	toggleGuest: false,
	toggleLocationSearch: false,
	toggleDatePick: false,
	toggleCheckIn: false,
	toggleCheckOut: false,
};

const adultMaxLim = 16;
const childrenInfantMaxLim = 5;
const GuestMinLimit = 0;

const bookingReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOCATION:
			return {
				...state,
				selectedLocation: action.payload,
			};
		case LOAD_RECOMMENDED_LOCATION_RESULTS:
			return {
				...state,
				recommendedResults: [...action.payload],
			};
		case SET_BOOKING_DATES:
			return {
				...state,
				startDate: action.payload.startDate,
				endDate: action.payload.endDate,
			};
		case INCREMENT_ADULTS_NUMBER:
			return {
				...state,
				adultsNum: incrementWithLimit(state.adultsNum, adultMaxLim),
			};
		case DECREMENT_ADULTS_NUMBER:
			return {
				...state,
				adultsNum: decrementWithLimit(state.adultsNum, GuestMinLimit),
			};
		case INCREMENT_CHILDREN_NUMBER:
			return {
				...state,
				childrenNum: incrementWithLimit(
					state.childrenNum,
					childrenInfantMaxLim
				),
			};
		case DECREMENT_CHILDREN_NUMBER:
			return {
				...state,
				childrenNum: decrementWithLimit(state.childrenNum, GuestMinLimit),
			};
		case INCREMENT_INFANTS_NUMBER:
			return {
				...state,
				infantsNum: incrementWithLimit(state.infantsNum, childrenInfantMaxLim),
			};
		case DECREMENT_INFANTS_NUMBER:
			return {
				...state,
				infantsNum: decrementWithLimit(state.infantsNum, GuestMinLimit),
			};
		case TOGGLE_LOCATION_SEARCH:
			return {
				...state,
				toggleLocationSearch:
					action.payload === DOTOGGLE ? !state.toggleLocationSearch : true,
				toggleGuest: !state.toggleLocationSearch,
				toggleDatePick: false,
				toggleCheckIn: false,
				toggleCheckOut: false,
			};
		case TOGGLE_CHECK_IN:
			return {
				...state,
				toggleCheckIn: !state.toggleCheckIn,
				toggleCheckOut: false,
				toggleLocationSearch: false,
				toggleGuest: false,
			};
		case TOGGLE_CHECK_OUT:
			return {
				...state,
				toggleCheckOut: !state.toggleCheckOut,
				toggleCheckIn: false,
				toggleLocationSearch: false,
				toggleGuest: false,
			};
		case TOGGLE_DATE_PICKER:
			return {
				...state,
				toggleDatePick: !state.toggleDatePick,
				toggleLocationSearch: false,
				toggleGuest: false,
			};
		case TOGGLE_GUEST:
			return {
				...state,
				toggleGuest: action.payload === DOTOGGLE ? !state.toggleGuest : true,
				toggleDatePick: false,
				toggleLocationSearch: false,
				toggleCheckIn: false,
				toggleCheckOut: false,
			};
		case RESET_TOGGLE:
			return {
				...state,
				toggleGuest: false,
				toggleDatePick: false,
				toggleLocationSearch: false,
				toggleCheckIn: false,
				toggleCheckOut: false,
			};
		case RESET_GUESTS_NUMBER:
			return {
				...state,
				adultsNum: 0,
				childrenNum: 0,
				infantsNum: 0,
			};

		default:
			return state;
	}
};

export default bookingReducer;
