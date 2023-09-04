import React from 'react';
import { useState } from 'react';
import './user-logo.css'

enum CurrentStatus {
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE',
    SLEEP = 'SLEEP',
}
type Props = {
    showStatus?: true | false,
}

const Online = () => {
    return <div className='circle online' style={{ backgroundColor: 'green' }}></div>
}

const Offline = () => {
    return <div className='circle offline' style={{ backgroundColor: 'brown' }}></div>
}

const UserLogo = ({ showStatus = true }: Props) => {
    /*TODO Correct path*/
    const [status,] = useState<CurrentStatus>(CurrentStatus.ONLINE);


    const statusComp = (status === CurrentStatus.ONLINE ? <Online /> : <Offline />); /*TODO*/
    return (
        <div className='user-logo hover-effect' style={{ height: '100%' }}>
            <img src='./logo192.png' alt="userlogo" />
            {showStatus ? statusComp : null}
        </div>
    );
}
export { UserLogo }
