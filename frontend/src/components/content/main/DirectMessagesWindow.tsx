import DirectMessageUserTopbar from "./DirectMessageUserTopbar";
import MessageWindow from "./MessageWindow";
import UserLogo from "../../utils/UserLogo";

import '../../../styles/direct-messages-window.css'
import React from "react";

import { type User } from '../../../typescriptTypes/user'
/* TODO */


const DirectMessagesWindow = () => {
    return (
        <div className='direct-messages-window' style={{ color: 'black', display: 'flex', flexDirection: 'column' }}>
            <DirectMessageUserTopbar />
            <MessageWindow />
        </div>
    )
}


export default DirectMessagesWindow;