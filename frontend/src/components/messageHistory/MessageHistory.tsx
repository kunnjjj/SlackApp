import React from "react"
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
        <div style={{ color: 'black', flex: 1, padding: '20px', overflow: 'clip', border: '1px solid black', height: '100%' }}>
            {
                messages.map((message, index) => {
                    if (showMessageWithProfile(message, index, messages)) {
                        return <MessageComponent message={message} key={message.id} profile={getProfile(message, userList)} />
                    } else {
                        return <MessageComponent message={message} key={message.id} />
                    }
                })
            }
        </div>
    )
})

export default MessageHistory