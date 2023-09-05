//Libs
import React from 'react'

//Components
import { UserConversations } from './userConversations/UserConversations'
import { HuddleInvitation } from './huddleInvitation/HuddleInvitation'

//Types
import { User } from '../../../../types/user'

//Styles
import './left-navbar-bottom-section.css'

type Props = {
    userList: User[];
    onUserSelect: (newUser: User) => void;
}

const LeftNavbarBottomSection = ({ userList, onUserSelect }: Props) => {
    return (
        <div className="comm-channel-wrapper">
            <UserConversations userList={userList} onUserSelect={onUserSelect} />
            <HuddleInvitation />
        </div>
    )

}

export { LeftNavbarBottomSection };