import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  loading,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <Redirect to="/home" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const mapStateToProps = ({ user }) => ({
  isAuthenticated: user.isAuthenticated,
  loading: user.loading,
});

export default connect(mapStateToProps, null)(PrivateRoute);
