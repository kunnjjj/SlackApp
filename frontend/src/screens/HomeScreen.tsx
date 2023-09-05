//Libs
import React, { useMemo } from 'react'

//Components
import { TopNavBar } from '../components/topnavbar';
import { Body } from '../components';

//Hocs/Contexts
import { CurrentUserProvider } from '../contexts/CurrentUser';


const HomeScreen = () => {
  const CHANNEL_NAME = 'Sprinklr Frontend'; /* TODO backend*/
  const currentUser = useMemo(() => { /* TODO backend? */
    return {
      name: "Current User",
      id: '0',
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
