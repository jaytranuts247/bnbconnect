import React, { useEffect } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import LocationOnIcon from "@material-ui/icons/LocationOn";

import {
	SET_LOCATION,
	TOGGLE_CHECK_IN,
	TOGGLE_LOCATION_SEARCH,
	TOGGLE_GUEST,
	TOGGLE_CHECK_OUT,
} from "../redux/types";

import { validateBookingInfo, validateTypes } from "../utils/utils";
import { useHistory } from "react-router";

const Wrapper = styled.div`
	display: flex;
`;

const Container = styled.div`
	display: flex;
	position: absolute;
	top: 90px;
	left: 0;
	min-width: 200px;
	width: 500px;
	min-height: 200px;
	border-radius: 30px;
	background: #fff;
	padding: 25px 0;

	.search-field {
		width: 100%;
		display: flex;
		flex-direction: column;

		h2 {
			margin-left: 25px;
		}

		.search-results {
			width: 100%;
			display: flex;
			flex-direction: column;
			margin-top: 10px;

			.location-field-container {
				/* margin: 0 25px; */
				&:hover {
					/* border-radius: 10px; */
					background: #c1c1c11f;
				}

				.location-field {
					display: flex;
					align-items: center;
					width: 100%;
					padding: 10px 20px 15px 25px;
					cursor: pointer;
					/* margin-top: 10px; */

					font-size: 16px;
					p {
						margin-left: 15px;
					}
					.location__icon {
						display: flex;
						justify-content: center;
						align-items: center;
						height: 50px;
						width: 50px;
						border-radius: 10px;
						background: #eee;
						flex-shrink: 0;
					}
				}
			}
		}
	}
`;

const Seperator = styled.div`
	width: 100%;
	height: 1px;
	width: 100%;
	border-top: 1px solid #ebebeb;
`;

const LocationSearchField = ({
	recommendedResults,
	startDate,
	endDate,
	adultsCount,
	childrenCount,
	infantsCount,
	selectedLocation,
	setLocation,
	setToggleCheckIn,
	setToggleLocationSearch,
	setToggleCheckOut,
	setToggleGuest,
	handleClickLocation,
}) => {
	let history = useHistory();

	// useEffect(() => {
	// 	if (selectedLocation) {
	// 		const validateResult = validateBookingInfo({
	// 			startDate,
	// 			endDate,
	// 			adultsNum: adultsCount,
	// 			childrenNum: childrenCount,
	// 			infantsNum: infantsCount,
	// 			selectedLocation,
	// 		});
	// 		console.log("validateResult", validateResult);

	// 		// Link to search results Page
	// 		if (validateResult === validateTypes.OK) return history.push("/search");
	// 		if (validateResult === validateTypes.LOCATION)
	// 			return handleClickLocation();
	// 		if (validateResult === validateTypes.START_DATE)
	// 			return setToggleCheckIn();
	// 		if (validateResult === validateTypes.END_DATE) return setToggleCheckOut();
	// 		if (validateResult === validateTypes.NO_GUEST) return setToggleGuest();
	// 	}
	// }, [selectedLocation]);

	const handleClickLocationPick = (location) => {
		// set location
		setLocation(location);
		// check datepick ?? -> change to date pick
	};

	return (
		<Wrapper>
			<Container>
				<div className="search-field">
					<h2>Search Results</h2>
					<Seperator />
					<div className="search-results">
						{recommendedResults &&
							(recommendedResults.length === 0 ? (
								<div>
									<h3>There is no location found!!</h3>
								</div>
							) : (
								recommendedResults.map((location) => (
									<div
										key={location.place_id}
										className="location-field-container"
										onClick={() => handleClickLocationPick(location)}
									>
										<div className="location-field">
											<div className="location__icon">
												<LocationOnIcon />
											</div>
											<p>{location.description}</p>
										</div>
									</div>
								))
							))}
					</div>
				</div>
			</Container>
		</Wrapper>
	);
};

const mapStateToProps = ({ booking }) => ({
	recommendedResults: booking.recommendedResults,
	startDate: booking.startDate,
	endDate: booking.endDate,
	adultsCount: booking.adultsNum,
	childrenCount: booking.childrenNum,
	infantsCount: booking.infantsNum,
	selectedLocation: booking.selectedLocation,
});

const mapDispatchToProps = (dispatch) => {
	return {
		setLocation: (location) =>
			dispatch({ type: SET_LOCATION, payload: location }),
		setToggleGuest: () => dispatch({ type: TOGGLE_GUEST }),
		setToggleLocationSearch: () => dispatch({ type: TOGGLE_LOCATION_SEARCH }),
		setToggleCheckIn: () => dispatch({ type: TOGGLE_CHECK_IN }),
		setToggleCheckOut: () => dispatch({ type: TOGGLE_CHECK_OUT }),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LocationSearchField);
