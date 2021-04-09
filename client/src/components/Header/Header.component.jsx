import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";

import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";

import { useOnClickOutside } from "../../hooks/useOnClickOutside";

import {
	StyledButtonCircle,
	StyledHeader,
	HeaderContainer,
	StyledMenuIcon,
	StyledSearchIcon,
	Seperator,
} from "./Header.styles";

import {
	validateBookingInfo,
	validateTypes,
	dateDisplaySearch,
} from "../../utils/utils";
import { useHistory } from "react-router";

const Header = ({
	isHome,
	startDate,
	endDate,
	adultsCount,
	childrenCount,
	infantsCount,
	selectedLocation,
}) => {
	const [menuToggle, setMenuToggle] = useState(false);

	let history = useHistory();

	const menuRef = useRef();
	useOnClickOutside(menuRef, () => setMenuToggle(false));

	useEffect(() => {
		let validateResult = validateBookingInfo({
			startDate,
			endDate,
			adultsNum: adultsCount,
			childrenNum: childrenCount,
			infantsNum: infantsCount,
			selectedLocation,
		});
		//if (validateResult !== validateTypes.OK) return history.push("/"); // enable later
		// eslint-disable-next-line
	}, []);

	const handleClickMenu = () => setMenuToggle(!menuToggle);
	const handleClickSearch = () => {};

	return (
		<StyledHeader isHome={isHome}>
			<HeaderContainer isNoGuest={adultsCount + childrenCount === 0 ? 1 : 0}>
				<img
					className="header__icon"
					src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
					alt="airbnb-icon"
				/>
				<div className="header__between">
					<div className="info-bar-container">
						<div className="info-bar">
							<div className="info-bar__location">
								Las Vegas Strip{selectedLocation}
							</div>
							<Seperator />
							<div className="info-bar__date">April 15-17{startDate}</div>
							<Seperator />
							<div className="info-bar__guest">
								<div>
									<span>{dateDisplaySearch(adultsCount + childrenCount)}</span>
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
					</div>
				</div>
				<div className="header__right">
					{/* 
          <StyledButton>Log in</StyledButton>
					<StyledButton>Sign up</StyledButton>
           */}
					<div className="header__profile" onClick={handleClickMenu}>
						<StyledMenuIcon color="disabled" />
						<AccountCircleRoundedIcon color="disabled" id="profile-icon" />
						{menuToggle && (
							<div className="menu-dropdown" ref={menuRef}>
								<div className="log-in">
									<p>Log in</p>
								</div>
								<div className="sign-up">
									<p>Sign up</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</HeaderContainer>
		</StyledHeader>
	);
};
const mapStateToProps = ({ booking }) => ({
	startDate: booking.startDate,
	endDate: booking.endDate,
	adultsCount: booking.adultsNum,
	childrenCount: booking.childrenNum,
	infantsCount: booking.infantsNum,
	selectedLocation: booking.selectedLocation,
});

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
