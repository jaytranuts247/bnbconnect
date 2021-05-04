import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Container } from "./Login.styles";
import CloseIcon from "@material-ui/icons/Close";
import { SIGNUP } from "../../utils/utils";
import { clearErrors, loginUser } from "../../redux/user/user.actions";
import { setAlert } from "../../redux/alert/alert.actions";
import { StyledAlert } from "../../styles/Bases";

const Login = ({
  setLoginSignUp,
  userError,
  clearErrors,
  alert,
  setAlert,
  loginUser,
  isAuthenticated,
}) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleClickSignUpForm = () => setLoginSignUp(SIGNUP);

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginUser(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (!userError) return;

    setAlert(userError, "error");
    clearErrors();
  }, [userError]);

  useEffect(() => {
    if (isAuthenticated) setLoginSignUp("");
  }, [isAuthenticated]);

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
          {alert.length !== 0 &&
            alert.map((alertItem) => (
              <StyledAlert
                key={alertItem.id}
                severity={alertItem.type}
                variant="standard"
              >
                <strong>{alertItem.msg}</strong>
              </StyledAlert>
            ))}
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

const mapStateToProps = ({ user, alert }) => ({
  userError: user.error,
  isAuthenticated: user.isAuthenticated,
  alert,
});

const mapDispatchToProps = {
  loginUser,
  setAlert,
  clearErrors,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
