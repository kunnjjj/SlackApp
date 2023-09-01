// packages
import React from 'react'
import { useCallback, useEffect, useState } from 'react'

// components
import LeftNavbar from './leftNavbar/LeftNavbar'
import Main from './main/Main'
import UserLogo from '../userLogo/UserLogo'

// contexts

// types
import { type User } from './types/user'

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
        icon: <UserLogo showStatus={false} />
    },
    {
        id: '2',
        name: 'User2',
        icon: <UserLogo showStatus={false} />
    },
    {
        id: '3',
        name: 'User3',
        icon: <UserLogo showStatus={false} />
    },
    {
        id: '4',
        name: 'User4',
        icon: <UserLogo showStatus={false} />
    },
    {
        id: '0',
        name: 'User0',
        icon: <UserLogo showStatus={false} />
    },
]

const Body = () => {

    const [width, setWidth] = useState(() => getWidthFromLocalStorage() ?? 400);
    const [userList,] = useState(allUsers);
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
        <div className='content' onMouseLeave={mouseUpHandler}>
            <LeftNavbarWidthProvider value={width}>
                <LeftNavbar userList={userList} onUserSelect={newUserClickHandler} />
            </LeftNavbarWidthProvider>
            <div id='leftnav-main-seperator' onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler}></div>
            <div className='content-right'>
                <Main selectedUser={selectedUser} userList={userList} />
            </div>
        </div>
    )
}

export default Body;