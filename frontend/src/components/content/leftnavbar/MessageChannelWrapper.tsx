import MessageChannel from './MessageChannel'
import '../../../styles/message-channel-wrapper.css'
import UserLogo from '../../utils/UserLogo'
import { useContext, useState } from 'react'
import React from 'react'
import { User } from '../../../typescriptTypes/user'
import { CurrentUserContext } from '../../../contexts/CurrentUserContext'
import { UserListContext } from '../../../contexts/UserListContext'
import { SelectedUserContext } from '../../../contexts/SelectedUserContext'
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

const MessageChannelWrapper = () => {

    const groupMessageChannel = GROUP_CHANNEL;
    const [, setSelectedUser] = useContext(SelectedUserContext as React.Context<[User, React.Dispatch<React.SetStateAction<User>>]>);
    const [userList,] = useContext(UserListContext as React.Context<[User[], React.Dispatch<React.SetStateAction<User[]>>]>);

    const directMessageChannel = {
        name: 'Direct Messages',
        items: userList.map(user => {
            return {

                icon: user.icon,
                subcategoryName: user.name,
                onClick: () => {
                    setSelectedUser(user);
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
export default MessageChannelWrapper;