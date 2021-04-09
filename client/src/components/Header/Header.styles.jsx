import styled, { css } from "styled-components";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

export const StyledHeader = styled.div`
	width: 100vw;

	${({ isHome }) =>
		!isHome &&
		css`
			border-bottom: 1px solid #ebebeb;
			${
				"" /* box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 32px,
				rgba(0, 0, 0, 0.1) 0px 3px 8px !important; ; */
			}
			box-shadow:0 6px 16px rgba(0,0,0,0.12);
		`};
`;

export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	width: 92%;
	margin: 0 auto;

	img.header__icon {
		object-fit: contain;
		height: 80px;
		margin-left: 20px;
	}

	div.header__between {
		flex: 1 0 0;
		display: flex;
		justify-content: center;
		align-items: center;

		div.info-bar-container {
			display: flex;

			div.info-bar {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: row;
				min-width: 300px;
				border-radius: 30px;
				font-size: 14px;
				font-weight: 600;
				line-height: 1.8;
				border: 1px solid #ebebeb;
				height: 100%;

				&:hover {
					box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.15);
				}

				div.info-bar__location,
				div.info-bar__date {
					padding: 10px 20px;
					display: flex;
					height: 100%;
				}

				div.info-bar__location {
				}
				div.info-bar__date {
				}
				div.info-bar__guest {
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					/* padding: 10px 0 10px 20px; */
					div {
						padding: 10px 0 10px 20px;
					}

					${({ isNoGuest }) =>
						isNoGuest &&
						css`
							color: #717171 !important;
							font-weight: 400 !important;
						`};

					span {
						text-overflow: ellipsis;
						margin: 0 10px 0 2px;
					}
				}
			}
		}
	}

	div.header__right {
		margin-left: auto;
		margin-right: 20px;

		.MuiButton-text {
			margin-left: 10px;
			border-radius: 50px;
			span {
				color: #222222;
				font-size: 1.4rem;
			}
		}

		div.header__profile {
			background: #fff;
			padding: 7px 5px;
			border-radius: 50px;
			display: flex;
			align-items: center;
			position: relative;

			${({ isHome }) =>
				!isHome &&
				css`
					border: 1px solid #b9b9b9;
				`};

			svg {
				height: 2rem;
				width: 2rem;
				margin-left: 10px;
			}

			svg#profile-icon {
				height: 3rem;
				width: 3rem;
			}

			.menu-dropdown {
				width: 200px;
				position: absolute;
				top: 60px;
				right: 0;
				/* padding: 7px 14px; */
				background: #fff;
				font-size: 1.5rem;
				line-height: 1.5;
				border-radius: 10px;
				color: #222222;

				div.sign-up,
				div.log-in {
					width: 100%;
					display: flex;
					padding: 0px 10px;
					&:hover {
						background: #eeeeeeb5;
					}
					p {
						margin: 10px;
					}
				}
			}
		}
	}
`;

export const StyledButton = styled(Button)`
	/* background-color: #6772e5; */
	color: #fff;
	/* box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); */
	padding: 7px 14px;
	&:hover {
		background-color: #5469d4;
	}
`;

const ButtonBase = css`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #ff385c;
	color: #fff;
	margin-right: 10px;
	border: none;
	outline: none;

	span {
		font-weight: 600;
		font-size: 1.4rem;
		margin-left: 10px;
	}
`;

export const StyledButtonCircle = styled.button`
	${ButtonBase}
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
	border-radius: 100%;
	z-index: 3;
`;

export const StyledMenuIcon = styled(MenuIcon)`
	color: #222222;
	font-size: 2rem;
`;

export const StyledSearchIcon = styled(SearchIcon)`
	color: #fff;
	/* background: #ff385c; */
	height: 1.8rem !important;
	width: 1.8rem !important;
	border-radius: 100%;
`;

export const Seperator = styled.div`
	align-self: center !important;
	border-right: 1px solid #ddd;
	flex: 0 0 0px;
	height: 28px;
`;
