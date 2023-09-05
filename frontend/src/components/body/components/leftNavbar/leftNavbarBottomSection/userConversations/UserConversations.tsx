//Libs
import React from 'react'

//Components
import { MessageChannel } from './userConversation/MessageChannel'
import { UserLogo } from '../../../../../../icons/userLogo/UserLogo'

//Types
import { User } from '../../../../types/user'

//Style
import './user-conversations.css'

const GROUP_CHANNEL = /*TODO from DB*/
{
    name: 'Channels' as 'Channels',
    items: [
        {
            id: 0,
            icon: '#',
            subcategoryName: 'classnotes'
        },
        {
            id: 1,
            icon: '#',
            subcategoryName: 'doubts'
        },
        {
            id: 2,
            icon: '#',
            subcategoryName: 'general'
        },
        {
            id: 3,
            icon: '#',
            subcategoryName: 'memes'
        },
    ]
}

type Props = {
    userList: User[];
    onUserSelect: (newUser: User) => void;
}

const UserConversations = ({ userList, onUserSelect }: Props) => {

    const groupMessageChannel = GROUP_CHANNEL;

    const directMessageChannel = {
        name: 'Direct Messages' as 'Direct Messages',
        items: userList.map((user, index) => {
            return {
                id: user.id ?? index,
                icon: (props) => <UserLogo {...props} />,
                subcategoryName: user.name,
                onClick: () => {
                    onUserSelect(user);
                }
            }
        })
    }

    return (
        <div className='message-channel-wrapper'>
            <div style={{ display: 'flex', flexDirection: 'column' }}><MessageChannel channel={groupMessageChannel} /></div>
            <div style={{ display: 'flex', flexDirection: 'column' }}><MessageChannel channel={directMessageChannel} /></div>
        </div>
    )
}
export { UserConversations };