import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

// Note: logger must be the last middleware in chain,
// otherwise it will log thunk and promise,
// not actual actions (#20).
const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

const initialState = {};

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
