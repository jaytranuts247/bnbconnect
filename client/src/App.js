import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Switch, Route, useLocation } from "react-router-dom";
// import "./App.css";
import Header from "./components/Header/Header.component";

import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import setAuthToken from "./utils/setAuthToken";
import Loading from "./components/Loading.component";
import Profile from "./pages/Profile";
import Booking from "./pages/Booking";

export const BackgroundOverlay = styled.div`
  z-index: -10;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(255, 255, 255, 0.2);
`;

if (localStorage.token) setAuthToken(localStorage.token);

function App({ isFetching }) {
  let location = useLocation();
  const isHome = location.pathname === "/" ? 1 : 0;
  const isSearchRoute = location.pathname === "/search" ? 1 : 0;
  console.log(location);

  return (
    <div className="app">
      <GlobalStyle pathname={location.pathname} />
      <BackgroundOverlay />
      <Header isHome={isHome} isSearchRoute={isSearchRoute} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/search"
          render={(props) => <SearchPage isFetching={isFetching} {...props} />}
        />
        <Route exact path="/booking/:id" component={Booking} />
        <Route exact path="/profile/:id" component={Profile} />
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
 * - scrappe with pagination -> 100 listings ???
 * - Map
 *   - show popup once click to item on map
 *   - calculate the location to show on map (get map width and height, location of the price tag)
 */
