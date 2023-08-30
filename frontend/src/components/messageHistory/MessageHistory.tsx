import React from "react"
import { type Message } from "../../types/message"
// import MessageWithProfile from "../content/main/MessageWithProfile"
// import MessageWithoutProfile from "../content/main/MessageWithoutProfile"

type Props = {
    messages: Message[],
}

const showMessageWithProfile = (message: Message, index: number, messages: Message[]) => {
    return (index === 0 || message.senderId !== messages[index - 1].senderId);
}

const MessageHistory = React.memo(({ messages }: Props) => {
    return (
        <div style={{ color: 'black', flex: '1', padding: '20px' }}>
            {/* {
                messages.map((message, index) => {
                    if (showMessageWithProfile(message, index, messages)) {
                        return <MessageWithProfile message={message} />
                    } else {
                        return <MessageWithoutProfile message={message} />
                    }
                })
            } */}
        </div>
    )
})

export default MessageHistory