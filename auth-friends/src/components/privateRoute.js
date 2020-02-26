import React from "react";
import { Route, Redirect } from "react-router-dom";
const privateRoute = ({ component: Component, ...rest }) => {
  //const Component = component;
  const token = window.localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={() => {
        if (token) {
          //return the component
          return <Component {...rest} />;
        } else {
          //redirect the user to login
          return <Redirect to='/login' />;
        }
      }}
    />
  );
};
export default privateRoute;
