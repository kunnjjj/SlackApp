//Libs
import React from 'react'
import { useCallback, useEffect, useState, useRef } from 'react'

//Components
import { LeftNavbar } from './components/leftNavbar'
import { Main } from './components/main'

//Hooks
import { useLocalStorage } from './hooks/useLocalStorage'

//Types
import { User } from './types/user'

//Logos/Icons
import { UserLogo } from '../../icons/userLogo/UserLogo'

//Style
import './body.css'


const allUsers: User[] = [ /*TODO from backend*/
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

const Body = ({ channelName }) => {

    const { getItemFromLocalStorage, setItemToLocalStorage } = useLocalStorage('left-navbar-width');

    const [leftNavBarWidth, setLeftNavbarWidth] = useState(() => (getItemFromLocalStorage() as number) ?? 400);

    // const [width, setWidth] = useState(() => getWidthFromLocalStorage() ?? 400);
    const [userList,] = useState(allUsers);

    const [selectedUser, setSelectedUser] = useState<User>(userList[0]);

    const seperatorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setItemToLocalStorage(leftNavBarWidth); /*TODO CHECK IF WORKS*/
    }, [leftNavBarWidth, setItemToLocalStorage]); // ask

    const setWidthHandler = useCallback((event: MouseEvent) => {
        console.log('event happeed');
        setLeftNavbarWidth(event.clientX);
    }, []);

    const mouseDownHandler = useCallback(() => {
        if (!seperatorRef.current) return;
        console.log('event down');
        seperatorRef.current.addEventListener('mousemove', setWidthHandler)
    }, [setWidthHandler])

    const mouseUpHandler = useCallback(() => {
        if (!seperatorRef.current) return;
        console.log('event up');
        seperatorRef.current.removeEventListener('mousemove', setWidthHandler);
    }, [setWidthHandler])


    return (
        <div className='content' onMouseLeave={mouseUpHandler} ref={seperatorRef}>
            <LeftNavbar channelName={channelName} userList={userList} onUserSelect={setSelectedUser} style={{ width: `${leftNavBarWidth}` }} />
            <div id='leftnav-main-seperator' onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler} ></div>
            <div className='content-right'>
                <Main selectedUser={selectedUser} userList={userList} />
            </div>
        </div>
    )
}

export { Body };