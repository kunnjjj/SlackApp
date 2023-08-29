import { useState } from 'react';
import '../../styles/user-logo.css'
import React from 'react';
enum CurrentStatus {
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE',
    SLEEP = 'SLEEP',
}

const Online = () => {
    return <div className='circle online' style={{ backgroundColor: 'green' }}></div>
}

const Offline = () => {
    return <div className='circle offline' style={{ backgroundColor: 'brown' }}></div>
}

const UserLogo = () => {
    /*TODO Correct path*/
    const [status, setStatus] = useState<CurrentStatus>(CurrentStatus.OFFLINE);


    const statusComp = (status === CurrentStatus.ONLINE ? <Online /> : <Offline />); /*TODO*/
    return (
        <div className='user-logo hover-effect' style={{ height: '100%' }}>
            <img src='./logo192.png' alt="userlogo" />
            {statusComp}
        </div>
    );
}
export default UserLogo
