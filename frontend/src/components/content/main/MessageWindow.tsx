import MessageUserInput from "./MessageUserInput";
import '../../../styles/message-window.css'
import MessageHistory from "./MessageHistory";
import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import { SelectedUserContext } from "../../../contexts/SelectedUserContext";
import { type User } from "../../../typescriptTypes/user";
import { Message } from "../../../typescriptTypes/message";

const HOST = 'http://localhost:5000';
const URL = `${HOST}/api/directmessage`;

const MessageWindow = React.memo(() => {

    const currentUserId = useContext(CurrentUserContext)?.id;

    const [receiverUser] = useContext(SelectedUserContext as React.Context<[User, React.Dispatch<React.SetStateAction<User>>]>
    );
    const receiverId = receiverUser.id;

    console.log(currentUserId, 'currentUserId');
    console.log(receiverId, 'receiverID');

    const [messages, setMessages] = useState<Message[]>([]);
    console.log(messages);
    useEffect(() => {
        fetch(`${URL}/${currentUserId}/${receiverId}`)
            .then(response => response.json())
            .then(messages => setMessages(messages));
    }, [currentUserId, receiverId]);

    console.log(messages);
    return (<div className="message-window" style={{ display: 'flex', flexDirection: 'column' }}>
        <MessageHistory messages={messages} />
        <MessageUserInput />
    </div>);
});

export default MessageWindow;