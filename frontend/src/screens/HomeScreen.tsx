//Libs
import React, { useMemo } from "react";

//Components
import { TopNavBar } from "../components/topnavbar";
import { Body } from "../components";

//Hocs/Contexts
import { CurrentUserProvider } from "../contexts/CurrentUser";

//Types
import { User } from "../components/body/types/user";

const HomeScreen = () => {
  const CHANNEL_NAME = "Sprinklr Frontend"; /* LATER backend*/
  const currentUser: User = useMemo(() => {
    /* LATER backend? */
    return {
      name: "User 0",
      id: "0",
    };
  }, []);

  return (
    <>
      <CurrentUserProvider value={currentUser}>
        <TopNavBar channelName={CHANNEL_NAME} />
        <Body channelName={CHANNEL_NAME} />
      </CurrentUserProvider>
    </>
  );
};

export { HomeScreen };
