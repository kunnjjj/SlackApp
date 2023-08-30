//packages
import React from 'react'
import { useContext, } from 'react'

// components
import MessageChannel from '../userConversation/MessageChannel'

//types
import { User } from '../../types/user'

//style
import './user-conversations.css'

const GROUP_CHANNEL =
{
    name: 'Channels',
    items: [
        {
            icon: '#',
            subcategoryName: 'classnotes'
        },
        {
            icon: '#',
            subcategoryName: 'doubts'
        },
        {
            icon: '#',
            subcategoryName: 'general'
        },
        {
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
        name: 'Direct Messages',
        items: userList.map(user => {
            return {

                icon: user.icon,
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
export default UserConversations;