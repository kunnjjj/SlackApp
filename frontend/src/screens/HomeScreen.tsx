//Libs
import React from 'react'

//Components
import { TopNavBar } from '../components/topnavbar';
import { Body } from '../components';

//Hocs/Contexts
import { CurrentUserProvider } from '../contexts/CurrentUser';

//Types
import { User } from '../components/body/types/user';

//Constants

//Logos/Icons
import { UserLogo } from '../icons/userLogo/UserLogo';


const currentUser: User = {
  icon: <UserLogo />,
  name: "Current User",
  id: '0',
};

const HomeScreen = () => {
  const CHANNEL_NAME = 'Sprinklr Frontend'; /* TODO backend*/
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
