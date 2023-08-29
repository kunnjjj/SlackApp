import React from "react";
import { type Message } from "../../../typescriptTypes/message";

type Props = {
    message: Message,
}

const MessageWithProfile = ({ message }: Props) => {
    return <div>{message.text}</div>
}

export default MessageWithProfile;