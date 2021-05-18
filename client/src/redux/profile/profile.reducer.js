import {
  LOAD_PROFILE_INTRO,
  SET_ERROR_PROFILE,
  CLEAR_ERROR_PROFILE,
  SET_PROFILE_INTRO,
} from "../types";

const initialState = {
  intro: "",
  profile: null,
  errors: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_INTRO:
      return {
        ...state,
        intro: action.payload,
      };
    case LOAD_PROFILE_INTRO:
      return {
        ...state,
        profile: action.payload,
      };
    case SET_ERROR_PROFILE:
      return {
        ...state,
        errors: action.payload,
      };
    case CLEAR_ERROR_PROFILE:
      return {
        ...state,
        errors: null,
      };
    default:
      return state;
  }
};

export default profileReducer;
