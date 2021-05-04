import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import persistedReducer from "./rootReducer";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

// Note: logger must be the last middleware in chain,
// otherwise it will log thunk and promise,
// not actual actions (#20).
const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const initialState = {};

const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

export default store;
