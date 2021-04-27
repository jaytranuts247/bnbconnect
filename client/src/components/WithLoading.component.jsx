import React from "react";

import Loading from "./Loading.component";

const WithLoading = (WrappedComponent) => (props) => {
  console.log("isFetching", props.isFetching);
  return (
    <>{props.isFetching ? <Loading /> : <WrappedComponent {...props} />}</>
  );
};

export default WithLoading;
