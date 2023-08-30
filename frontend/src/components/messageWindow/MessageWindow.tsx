//packages
import React, { useEffect, useState } from "react";

// components
import MessageWindowUserInput from '../messageWindowUserInput/MessageUserInput';
import MessageHistory from '../messageHistory/MessageHistory';
import MessageWindowTitle from '../messageWindowTitle/MessageWindowTitle';

//style
import './message-window.css'

//types
import { type User } from '../../types/user'
import { type Message } from "../../types/message";
import { useCurrentUser } from "../../contexts/CurrentUser";

type Props = {
    selectedUser: User;
}


const HOST = 'http://localhost:5000';
const URL = `${HOST}/api/directmessage`;

const MessageWindow = ({ selectedUser }: Props) => {

    const currentUserId = useCurrentUser().id;
    const receiverId = selectedUser.id;

    console.log(currentUserId, 'currentUserId');
    console.log(receiverId, 'receiverID');

    const [messages, setMessages] = useState<Message[]>([]);
    console.log(messages);

    useEffect(() => {
        fetch(`${URL}/${currentUserId}/${receiverId}`)
            .then(response => response.json())
            .then(messages => setMessages(messages));
    }, [currentUserId, receiverId]);

    return (
        <div className='direct-messages-window' style={{ color: 'black', display: 'flex', flexDirection: 'column' }}>
            <MessageWindowTitle title={selectedUser.name} icon={selectedUser.icon} />
            <div className="message-window" style={{ display: 'flex', flexDirection: 'column' }}>
                <MessageHistory messages={messages} />
                <MessageWindowUserInput  />
            </div>
        </div>
    )
}


export default MessageWindow;