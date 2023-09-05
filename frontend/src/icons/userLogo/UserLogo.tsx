//Libs
import React, { useState, useMemo } from 'react';

//Type
import { User } from '../../components/body/types/user';

//Style
import './user-logo.css'

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
    };
    statusStyle?: {
        height?: string;
        width?: string;
        boxShadow?: string;
    }
}

const Online = ({ ...props }) => {
    return <div className='circle online' {...props}></div>
}

const Offline = ({ ...props }) => {
    return <div className='circle offline' {...props}></div>
}

const STATUS_VS_COMP = {
    ONLINE: (props) => <Online {...props} />,
    OFFLINE: (props) => <Offline {...props} />
}

const UserLogo = ({ user, showStatus = true, style = { height: '30px', width: '30px' }, statusStyle }: Props) => {

    const [status,] = useState<CurrentStatus>(CurrentStatus.ONLINE);
    const statusComp = useMemo(() => STATUS_VS_COMP[status]({ style: statusStyle }), [status, statusStyle]);
    const imgSrc = useMemo(() => './logo192.png', []); // fetchUserImg(user); /*TODO backend*/

    return (
        <div className='user-logo hover-effect' style={{ ...style }}>
            <img src={imgSrc} alt='userlogo' />
            {showStatus ? statusComp : null}
        </div>
    );
}
export { UserLogo }
