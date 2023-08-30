import React from 'react'

import UserConversations from '../userConversations/UserConversations'
import HuddleInvitation from '../huddleInvitation/HuddleInvitation'

import { User } from '../../types/user'

import './left-navbar-bottom-section.css'

type Props = {
    userList: User[];
    onUserSelect: (newUser: User) => void;
}

const LeftNavbarBottomSection = ({ userList, onUserSelect }) => {
    return (
        <div className="comm-channel-wrapper">
            <UserConversations userList={userList} onUserSelect={onUserSelect} />
            <HuddleInvitation />
        </div>
    )

}

export default LeftNavbarBottomSection;