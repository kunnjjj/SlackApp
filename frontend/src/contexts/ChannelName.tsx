
import { createContext, useContext } from 'react';

import React from 'react';
export const ChannelName= createContext('Channel Name');

const useChannelName = () => {
    const context = useContext(ChannelName);
    if (!context) {
        throw new Error('useChannelName should be used inside a ChannelNameContextProvider');
    }
    return context;
}

const ChannelNameProvider = ({ children, value, ...props }) => {

    return (
        <ChannelName.Provider value={value}>
            {children}
        </ChannelName.Provider>
    )
}


export { useChannelName, ChannelNameProvider };