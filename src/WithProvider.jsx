import React from "react";
import { useContext } from "react";
import { AlertContext, UserContext } from "./Contexts";

const WithProvider = (provider) => (IncomingComponent) => (props) => {
  const contextData = useContext(provider);
  return <IncomingComponent {...props} {...contextData} />;
};

export default WithProvider;
export const WithAlert = WithProvider(AlertContext);
export const WithUser = WithProvider(UserContext);
