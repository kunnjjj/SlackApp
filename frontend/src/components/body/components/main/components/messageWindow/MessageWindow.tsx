//Libs
import React, { useState, } from "react";

//Components
import { MessageWindowUserInput } from './components/messageWindowUserInput/MessageWindowUserInput';
import { MessageHistory } from './components/messageHistory/MessageHistory';
import { MessageWindowTitle } from './components/messageWindowTitle/MessageWindowTitle';

//Hocs/Contexts/ContextHooks
import { useCurrentUser } from "../../../../../../contexts/CurrentUser"; /* TODO */

//Hooks
import { useFetchMessages } from "./hooks/useFetchMessages";

//Types
import { User } from '../../../../types/user';
import { Message } from "../../../../types/message";

//Style
import './message-window.css'
import { useMessageSubmitHandler } from "./hooks/useMessageSubmitHandler";
import { UserLogo } from "../../../../../../icons/userLogo/UserLogo";

type Props = {
    selectedUser: User;
}


const HOST = 'http://localhost:5000';
const URL = `${HOST}/api/directmessage`;

const MessageWindow = ({ selectedUser }: Props) => {

    const currentUserId = useCurrentUser().id;
    const receiverId = selectedUser.id;
    const [dateWiseMessages, setDateWiseMessages] = useState<Array<Message[]>>([]);

    useFetchMessages(`${URL}/${currentUserId}/${receiverId}`, setDateWiseMessages);

    const messageSubmitHandler = useMessageSubmitHandler(`${URL}/${currentUserId}/${receiverId}`, setDateWiseMessages);
    const userIcon = <UserLogo user={selectedUser} showStatus={true} />;

    return (
        <div className='direct-messages-window' style={{ color: 'black', display: 'flex', flexDirection: 'column' }}>
            <MessageWindowTitle title={selectedUser.name} icon={userIcon} />
            <div className="message-window" style={{ display: 'flex', flexDirection: 'column', padding: '15px' }}>
                <MessageHistory dateWiseMessages={dateWiseMessages}/>
                <MessageWindowUserInput onMessageSubmit={messageSubmitHandler} />
            </div>
        </div>
    )
}


export { MessageWindow };