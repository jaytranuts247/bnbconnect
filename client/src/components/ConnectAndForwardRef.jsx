import { forwardRef } from "react";
import { connect } from "react-redux";

export const connectAndForwardRef = (
  mapStateToProps = null,
  mapDispatchToProps = null,
  mergeProps = null,
  options = {}
) => (component) =>
  connect(mapStateToProps, mapDispatchToProps, mergeProps, {
    ...options,
    forwardRef: true,
  })(forwardRef(component));

// const ConnectedMyComponent = connectAndForwardRef(
//   mapStateToProps,
//   mapDispatchToProps
// )(MyComponent);
