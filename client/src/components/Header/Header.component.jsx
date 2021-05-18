import React, { useRef, useState, useEffect } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { motion } from "framer-motion";

import {
  StyledButtonCircle,
  StyledHeader,
  HeaderContainer,
  StyledMenuIcon,
  StyledSearchIcon,
  Seperator,
  ModalBackground,
  SearchBarContainer,
} from "./Header.styles";

import {
  validateBookingInfo,
  validateTypes,
  guestDisplaySearch,
  LOGIN,
  SIGNUP,
} from "../../utils/utils";
// import { useOnClickOutsideDoubleRefs } from "../../hooks/useOnClickOutsideDoubleRef";
import Login from "../Login/Login.component";
import SignUp from "../SignUp/SignUp.component";
import SearchBar from "../SearchBar/SearchBar.component";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import { loadUser, LogOutUser } from "../../redux/user/user.actions";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { useHistory } from "react-router";
import { AnimateSharedLayout } from "framer-motion";
import { useOnClickOutsideDoubleRefs } from "../../hooks/useOnClickOutsideDoubleRef";
import { useLocation } from "react-router-dom";
import { matchPathname } from "../../utils/header_utils";

const searchBarVariants = {
  collapsed: {
    opacity: 0,
    height: 0,
    y: -100,
    scale: 0.2,
  },
  expanded: {
    opacity: 1,
    height: "auto",
    y: 0,
    scale: 1,
  },
};

const Header = ({
  isHome,
  isSearchRoute,
  startDate,
  endDate,
  adultsCount,
  childrenCount,
  infantsCount,
  selectedLocation,
  isAuthenticated,
  LogOutUser,
  loadUser,
  setLoginSignUp,
}) => {
  const [menuToggle, setMenuToggle] = useState(false);
  // const [loginSignUp, setLoginSignUp] = useState("");
  const [onSearch, setOnSearch] = useState(false);

  let history = useHistory();
  let location = useLocation();

  const menuRef = useRef();
  const profileRef = useRef();
  const betweenBarRef = useRef();

  // useOnClickOutsideDoubleRefs(menuRef, profileRef, () => {
  //   setMenuToggle(false);
  // });

  const isListingPath = matchPathname(location.pathname, /(\/listings\/)\w+/g);
  const isSearchPath = location.pathname === "/search";

  useOnClickOutside(profileRef, () => setMenuToggle(false));

  useEffect(() => {
    let validateResult = validateBookingInfo({
      startDate,
      endDate,
      adultsNum: adultsCount,
      childrenNum: childrenCount,
      infantsNum: infantsCount,
      selectedLocation,
    });
    console.log(moment(startDate).format("MMMM DD"));
    //if (validateResult !== validateTypes.OK) return history.push("/"); // enable later
    // eslint-disable-next-line
  }, []);

  const handleClickLogin = () => {
    if (localStorage.token) return loadUser();
    setLoginSignUp(LOGIN);
  };
  const handleClickSignUp = () => {
    setLoginSignUp(SIGNUP);
  };
  // const handleClickHeaderSearch = () => {
  //   toggleSearchBar((prev) => !prev);
  // };
  const handleClickOnSearch = () => {
    console.log("handle click onsearch");
    setOnSearch((prev) => !prev);
  };

  // const handleClickModal = () => {
  //   // dupicate with click on login and signup
  //   console.log("handleClickModal");
  //   setLoginSignUp("");
  // };

  const handleClickBooking = () => history.push("/bookings"); // push to /:id/booking
  const handleClickProfile = () => history.push("/profile"); // push to /profile/:id
  const handleClickLogout = () => LogOutUser();

  const handleClickMenu = () => setMenuToggle((prev) => !prev);
  const handleClickSearch = () => {}; // click to show searchBar

  return (
    <StyledHeader
      key="header"
      isHome={isHome}
      isSearchRoute={isSearchRoute}
      // transition={{ ease: "easeInOut", duration: 0.8 }}
      // layout
    >
      <AnimateSharedLayout>
        <HeaderContainer
          isNoGuest={adultsCount + childrenCount === 0 ? 1 : 0}
          isHome={isHome}
          layout
          transition={{
            ease: "easeInOut",
          }}
        >
          <div className="search-header">
            <img
              className="header__icon"
              src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
              alt="airbnb-icon"
              onClick={() => history.push("/home")}
            />
            {(isSearchPath || isListingPath) &&
              selectedLocation &&
              (!onSearch ? (
                <motion.div className="header__between">
                  <motion.div
                    className="bar-container"
                    onClick={handleClickOnSearch}
                    ref={betweenBarRef}
                    layoutId="expandable-searchbar"
                    transition={{
                      ease: "easeInOut",
                    }}
                  >
                    <div className="info-bar">
                      <div className="info-bar__location">
                        {selectedLocation.description
                          ? selectedLocation.description
                          : ""}
                      </div>
                      <Seperator />
                      <div className="info-bar__date">
                        {`${moment(startDate).format("MMM DD")} - ${moment(
                          endDate
                        ).format("DD")}`}
                      </div>
                      <Seperator />
                      <div className="info-bar__guest">
                        <div>
                          <span>
                            {guestDisplaySearch(adultsCount + childrenCount)}
                          </span>
                        </div>
                        <StyledButtonCircle
                          type="button"
                          size={32}
                          onClick={handleClickSearch}
                        >
                          <StyledSearchIcon />
                        </StyledButtonCircle>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                <SearchBarContainer
                  key="searchbar"
                  // initial={onSearch ? "expanded" : "collapsed"}
                  // animate={onSearch ? "expanded" : "collapsed"}
                  // variants={searchBarVariants}
                  // // layout
                  layoutId="expandable-searchbar"
                  // transition={{
                  //   duration: 0.8,
                  //   ease: "easeInOut",
                  // }}
                  transition={{
                    ease: "easeInOut",
                  }}
                >
                  <div className="places-to-stay" onClick={handleClickOnSearch}>
                    <span>Places to stay</span>
                  </div>
                  <SearchBar
                    onSearch={onSearch}
                    handleClickOnSearch={handleClickOnSearch}
                  />
                </SearchBarContainer>
              ))}
            <div className="header__right">
              <div
                className="header__profile"
                onClick={handleClickMenu}
                ref={profileRef}
              >
                <StyledMenuIcon color="disabled" />
                <AccountCircleRoundedIcon color="disabled" id="profile-icon" />
                {menuToggle && (
                  <div className="menu-dropdown" ref={menuRef}>
                    {isAuthenticated ? (
                      <div>
                        <div
                          className="dropdown-item"
                          onClick={handleClickBooking}
                        >
                          <p>Bookings</p>
                        </div>
                        <div
                          className="dropdown-item"
                          onClick={handleClickProfile}
                        >
                          <p>Profile</p>
                        </div>
                        <div
                          className="dropdown-item"
                          onClick={handleClickLogout}
                        >
                          <p>Log out</p>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div
                          className="log-in dropdown-item"
                          onClick={handleClickLogin}
                        >
                          <p>Log in</p>
                        </div>
                        <div
                          className="sign-up dropdown-item"
                          onClick={handleClickSignUp}
                        >
                          <p>Sign up</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </HeaderContainer>
      </AnimateSharedLayout>
    </StyledHeader>
  );
};

const mapStateToProps = ({ booking, user }) => ({
  startDate: booking.startDate,
  endDate: booking.endDate,
  adultsCount: booking.adultsNum,
  childrenCount: booking.childrenNum,
  infantsCount: booking.infantsNum,
  selectedLocation: booking.selectedLocation,
  isAuthenticated: user.isAuthenticated,
});

const mapDispatchToProps = {
  LogOutUser,
  loadUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
