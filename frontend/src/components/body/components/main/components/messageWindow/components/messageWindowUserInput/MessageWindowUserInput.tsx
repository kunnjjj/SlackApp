//Libs
import React, { useState } from "react";

//Logos/Icons
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Styles
import './message-window-user-input.css'

type Props = {
    onMessageSubmit: (message: string) => void
}

const MessageWindowUserInput = ({ onMessageSubmit }: Props) => {

    const [message, setMessage] = useState('');
    const messageSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (message === '') return;
        onMessageSubmit(message);
        setMessage('');
    }

    return (
        <form  onSubmit={messageSubmitHandler} className="flex align-items-center width100 message-form">
            <input className="user-form-input black-text" placeholder="Send Message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button disabled={message === ''}><FontAwesomeIcon icon={faPaperPlane} style={{ backgroundColor: 'green', height: '40px' }} className="fa-xl" /></button>
            {/* TODO ICON COLOR*/}
        </form >
    );
}

export { MessageWindowUserInput };