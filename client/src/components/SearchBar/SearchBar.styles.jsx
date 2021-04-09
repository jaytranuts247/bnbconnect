import styled, { css } from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

export const Wrapper = styled.div`
	display: flex;
	width: 100vw;
	flex-direction: column;
`;

export const SearchBarContainer = styled.div`
	position: relative;
	margin: 0 auto;
	margin-top: 50px;
	max-width: 850px;
	width: 100%;

	form {
		display: flex;
		background: #fff;
		width: 100%;

		border-radius: 50px;

		ul {
			display: flex;
			list-style: none;
			width: 100%;

			li:first-child {
				flex: 1.5 0 auto;
			}

			li {
				/* padding: 14px 32px; */
				display: flex;
				flex-direction: row;
				align-items: center;
				flex: 1 0 0%;
				position: relative;

				div.search-box {
					display: flex;
					flex-direction: column;
					justify-content: center;
					padding: 14px 32px;
					border-radius: 50%;
					position: relative;
					cursor: pointer;
					z-index: 3;
					width: 100%;

					div.label,
					div.input {
						z-index: 3;
					}

					div.label {
						font-weight: 700;
						letter-spacing: 0.04em !important;
						padding-bottom: 2px !important;
						font-size: 12px;
						line-height: 16px;
					}

					div.input {
						white-space: nowrap;
						color: #717171 !important;
						font-size: 14px;
						line-height: 18px;
					}
				}
			}

			li.location-search {
				${({ toggleLocationSearch }) =>
					toggleLocationSearch &&
					css`
						&::before {
							background: #fff !important;
							box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 32px,
								rgba(0, 0, 0, 0.1) 0px 3px 8px !important;
							opacity: 1 !important;
						}
					`};
				&:hover::before {
					opacity: 0.5;
				}

				&::before {
					content: " ";
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					border-radius: 50px;
					/* box-shadow */
					background: #ebebeb;
					opacity: 0;
					/* z-index: -1; */
				}
				input {
					outline: none;
					border: none;
					font-size: 14px;
					line-height: 18px;
					background: transparent;
					/* width: 100%; */
				}
			}

			li.checkInOutDatePick {
				flex: 2 0 auto !important;
				display: flex;
				white-space: nowrap;
				z-index: 3;

				.check-in,
				.check-out {
					padding: 14px 24px !important;
					flex: 1 0 50%;
					z-index: 3;

					&:hover::before {
						opacity: 0.5;
					}

					&::before {
						content: " ";
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						border-radius: 50px;
						/* box-shadow */
						background: #ebebeb;
						opacity: 0;
						/* z-index: -1; */
					}
				}

				.check-in {
					${({ toggleCheckIn }) =>
						toggleCheckIn &&
						css`
							&::before {
								background: #fff !important;
								box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 32px,
									rgba(0, 0, 0, 0.1) 0px 3px 8px !important;
								opacity: 1 !important;
							}
						`};
				}

				.check-out {
					${({ toggleCheckOut }) =>
						toggleCheckOut &&
						css`
							&::before {
								background: #fff !important;
								box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 32px,
									rgba(0, 0, 0, 0.1) 0px 3px 8px !important;
								opacity: 1 !important;
							}
						`};
				}
			}

			li.guest-pick {
				flex: 0.95 1 auto !important;
				display: flex;
				overflow: visible;
				position: relative;
				z-index: 3;

				svg.MuiSvgIcon-fontSizeLarge {
					margin: 0 3px;
				}

				${({ toggleGuest, toggleLocationSearch }) =>
					!toggleLocationSearch &&
					toggleGuest &&
					css`
						&::before {
							background: #fff !important;
							box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 32px,
								rgba(0, 0, 0, 0.1) 0px 3px 8px !important;
							opacity: 1 !important;
						}
					`};

				&:hover::before {
					opacity: 0.5;
				}

				&::before {
					content: " ";
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					border-radius: 50px;
					/* box-shadow */
					background: #ebebeb;
					/* box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 32px,
						rgba(0, 0, 0, 0.1) 0px 3px 8px !important; */
					opacity: 0;
					/* z-index: -1; */
				}
				.search-box {
					padding: 14px 0 14px 24px;
					flex: 1 1 0;
					z-index: 3;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					z-index: 3;

					&__guest {
						display: flex;
						flex-direction: column;
						flex: 1 1 0;

						.label {
							font-weight: 700;
							letter-spacing: 0.04em !important;
							padding-bottom: 2px !important;
							font-size: 12px;
							line-height: 16px;
						}

						div.guest-number {
							white-space: nowrap;
							color: #717171 !important;
							font-size: 14px;
							line-height: 18px;
							flex: 1 0;
							text-overflow: ellipsis;
							overflow: hidden;
							span {
							}
						}
					}
				}
			}
		}
	}
	.day-picker {
		display: flex;
		justify-content: center;
		position: absolute;
		top: 100px;
		left: 0;
		width: 100%;
		.rdrDateRangePickerWrapper {
			display: flex;
			padding: 20px;
			background: #fff;
			border-radius: 30px;
		}
		.rdrDateRangeWrapper {
			padding: 0 20px;
		}
		.rdrDateDisplayWrapper {
			border-radius: 20px;
		}
	}

	@media screen and (max-width: 992px) {
	}
	@media screen and (max-width: 768px) {
		width: 90%;

		form {
			ul {
				li:first-child {
					flex: 1.1 0 0;
				}
				li.checkInOutDatePick {
					flex: 1.6 1 auto !important;
				}
				li.guest-pick {
					.search-box {
						&__guest {
							max-width: 115px;
						}
					}
				}
			}
		}
	}
`;

export const Seperator = styled.div`
	align-self: center !important;
	border-right: 1px solid #ddd;
	flex: 0 0 0px;
	height: 32px;
`;

export const StyledSearchIcon = styled(SearchIcon)`
	color: #fff;
	/* background: #ff385c; */
	height: 2.2rem !important;
	width: 2.2rem !important;
	border-radius: 100%;
`;

const ButtonBase = css`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 48px;
	background: #ff385c;
	color: #fff;
	margin-right: 10px;
	border: none;
	outline: none;

	span {
		font-weight: 600;
		font-size: 1.6rem;
		margin-left: 10px;
	}
`;

export const StyledButtonCircle = styled.button`
	${ButtonBase}
	width: 48px;
	border-radius: 100%;
	z-index: 3;
`;

export const StyledButtonRound = styled.button`
	${ButtonBase}
	padding: 7px 14px;
	border-radius: 50px;
	z-index: 3;
`;
