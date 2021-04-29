import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import { Provider } from "react-redux";
import reduxPersistor from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

// import "./index.css";

ReactDOM.render(
  <Provider store={reduxPersistor.store}>
    <PersistGate loading={null} persistor={reduxPersistor.persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
