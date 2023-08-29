import '../../styles/content.css'

import { useCallback, useEffect, useState } from 'react'

import LeftNavbar from "./leftnavbar/LeftNavbar"
import Main from './main/Main'
import React from 'react'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { UserListContext } from '../../contexts/UserListContext'
import { type User } from '../../typescriptTypes/user'
import UserLogo from '../utils/UserLogo'
import { SelectedUserContext } from '../../contexts/SelectedUserContext'

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

const Content = () => {
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

    return (
        <UserListContext.Provider value={[userList, setUserList]}>
            <SelectedUserContext.Provider value={[selectedUser, setSelectedUser]}>
                <div className='content'>
                    <LeftNavbar width={width} />
                    <div id='leftnav-main-seperator' onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler} ></div>
                    <div className='content-right'>
                        <Main />
                    </div>
                </div>
            </SelectedUserContext.Provider>
        </UserListContext.Provider>
    )
}

export default Content