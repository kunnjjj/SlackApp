// packages
import React from 'react'
import { useCallback, useEffect, useState } from 'react'

// components
import LeftNavbar from '../leftNavbar/LeftNavbar'
import Main from '../main/Main'
import UserLogo from '../userLogo/UserLogo'

// contexts
import { CurrentUserProvider } from '../../contexts/CurrentUser'

// types
import { type User } from '../../types/user'

// styles
import './body.css'
import { LeftNavbarWidthProvider } from '../../contexts/LeftNavbarWidth'


const getWidthFromLocalStorage = () => {
    const item = localStorage.getItem('width');
    if (!item) return null;
    return JSON.parse(item);
}

const allUsers: User[] = [
    {
        id: '1',
        name: 'User1',
        icon: <UserLogo />
    },
    {
        id: '2',
        name: 'User2',
        icon: <UserLogo />
    },
    {
        id: '2',
        name: 'User3',
        icon: <UserLogo />
    },
    {
        id: '3',
        name: 'User4',
        icon: <UserLogo />
    },
    {
        id: '4',
        name: 'User5',
        icon: <UserLogo />
    },
]

const Body = () => {

    const [width, setWidth] = useState(() => getWidthFromLocalStorage() ?? 400);
    const [userList, setUserList] = useState(allUsers);
    const [selectedUser, setSelectedUser] = useState<User>(userList[0]);

    useEffect(() => {
        return () => {
            localStorage.setItem('width', JSON.stringify(width));
        }
    }, [width])

    const setWidthHandler = useCallback((event: MouseEvent) => {
        setWidth(event.clientX);
    }, []);

    const mouseDownHandler = () => {
        document.addEventListener('mousemove', setWidthHandler)
    }

    const mouseUpHandler = () => {
        document.removeEventListener('mousemove', setWidthHandler);
    }

    const newUserClickHandler = (newUser: User) => {
        setSelectedUser(newUser);
    }

    return (
            <div className='content'>
                <LeftNavbarWidthProvider value={width}>
                    <LeftNavbar userList={userList} onUserSelect={newUserClickHandler} />
                </LeftNavbarWidthProvider>
                <div id='leftnav-main-seperator' onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler} ></div>
                <div className='content-right'>
                    <Main selectedUser={selectedUser} />
                </div>
            </div>
    )
}

export default Body;