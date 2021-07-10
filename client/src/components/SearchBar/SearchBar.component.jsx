import React, { useState, useRef, useEffect, forwardRef } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import GuestCount from "../GuestCount.component";
import LocationSearchField from "../LocationSearchField.component";

import {
  dateDisplay,
  guestDisplay,
  validateBookingInfo,
  validateTypes,
  DOTOGGLE,
  FORCETRUE,
} from "../../utils/utils";

// import { useOnClickOutsideDoubleRefs } from "../../hooks/useOnClickOutsideDoubleRef";

import CancelIcon from "@material-ui/icons/Cancel";

import {
  resetGuestsNumber,
  setBookingDates,
} from "../../redux/booking/booking.actions";

import {
  Wrapper,
  SearchBarContainer,
  Seperator,
  StyledSearchIcon,
  StyledButtonCircle,
  StyledButtonRound,
} from "./SearchBar.styles";

import {
  TOGGLE_GUEST,
  TOGGLE_LOCATION_SEARCH,
  RESET_TOGGLE,
  TOGGLE_CHECK_IN,
  TOGGLE_CHECK_OUT,
  LOAD_RECOMMENDED_LOCATION_RESULTS,
} from "../../redux/types";
import { useHistory } from "react-router";
import { setListings } from "../../redux/listing/listing.actions";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

const SearchBar = forwardRef((props, ref) => {
  const {
    onSearch,
    startDate,
    endDate,
    adultsCount,
    childrenCount,
    infantsCount,
    selectedLocation,
    resetGuestsNumber,
    recommendedResults,
    toggleGuest,
    toggleLocationSearch,
    toggleDatePick,
    toggleCheckIn,
    toggleCheckOut,
    setToggleGuest,
    setToggleLocationSearch,
    setBookingDates,
    setToggleCheckIn,
    setToggleCheckOut,
    resetToggle,
    setRecommendedResults,
    setListings,
    handleClickOnSearch,
  } = props;
  const [locationInput, setLocationInput] = useState("");

  let history = useHistory();

  const guestRef = useRef();
  const inputRef = useRef();
  const datePickerRef = useRef();
  const locationRef = useRef();

  const searchBarRef = useRef();

  console.log("ref in searchBar", ref !== null);

  // useOnClickOutsideDoubleRefs(guestRef, ref, () => {
  //   console.log("useOnClickOutsideDoubleRefs inside SearchBar guestRef,ref");
  //   resetToggle();
  // });

  // useOnClickOutside(ref, () => {
  //   if (onSearch === true && ref && handleClickOnSearch) {
  //     console.log("ref", ref);
  //     handleClickOnSearch(false);
  //   }
  // });
  useOnClickOutside(searchBarRef, () => {
    resetToggle();
    if (onSearch) handleClickOnSearch();
  });

  const selectionRange = {
    startDate: startDate === null ? new Date() : moment(startDate).toDate(),
    endDate: endDate === null ? new Date() : moment(endDate).toDate(),
    key: "selection",
  };

  // * Handle query autocompletion
  useEffect(() => {
    if (window.google) {
      // const input = document.getElementById("location-input");
      // const autocomplete = new window.google.maps.places.Autocomplete(input);
      // autocomplete.addListener("place_changed", () => {
      // 	console.log("autocomplete");

      // 	const location = autocomplete.getPlace();
      // 	console.log(location);
      // });

      const handleSuggestions = (predictions, status) => {
        if (
          status !== window.google.maps.places.PlacesServiceStatus.OK ||
          !predictions
        ) {
          console.log(status);
          return;
        }
        setRecommendedResults(predictions);
      };
      const autoCompleteService =
        new window.google.maps.places.AutocompleteService();

      autoCompleteService.getPlacePredictions(
        { input: locationInput },
        handleSuggestions
        // (predictions, status) => {
        // 	console.log(predictions);
        // 	setRecommendedResults(predictions);
        // }
      );
    }
  }, [locationInput]);

  useEffect(() => {
    if (!selectedLocation) return;
    setLocationInput(selectedLocation.description);
    inputRef.current.focus();
  }, [selectedLocation]);

  useEffect(() => {
    if (toggleLocationSearch) inputRef.current.focus();
  }, [toggleLocationSearch]);

  const handleDatePick = (ranges) => {
    console.log(ranges);
    console.log(moment(ranges.selection.startDate).format("MMMM DD"));
    if (ranges) {
      setBookingDates({
        startDate: ranges.selection.startDate,
        endDate: ranges.selection.endDate,
      });
    }
  };

  const handleClickGuest = (e) => {
    e.preventDefault();
    setToggleGuest(DOTOGGLE);
  };

  const handleClickSearch = (e) => {
    e.preventDefault();
    // setToggleGuest(DOTOGGLE);
    console.log("handleClickSearch");
    setToggleGuest(false);

    // TODO: check if location is empty
    // * if empty, then focus input
    // * if not, go to result search page

    const validateResult = validateBookingInfo({
      startDate,
      endDate,
      adultsNum: adultsCount,
      childrenNum: childrenCount,
      infantsNum: infantsCount,
      selectedLocation,
    });

    // Link to search results Page
    if (validateResult === validateTypes.OK) {
      if (handleClickOnSearch) handleClickOnSearch(false);
      return redirectToSearch();
    }
    if (validateResult === validateTypes.LOCATION)
      return setToggleLocationSearch(FORCETRUE);
    if (validateResult === validateTypes.START_DATE) return setToggleCheckIn();
    if (validateResult === validateTypes.END_DATE) return setToggleCheckOut();
    if (validateResult === validateTypes.NO_GUEST)
      return setToggleGuest(FORCETRUE); // always set to true
  };

  const redirectToSearch = () => {
    console.log("redirectToSearch");
    fetchListing();
    history.push("/search");
  };

  const fetchListing = async () => {
    const requestBody = {
      pagination: 1,
      bookingInput: {
        adultsCount,
        childrenCount,
        infantsCount,
        checkIn: moment(startDate).format("YYYY-MMMM-DD"),
        checkOut: moment(endDate).format("YYYY-MMMM-DD"),
      },
      locationInfo: {
        ...selectedLocation,
      },
    };
    console.log("fetchListing");
    setListings(requestBody);
  };

  const handleInputChange = (e) => {
    if (e) e.preventDefault();
    setLocationInput(e.target.value);
    if (!toggleLocationSearch && recommendedResults) {
      // console.log("handle inputchange");
      setToggleLocationSearch(FORCETRUE);
    }
  };

  const handleClickCheckIn = () => setToggleCheckIn();
  const handleClickCheckOut = () => setToggleCheckOut();
  const handleClickLocation = () => {
    setToggleLocationSearch(DOTOGGLE);
    // inputRef.current.focus();
  };

  return (
    <Wrapper>
      <SearchBarContainer
        toggleDatePick={toggleDatePick}
        toggleLocationSearch={toggleLocationSearch}
        toggleGuest={toggleGuest}
        toggleCheckIn={toggleCheckIn}
        toggleCheckOut={toggleCheckOut}
        // ref={searchRef}
        // ref={ref}
        ref={searchBarRef}
        onSearch={onSearch}
      >
        <form action="/search">
          <ul>
            <li
              className="location-search"
              onClick={handleClickLocation}
              ref={locationRef}
            >
              <div className="search-box">
                <div className="label">
                  <label htmlFor="location">Location</label>
                </div>
                <div className="input">
                  {/* <PlacesAutocomplete
										value={locationInput}
										onChange={setLocationInput}
									>
										{renderFunc}
									</PlacesAutocomplete> */}

                  <input
                    id="location-input"
                    type="text"
                    placeholder="Where are you going?"
                    name="location"
                    ref={inputRef}
                    value={locationInput}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </li>

            {!(toggleLocationSearch || toggleCheckIn) && <Seperator />}

            <li className="checkInOutDatePick">
              <div className="search-box check-in" onClick={handleClickCheckIn}>
                <div className="label">
                  <label htmlFor="checkin-date">Check in</label>
                </div>
                <div className="input">
                  {startDate === null ? "Add Dates" : dateDisplay(startDate)}
                </div>
              </div>

              {!(toggleCheckIn || toggleCheckOut) && <Seperator />}

              <div
                className="search-box check-out"
                onClick={handleClickCheckOut}
              >
                <div className="label">
                  <label htmlFor="checkout-">Check out</label>
                </div>
                <div className="input">
                  {endDate === null ? "Add Dates" : dateDisplay(endDate)}
                </div>
              </div>
            </li>

            {!((!toggleLocationSearch && toggleGuest) || toggleCheckOut) && (
              <Seperator />
            )}

            <li className="guest-pick">
              <div
                className="search-box"
                onClick={() => setToggleGuest(DOTOGGLE)}
                ref={guestRef}
              >
                <div className="search-box__guest">
                  <div className="label">
                    <label htmlFor="guest-number">Guests</label>
                  </div>
                  <div className="guest-number">
                    <span>
                      {guestDisplay(adultsCount, childrenCount, infantsCount)}
                    </span>
                  </div>
                </div>
                {guestDisplay(adultsCount, childrenCount, infantsCount) !==
                  "Add Guests" && (
                  <CancelIcon
                    fontSize="large"
                    onClick={() => resetGuestsNumber()}
                    color="disabled"
                  />
                )}
              </div>
              {toggleGuest ? (
                <StyledButtonRound type="button" onClick={handleClickSearch}>
                  <StyledSearchIcon />
                  <span>Search</span>
                </StyledButtonRound>
              ) : (
                <StyledButtonCircle type="button" onClick={handleClickGuest}>
                  <StyledSearchIcon />
                </StyledButtonCircle>
              )}
            </li>
          </ul>
        </form>

        {toggleLocationSearch && (
          <LocationSearchField
            // toggleLocationSearch={toggleLocationSearch}
            // setToggleLocationSearch={setToggleLocationSearch}
            handleClickLocation={handleClickLocation}
          />
        )}

        {!toggleLocationSearch && toggleGuest && (
          <GuestCount isBoxShadow={true} />
        )}

        {(toggleCheckIn || toggleCheckOut) && (
          <div className="date-picker">
            <div className="date-picker-container" ref={datePickerRef}>
              <DateRange
                ranges={[selectionRange]}
                onChange={handleDatePick}
                months={2}
                rangeColors="#f1f1f1"
                color="#ff385ceb"
                direction="horizontal"
                showMonthAndYearPickers={false}
                showSelectionPreview={true}
                showPreview={false}
                showDateDisplay={false}
              />
            </div>
          </div>
        )}
      </SearchBarContainer>
    </Wrapper>
  );
});

const mapStateToProps = ({ booking }) => ({
  startDate: booking.startDate,
  endDate: booking.endDate,
  adultsCount: booking.adultsNum,
  childrenCount: booking.childrenNum,
  infantsCount: booking.infantsNum,
  selectedLocation: booking.selectedLocation,
  toggleGuest: booking.toggleGuest,
  toggleLocationSearch: booking.toggleLocationSearch,
  toggleDatePick: booking.toggleDatePick,
  toggleCheckIn: booking.toggleCheckIn,
  toggleCheckOut: booking.toggleCheckOut,
  recommendedResults: booking.recommendedResults,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setBookingDates: (dateRange) => dispatch(setBookingDates(dateRange)),
    resetGuestsNumber: () => dispatch(resetGuestsNumber()),
    setToggleGuest: (toggle) =>
      dispatch({ type: TOGGLE_GUEST, payload: toggle }),
    setToggleLocationSearch: (toggle) =>
      dispatch({ type: TOGGLE_LOCATION_SEARCH, payload: toggle }),
    setToggleCheckIn: () => dispatch({ type: TOGGLE_CHECK_IN }),
    setToggleCheckOut: () => dispatch({ type: TOGGLE_CHECK_OUT }),
    resetToggle: () => dispatch({ type: RESET_TOGGLE }),
    setRecommendedResults: (locationResults) =>
      dispatch({
        type: LOAD_RECOMMENDED_LOCATION_RESULTS,
        payload: locationResults,
      }),
    setListings: (requestBody) => dispatch(setListings(requestBody)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(SearchBar);
