import React, { useState } from "react";
import { connect } from "react-redux";
import { LOGIN } from "../../utils/utils";
import { Container } from "./SignUp.styles";

import CloseIcon from "@material-ui/icons/Close";
import { signUpUser } from "../../redux/user/user.actions";

const SignUp = ({ loginSignUp, setLoginSignUp, signUpUser }) => {
	const [user, setUser] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmedPassword: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleClickLoginForm = () => setLoginSignUp(LOGIN);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(user);
		signUpUser(user);
	};

	const { firstName, lastName, email, password, confirmedPassword } = user;
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
						<h1>Sign up to continue</h1>
					</div>
					<div className="input-label">
						<input
							type="text"
							name="firstName"
							id="#firstName"
							placeholder="First Name"
							value={firstName}
							onChange={handleChange}
						/>
					</div>
					<div className="input-label">
						<input
							type="text"
							name="lastName"
							id="#lastName"
							placeholder="Last Name"
							value={lastName}
							onChange={handleChange}
						/>
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
					<div className="input-label">
						<input
							type="password"
							name="confirmedPassword"
							id="#confirmedPassword"
							placeholder="Confirm Password"
							value={confirmedPassword}
							onChange={handleChange}
						/>
					</div>
					<div className="input-button">
						<input type="submit" id="btn-submit" value="Sign Up" />
					</div>

					<div className="bottom-text">
						<span id="dont-have-account">Already have an account?</span>
						<button id="other-form" onClick={handleClickLoginForm}>
							Login
						</button>
					</div>
				</form>
			</Container>
		</>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
	signUpUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
