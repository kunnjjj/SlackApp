import React from "react";
import { useState } from "react";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './message-user-input.css'

const HOST = 'https://localhost:5000';

type Props = {
    onMessageSubmit: (message: string) => void
}



const MessageUserInput = ({ onMessageSubmit }: Props) => {

    const [message, setMessage] = useState('');

    const messageSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onMessageSubmit(message);
        setMessage('');
    }

    return (<form style={{ display: 'flex', alignItems: 'center', width: '100%', padding: '0px', position: 'relative', borderRadius: '10px', gap: '5px',}} onSubmit={messageSubmitHandler}>
        <input className="user-form-input" placeholder="Send" style={{ color: 'black', height: `60px`, flexGrow: 1, borderRadius: '5px',padding:'3px' }} value={message} onChange={(e) => setMessage(e.target.value)} />
        <button><FontAwesomeIcon icon={faPaperPlane} style={{ backgroundColor: 'black',height:'40px' }} className="fa-xl" /></button>
        {/* TODO ICON COLOR*/}
    </form >);
}

export default MessageUserInput;