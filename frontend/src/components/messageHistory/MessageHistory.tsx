import React, { useEffect, useRef } from "react"
import MessageComponent from '../messageComponent/MessageComponent'
import { type Message } from "../../types/message"
import { User } from "../../types/user";

// import MessageWithProfile from "../content/main/MessageWithProfile"
// import MessageWithoutProfile from "../content/main/MessageWithoutProfile"

type Props = {
    messages: Message[],
    userList: User[],
}

const showMessageWithProfile = (message: Message, index: number, messages: Message[]) => {
    return (index === 0 || message.senderId !== messages[index - 1].senderId);
}

const getProfile = (message: Message, userList: User[]) => {
    /* MEMOIZE TODO */
    return userList.find(user => user.id === message.senderId);
}

const MessageHistory = React.memo(({ messages, userList }: Props) => {
    return (
        <div style={{ color: 'black', flex: 1, overflow: 'clip', height: '100%', overflowY: 'scroll' }}>
            {
                messages.map((message, index) => {
                    if (showMessageWithProfile(message, index, messages)) {
                        return <MessageComponent message={message} key={message.id} profile={getProfile(message, userList)} scrollIntoView={index === messages.length - 1} />
                    } else {
                        return <MessageComponent message={message} key={message.id} scrollIntoView={index === messages.length - 1} />
                    }
                })
            }
            <div className="scroll-into-view" ></div>
        </div>
    )
})

export default MessageHistory