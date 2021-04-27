import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: relative;
	background: #fff;
	border-radius: 20px;

	width: 100%;
	padding: 40px 50px;

	.btn-close {
		display: flex;
		position: absolute;
		left: 10px;
		top: 10px;
		padding: 10px;
	}

	form {
		width: 100%;
		line-height: 1.8;

		.form-title,
		.input-label,
		.input-button,
		.demo-button {
			width: 100%;
			display: flex;

			input,
			button {
				width: 100%;
				margin: 8px 0;
				line-height: 1.6;
				padding: 10px 5px;
				border-radius: 3px;
				border: 1px solid #eee;
				outline: none;
			}
		}
		.form-title {
			margin: 5px 0;
			h1 {
				margin: 0 auto;
				line-height: 1.6;
				padding: 8px 0;
				font-size: 2.8rem;
			}
		}
		.input-button {
			input {
				background: #ff385c;
				color: #fff;
				font-size: 14px;
				font-weight: 700;
			}
		}
		.demo-button {
			/* border-bottom: 1px solid #ebebeb; */
			button {
				color: #008489;
				background: #ebebeb;
			}
		}

		.bottom-text {
			display: flex;
			padding-top: 10px;
			font-size: 14px;
			border-top: 1px solid #ebebeb;
			margin-top: 10px;

			button#other-form {
				margin-left: 5px;
				background: none;
				color: #008489;
			}
		}
	}
`;
