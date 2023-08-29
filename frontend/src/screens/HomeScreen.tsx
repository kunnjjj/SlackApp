import React from "react";
import Content from "../components/content/Content";
import TopNavbar from "../components/topnavbar/TopNavbar";
import UserLogo from "../components/utils/UserLogo";
import { ChannelNameContext } from "../contexts/ChannelNameContext";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { type User } from "../typescriptTypes/user";
const currentUser: User = {
  icon: <UserLogo />,
  name: "Current User",
  id: '1000',
};

const HomeScreen = () => {
  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <ChannelNameContext.Provider value="Sprinklr Frontend">
          <TopNavbar />
          <Content />
        </ChannelNameContext.Provider>
      </CurrentUserContext.Provider>
    </>
  );
};

export default HomeScreen;
