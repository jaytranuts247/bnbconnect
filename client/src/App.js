import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
// import "./App.css";
import Header from "./components/Header/Header.component";

import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import setAuthToken from "./utils/setAuthToken";
import Loading from "./components/Loading.component";
import Profile from "./pages/Profile/Profile.component";
import Listing from "./components/Listing/Listing.component";
import Booking from "./pages/Booking/Booking.component";
import PrivateRoute from "./components/PrivateRoute";
import { LOGIN, SIGNUP } from "./utils/utils";
import Login from "./components/Login/Login.component";
import SignUp from "./components/SignUp/SignUp.component";

const BackgroundOverlay = styled.div`
  z-index: -10;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(255, 255, 255, 0.2);
`;

const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  background: rgba(0, 0, 0, 0.5);

  /* height: 100vh;
	width: 100vw; */

  .modal-child {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 450px;
  }
`;

if (localStorage.token) setAuthToken(localStorage.token);

function App({ isFetching }) {
  const [loginSignUp, setLoginSignUp] = useState("");

  let location = useLocation();
  const isHome = location.pathname === "/" || "/home" ? 1 : 0;
  const isSearchRoute = location.pathname === "/search" ? 1 : 0;
  console.log(location);

  return (
    <div className="app">
      <GlobalStyle pathname={location.pathname} />
      <BackgroundOverlay />
      {(loginSignUp === LOGIN || loginSignUp === SIGNUP) && (
        <ModalBackground>
          <div className="modal-child">
            {loginSignUp === LOGIN ? (
              <Login
                loginSignUp={loginSignUp}
                setLoginSignUp={setLoginSignUp}
              />
            ) : loginSignUp === SIGNUP ? (
              <SignUp
                loginSignUp={loginSignUp}
                setLoginSignUp={setLoginSignUp}
              />
            ) : null}
          </div>
        </ModalBackground>
      )}
      <Header
        isHome={isHome}
        isSearchRoute={isSearchRoute}
        setLoginSignUp={setLoginSignUp}
      />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={() => <Redirect to="/home" />} />
        <Route
          exact
          path="/search"
          render={(props) => <SearchPage isFetching={isFetching} {...props} />}
        />
        <Route
          exact
          path="/listings/:listing_id"
          render={(props) => (
            <Listing setLoginSignUp={setLoginSignUp} {...props} />
          )}
        />
        <PrivateRoute exact path="/bookings" component={Booking} />
        <PrivateRoute exact path="/profile" component={Profile} />
        {/* <Route exact path="/loading" component={Loading} /> */}
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ listing }) => ({
  isFetching: listing.isFetching,
});

export default connect(mapStateToProps)(App);

/*
 * search on map
 * - filter new listings onMapDrag
 *   - send request to server to get more listings if place_id is different
 * - debounce search - limit search ----> OK
 * - check for duplicate before write to DB
 * - make dummmy reviews
 * - scrape with pagination -> 100 listings ???
 * - Map
 *   - show popup once click to item on map
 *   - calculate the location to show on map (get map width and height, location of the price tag)
 * - review:
 *   - set error
 *   - add joi on backend
 */
