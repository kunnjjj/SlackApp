import { createContext, useContext } from "react";

import React from "react";

//Why are there multiple imports of react??
//Discussed

export const ChannelName = createContext("Channel Name");
//We are already setting default value in context here. Will below throw error ever get invoked?
//Discussed

const useChannelName = () => {
  const context = useContext(ChannelName);
  if (!context) {
    throw new Error(
      "useChannelName should be used inside a ChannelNameContextProvider"
    );
  }
  return context;
};

const ChannelNameProvider = ({ children, value, ...props }) => {
  return <ChannelName.Provider value={value}>{children}</ChannelName.Provider>;
};

export { useChannelName, ChannelNameProvider };
