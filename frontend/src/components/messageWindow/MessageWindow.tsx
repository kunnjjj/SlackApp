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
    userList: User[];
}


const HOST = 'http://localhost:5000';
const URL = `${HOST}/api/directmessage`;

const MessageWindow = ({ selectedUser, userList }: Props) => {

    const currentUserId = useCurrentUser().id;
    const receiverId = selectedUser.id;
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        let ignore = false;
        fetch(`${URL}/${currentUserId}/${receiverId}`)
            .then(response => response.json())
            .then(messages => {
                if (!ignore) setMessages(messages)
            });

        return () => {
            ignore = true;
        }
    }, [currentUserId, receiverId]);

    const messageSubmitHandler = (message: string) => {

        fetch(`${URL}/${currentUserId}/${receiverId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                text: message
            }),
        })
            .then((response) => response.json())
            .then((message: Message) => {
                setMessages(oldMessages => {
                    const newMessages = [...oldMessages];
                    newMessages.push(message);
                    return newMessages;
                })
            })
    }

    return (
        <div className='direct-messages-window' style={{ color: 'black', display: 'flex', flexDirection: 'column' }}>
            <MessageWindowTitle title={selectedUser.name} icon={selectedUser.icon} />
            <div className="message-window" style={{ display: 'flex', flexDirection: 'column', padding: '15px' }}>
                <MessageHistory messages={messages} userList={userList} />
                <MessageWindowUserInput onMessageSubmit={messageSubmitHandler} />
            </div>
        </div>
    )
}


export default MessageWindow;