import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";
import _ from "lodash";
import PlacesAutocomplete from "react-places-autocomplete";

import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import GuestCount from "../GuestCount.component";
import LocationSearchField from "../LocationSearchField.component";

import {
	dateDisplay,
	demoLocationSearchResults,
	guestDisplay,
	validateBookingInfo,
	validateTypes,
	DOTOGGLE,
	FORCETRUE,
	PROXY_URL,
} from "../../utils/utils";

import { useOnClickOutsideDoubleRefs } from "../../hooks/useOnClickOutsideDoubleRef";

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
	TOGGLE_DATE_PICKER,
	TOGGLE_LOCATION_SEARCH,
	RESET_TOGGLE,
	TOGGLE_CHECK_IN,
	TOGGLE_CHECK_OUT,
	LOAD_RECOMMENDED_LOCATION_RESULTS,
} from "../../redux/types";
import { useHistory } from "react-router";

const renderFunc = ({
	getInputProps,
	getSuggestionItemProps,
	suggestions,
	loading,
}) => {
	if (loading)
		return (
			<div className="autocomplete-root">
				<input {...getInputProps()} />
				<div className="autocomplete-dropdown-container">
					{loading && <div>Loading...</div>}
					{/* {suggestions.map((suggestion) => (
				<div {...getSuggestionItemProps(suggestion)}>
					<span>{suggestion.description}</span>
				</div>
			))} */}
				</div>
			</div>
		);
};

// In render function

const SearchBar = ({
	startDate,
	endDate,
	adultsCount,
	childrenCount,
	infantsCount,
	selectedLocation,
	resetGuestsNumber,
	toggleGuest,
	toggleLocationSearch,
	toggleDatePick,
	toggleCheckIn,
	toggleCheckOut,
	setToggleGuest,
	setToggleDatePick,
	setToggleLocationSearch,
	setBookingDates,
	setToggleCheckIn,
	setToggleCheckOut,
	resetToggle,
	setRecommendedResults,
}) => {
	const [locationInput, setLocationInput] = useState("");

	let history = useHistory();

	const guestRef = useRef();
	const inputRef = useRef();
	const datePickerRef = useRef();
	const locationRef = useRef();
	const searchRef = useRef();

	useOnClickOutsideDoubleRefs(guestRef, searchRef, () => resetToggle());

	const selectionRange = {
		startDate: startDate === null ? new Date() : startDate,
		endDate: endDate === null ? new Date() : endDate,
		key: "selection",
	};

	// * Handle query autocompletion
	useEffect(() => {
		if (window.google) {
			const input = document.getElementById("location-input");
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
			const autoCompleteService = new window.google.maps.places.AutocompleteService();

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
		if (validateResult === validateTypes.OK) return history.push("/search");
		if (validateResult === validateTypes.LOCATION) return handleClickLocation();
		if (validateResult === validateTypes.START_DATE) return setToggleCheckIn();
		if (validateResult === validateTypes.END_DATE) return setToggleCheckOut();
		if (validateResult === validateTypes.NO_GUEST)
			return setToggleGuest(FORCETRUE); // always set to true
	};

	const handleInputChange = (e) => {
		if (e) e.preventDefault();
		setLocationInput(e.target.value);
	};

	const handleClickCheckIn = () => setToggleCheckIn();
	const handleClickCheckOut = () => setToggleCheckOut();
	const handleClickLocation = () => {
		setToggleLocationSearch();
		inputRef.current.focus();
	};

	return (
		<Wrapper>
			<SearchBarContainer
				toggleDatePick={toggleDatePick}
				toggleLocationSearch={toggleLocationSearch}
				toggleGuest={toggleGuest}
				toggleCheckIn={toggleCheckIn}
				toggleCheckOut={toggleCheckOut}
				ref={searchRef}
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
					<LocationSearchField handleClickLocation={handleClickLocation} />
				)}

				{!toggleLocationSearch && toggleGuest && <GuestCount />}

				{(toggleCheckIn || toggleCheckOut) && (
					<div className="day-picker">
						<div className="day-picker-container" ref={datePickerRef}>
							<DateRangePicker
								ranges={[selectionRange]}
								onChange={handleDatePick}
							/>
						</div>
					</div>
				)}
			</SearchBarContainer>
			{/* <Calendar date={new Date()} />
			 */}
		</Wrapper>
	);
};

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
});

const mapDispatchToProps = (dispatch) => {
	return {
		setBookingDates: (dateRange) => dispatch(setBookingDates(dateRange)),
		resetGuestsNumber: () => dispatch(resetGuestsNumber()),
		setToggleGuest: (toggle) =>
			dispatch({ type: TOGGLE_GUEST, payload: toggle }),
		setToggleDatePick: () => dispatch({ type: TOGGLE_DATE_PICKER }),
		setToggleLocationSearch: () => dispatch({ type: TOGGLE_LOCATION_SEARCH }),
		setToggleCheckIn: () => dispatch({ type: TOGGLE_CHECK_IN }),
		setToggleCheckOut: () => dispatch({ type: TOGGLE_CHECK_OUT }),
		resetToggle: () => dispatch({ type: RESET_TOGGLE }),
		setRecommendedResults: (locationResults) =>
			dispatch({
				type: LOAD_RECOMMENDED_LOCATION_RESULTS,
				payload: locationResults,
			}),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
