//Libs
import React, { useState, useMemo } from 'react'

//Components
import { UserConversation } from './userConversation/UserConversation'
import { UserLogo } from '../../../../../../../icons/userLogo/UserLogo' /*TODO PATH*/

//Context/ContextHooks
import { useCurrentUser } from '../../../../../../../contexts/CurrentUser' /*TODO PATH*/

//Hooks
import { useFetchChannels } from './hooks/useFetchChannels'

//Types
import { User } from '../../../../../types/user'
import { Conversation } from './types/conversation'

//Style
import './user-conversations.css'

type Props = {
    userList: User[];
    onUserSelect: (newUser: User) => void;
}

const API = `http://localhost:5000/api/channel`

const UserConversations = ({ userList, onUserSelect }: Props) => {

    const currentUserId = useCurrentUser().id;
    const [groupMessageChannel, setGroupMessageChannel] = useState<Conversation>({
        name: 'Channels' as 'Channels',
        items: [],
    });

    useFetchChannels(API, currentUserId, setGroupMessageChannel);

    const directMessageConversation = useMemo(() => ({
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
    }), [onUserSelect, userList]);

    return (
        <div className='message-channel-wrapper'>
            <div className='column-flex'><UserConversation conversation={groupMessageChannel} /></div>
            <div className='column-flex'><UserConversation conversation={directMessageConversation} /></div>
        </div>
    )
}
export { UserConversations };