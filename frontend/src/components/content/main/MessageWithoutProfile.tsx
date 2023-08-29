import React from "react";
import { type Message } from "../../../typescriptTypes/message";

type Props = {
    message: Message,
}

const MessageWithoutProfile = ({ message }: Props) => {
    return <div>{message.text}</div>
}

export default MessageWithoutProfile;