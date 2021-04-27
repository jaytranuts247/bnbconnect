import React, { useRef, useState, useEffect } from "react";
import moment from "moment";
import { connect } from "react-redux";

import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";

import {
	StyledButtonCircle,
	StyledHeader,
	HeaderContainer,
	StyledMenuIcon,
	StyledSearchIcon,
	Seperator,
	ModalBackground,
} from "./Header.styles";

import {
	validateBookingInfo,
	validateTypes,
	guestDisplaySearch,
	LOGIN,
	SIGNUP,
} from "../../utils/utils";
import { useHistory } from "react-router";
import { useOnClickOutsideDoubleRefs } from "../../hooks/useOnClickOutsideDoubleRef";
import Login from "../Login/Login.component";
import SignUp from "../SignUp/SignUp.component";

const Header = ({
	isHome,
	isSearchRoute,
	startDate,
	endDate,
	adultsCount,
	childrenCount,
	infantsCount,
	selectedLocation,
}) => {
	const [menuToggle, setMenuToggle] = useState(false);
	const [loginSignUp, setLoginSignUp] = useState("");

	let history = useHistory();

	const menuRef = useRef();
	const profileRef = useRef();
	useOnClickOutsideDoubleRefs(menuRef, profileRef, () => {
		setMenuToggle(false);
	});

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
		setLoginSignUp(LOGIN);
	};
	const handleClickSignUp = () => {
		setLoginSignUp(SIGNUP);
	};
	const handleClickModal = () => {
		// dupicate with click on login and signup
		console.log("handleClickModal");
		setLoginSignUp("");
	};

	const handleClickMenu = () => setMenuToggle((prev) => !prev);
	const handleClickSearch = () => {};

	return (
		<StyledHeader isHome={isHome} isSearchRoute={isSearchRoute}>
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
			<HeaderContainer isNoGuest={adultsCount + childrenCount === 0 ? 1 : 0}>
				<img
					className="header__icon"
					src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
					alt="airbnb-icon"
				/>
				{isSearchRoute === 1 && (
					<div className="header__between">
						<div className="info-bar-container">
							<div className="info-bar">
								<div className="info-bar__location">
									{selectedLocation.description}
								</div>
								<Seperator />
								<div className="info-bar__date">
									{`${moment(startDate).format("MMMM DD")} - ${moment(
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
						</div>
					</div>
				)}

				<div className="header__right">
					{/* 
          <StyledButton>Log in</StyledButton>
					<StyledButton>Sign up</StyledButton>
           */}
					<div
						className="header__profile"
						onClick={handleClickMenu}
						ref={profileRef}
					>
						<StyledMenuIcon color="disabled" />
						<AccountCircleRoundedIcon color="disabled" id="profile-icon" />
						{menuToggle && (
							<div className="menu-dropdown" ref={menuRef}>
								<div className="log-in" onClick={handleClickLogin}>
									<p>Log in</p>
								</div>
								<div className="sign-up" onClick={handleClickSignUp}>
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

