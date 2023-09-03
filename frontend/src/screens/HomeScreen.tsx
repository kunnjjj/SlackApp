import React from "react";
//topNavBar and NOT topnavbar.
//topNavBar should have an index file from which TopNavBar (Main component) is exported.

//Discussed
import { TopNavbar } from "../components/topnavbar";

import Body from "../components/body/Body";
import { type User } from "../types/user";
import UserLogo from "../components/userLogo/UserLogo";
import { CurrentUserProvider } from "../contexts/CurrentUser";
import { ChannelNameProvider } from "../contexts/ChannelName";

//Imports should be structured properly.

//Libs

//Components

//Hocs/Contexts

//Hooks

//Utils/Helpers

//Types

//Constants

//Logos/Icons

//Discussed

const currentUser: User = {
  icon: <UserLogo />,
  //Wrong //Discussed
  name: "Current User",
  id: "0",
};

const HomeScreen = () => {
  return (
    <>
      {/* Why are we storing react component in provider?. If we want to have provider for currentUser, then it should contain */}
      <CurrentUserProvider value={currentUser}>
        {/* //Discussed */}
        <ChannelNameProvider value="Sprinklr Frontend">
          <TopNavbar />
          <Body />
        </ChannelNameProvider>
      </CurrentUserProvider>
    </>
  );
};

export default HomeScreen;
