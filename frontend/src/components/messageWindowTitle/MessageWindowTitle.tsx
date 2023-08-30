import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import './message-window-title.css'

type Props = {
    icon: JSX.Element;
    title: string;
}
const MessageWindowTitle = ({ icon, title }: Props) => {

    return (
        <div className="direct-message-user-topbar" style={{ display: 'flex', }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderRadius: '5px', padding: '3px 4px' }} className='hover-effect hover-more-color'>
                <div className='direct-message-user-icon' style={{ height: '30px', width: '30px' }}>{icon}</div>
                <strong className='direct-message-username'>{title} {' '}<FontAwesomeIcon icon={faAngleDown} className='fa-icon' /></strong>
            </div>
        </div>
    );
}

export default MessageWindowTitle;