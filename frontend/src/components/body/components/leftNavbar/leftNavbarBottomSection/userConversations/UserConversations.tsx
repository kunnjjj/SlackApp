//Libs
import React, { useEffect, useState } from 'react'

//Components
import { MessageChannel } from './userConversation/MessageChannel'
import { UserLogo } from '../../../../../../icons/userLogo/UserLogo'

//Context/ContextHooks
import { useCurrentUser } from '../../../../../../contexts/CurrentUser'

//Types
import { User } from '../../../../types/user'

//Style
import './user-conversations.css'

type Props = {
    userList: User[];
    onUserSelect: (newUser: User) => void;
}

const API = `http://localhost:5000/api/channel`

const UserConversations = ({ userList, onUserSelect }: Props) => {

    const currentUserId = useCurrentUser().id;
    const [groupMessageChannels, setGroupMessageChannels] = useState({
        name: 'Channels' as 'Channels',
        items: [],
    });

    useEffect(() => {
        fetch(`${API}/${currentUserId}`)
            .then(response => response.json())
            .then(channels => setGroupMessageChannels(channels));
    }, [currentUserId]);

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
        <div className='message-channel-wrapper' style={{ padding: '10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}><MessageChannel channel={groupMessageChannels} /></div>
            <div style={{ display: 'flex', flexDirection: 'column' }}><MessageChannel channel={directMessageChannel} /></div>
        </div>
    )
}
export { UserConversations };