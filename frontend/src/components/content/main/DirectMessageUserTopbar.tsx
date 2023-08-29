import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../styles/direct-message-user-topbar.css'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react'
import { CurrentUserContext } from '../../../contexts/CurrentUserContext'
import { type User } from '../../../typescriptTypes/user'
import { SelectedUserContext } from '../../../contexts/SelectedUserContext'

const DirectMessageUserTopbar = () => {
    const [selectedUser] = useContext(SelectedUserContext as React.Context<[User, React.Dispatch<React.SetStateAction<User>>]>);

    return (
        <div className="direct-message-user-topbar" style={{ display: 'flex', }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderRadius: '5px', padding: '3px 4px' }} className='hover-effect hover-more-color'>
                <div className='direct-message-user-icon' style={{ height: '30px', width: '30px' }}>{selectedUser.icon}</div>
                <strong className='direct-message-username'>{selectedUser.name} {' '}<FontAwesomeIcon icon={faAngleDown} className='fa-icon' /></strong>
            </div>
        </div>
    );
}

export default DirectMessageUserTopbar;