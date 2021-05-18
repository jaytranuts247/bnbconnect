import { onlyUnique } from "../../utils/utils";
import {
  LOAD_REVIEWS,
  LOAD_CURRENT_REVIEW,
  UPDATE_REVIEW,
  REMOVE_REVIEW,
  SET_ERROR_REVIEW,
  CLEAR_ERROR_REVIEW,
  SET_CURRENT_REVIEW,
  CLEAR_CURRENT_REVIEW,
  LOAD_ALL_REVIEWS,
  SET_IS_REVIEWED,
} from "../types";

const initialState = {
  reviews: null,
  currentReview: null,
  isReviewed: null,
  errors: null,
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_REVIEW:
      return {
        ...state,
        currentReview: {
          ...state.currentReview,
          [action.payload.key]: action.payload.value,
        },
        // isReviewed: action.payload.hasOwnProperty("_id"),
      };
    case CLEAR_CURRENT_REVIEW:
      return {
        ...state,
        currentReview: null,
        isReviewed: null,
      };
    case SET_IS_REVIEWED:
      return {
        ...state,
        isReviewed: action.payload,
      };
    case LOAD_ALL_REVIEWS:
    case LOAD_REVIEWS:
      return {
        ...state,
        reviews:
          state.reviews !== null
            ? onlyUnique([...state.reviews, ...action.payload], "_id")
            : [...action.payload],
      };
    case LOAD_CURRENT_REVIEW:
      return {
        ...state,
        currentReview: action.payload,
      };
    case UPDATE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.map((review) =>
          review._id === action.payload._id ? action.payload : review
        ),
      };
    case REMOVE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.filter(
          (review) => review._id !== action.payload
        ),
      };
    case SET_ERROR_REVIEW:
      return {
        ...state,
        errors: action.payload,
      };
    case CLEAR_ERROR_REVIEW:
      return {
        ...state,
        errors: null,
      };
    default:
      return state;
  }
};

export default reviewReducer;
