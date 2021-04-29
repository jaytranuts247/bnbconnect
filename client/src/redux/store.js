import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// Note: logger must be the last middleware in chain,
// otherwise it will log thunk and promise,
// not actual actions (#20).
const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};

const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
const reduxPersistor = { store, persistor };

export default reduxPersistor;
