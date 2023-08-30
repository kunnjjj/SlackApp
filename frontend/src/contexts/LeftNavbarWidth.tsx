import React from 'react';
import { createContext, useContext } from 'react';
import { type User } from '../types/user'
export const LeftNavbarWidth = createContext<number>(400);


const useLeftNavbarWith = () => {
    const context = useContext(LeftNavbarWidth);
    if (!context) {
        throw new Error('useCurrentUser should be used inside a LeftNavbarWidthProvider');
    }
    return context;
}

const LeftNavbarWidthProvider = ({ children, value, ...props }) => {
    return (
        <LeftNavbarWidth.Provider value={value}>
            {children}
        </LeftNavbarWidth.Provider>
    )
}


export { useLeftNavbarWith, LeftNavbarWidthProvider };