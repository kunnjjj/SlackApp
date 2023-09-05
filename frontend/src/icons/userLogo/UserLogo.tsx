import React from 'react';
import { useState } from 'react';
import './user-logo.css'
import { User } from '../../components/body/types/user';

enum CurrentStatus {
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE',
    SLEEP = 'SLEEP',
}

type Props = {
    user: User;
    showStatus?: true | false;
    style?: {
        height?: string;
        width?: string;
    }
}

const Online = ({ ...props }) => {
    return <div className='circle online' style={{ backgroundColor: 'green' }} {...props}></div>
}

const Offline = ({ ...props }) => {
    return <div className='circle offline' style={{ backgroundColor: 'brown' }} {...props}></div>
}

const STATUS_VS_COMP = {
    ONLINE: (props) => <Online {...props} />,
    OFFLINE: (props) => <Offline {...props} />
}

const UserLogo = ({ user, showStatus = true, style = { height: '30px', width: '30px' } }: Props) => {
    /*TODO Correct path*/

    const [status,] = useState<CurrentStatus>(CurrentStatus.ONLINE);
    const statusComp = STATUS_VS_COMP[status];
    const imgSrc = './logo192.png'; // fetchUserImg(user); /*TODO backend*/

    return (
        <div className='user-logo hover-effect' style={{ ...style }}>
            <img src={imgSrc} alt={user.name + 's Photo'} />
            {showStatus ? statusComp : null}
        </div>
    );
}
export { UserLogo }
