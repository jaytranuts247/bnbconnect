import React, { useState } from "react";

import { Container } from "./Login.styles";
import CloseIcon from "@material-ui/icons/Close";
import { SIGNUP } from "../../utils/utils";

const Login = ({ setLoginSignUp }) => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const handleClickSignUpForm = () => setLoginSignUp(SIGNUP);

	const handleSubmit = () => {
		// fetch('/api/auth', {
		// })
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const { email, password } = user;

	return (
		<>
			<Container>
				<div className="btn-close">
					<button onClick={() => setLoginSignUp("")}>
						<CloseIcon style={{ fontSize: 24 }} />
					</button>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="form-title">
						<h1>Login to continue</h1>
					</div>
					<div className="input-label">
						<input
							type="email"
							name="email"
							id="#email"
							placeholder="Email Address"
							value={email}
							onChange={handleChange}
						/>
					</div>
					<div className="input-label">
						<input
							type="password"
							name="password"
							id="#password"
							placeholder="Password"
							value={password}
							onChange={handleChange}
						/>
					</div>
					<div className="input-button">
						<input type="submit" id="btn-submit" value="Log in" />
					</div>
					<div className="demo-button">
						<button>Demo Login</button>
					</div>
					<div className="bottom-text">
						<span id="dont-have-account">Don't have an account?</span>
						<button id="other-form" onClick={handleClickSignUpForm}>
							Sign Up
						</button>
					</div>
				</form>
			</Container>
		</>
	);
};

export default Login;
