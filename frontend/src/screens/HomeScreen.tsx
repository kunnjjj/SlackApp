import React from 'react'
import TopNavbar from '../components/topnavbar/TopNavbar'
import Body from '../components/body/Body'
import { type User } from '../types/user';
import UserLogo from '../components/userLogo/UserLogo';
import { CurrentUserProvider } from '../contexts/CurrentUser';
import { ChannelNameProvider } from '../contexts/ChannelName';

const currentUser: User = {
  icon: <UserLogo />,
  name: "Current User",
  id: '0',
};

const HomeScreen = () => {
  return (
    <>
      <CurrentUserProvider value={currentUser}>
        <ChannelNameProvider value="Sprinklr Frontend">
          <TopNavbar />
          <Body />
        </ChannelNameProvider>
      </CurrentUserProvider>
    </>
  );
};

export default HomeScreen;
