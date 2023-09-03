import React from "react";
import { createContext, useContext } from "react";

//This should not import User from inside components.
//User is a generic type. Should lie at top level inside types directory
import { type User } from "../components/body/types/user";
export const CurrentUser = createContext<User | null>(null);

const useCurrentUser = () => {
  const context = useContext(CurrentUser);
  if (!context) {
    throw new Error(
      "useCurrentUser should be used inside a ChannelNameProvider"
    );
  }
  return context;
};

const CurrentUserProvider = ({ children, value, ...props }) => {
  return <CurrentUser.Provider value={value}>{children}</CurrentUser.Provider>;
};

export { useCurrentUser, CurrentUserProvider };
