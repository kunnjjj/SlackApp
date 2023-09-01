import React, { useRef } from "react"
import { type Message } from "../../types/message"
import { User } from "../../types/user";
import DateWiseMessages from "../messageHistoryDate/DateWiseMessages";

type Props = {
    messages: Message[],
    userList: User[],
}

const newDay = (currentTimestamp: number, oldTimestamp: number): boolean => {
    const oldDate = new Date(oldTimestamp);
    const currentDate = new Date(currentTimestamp);
    return (oldDate.getDate()) !== (currentDate.getDate()) || (oldDate.getMonth() !== currentDate.getMonth()) || (oldDate.getFullYear() !== currentDate.getFullYear());
}

const arrangeMessagesByDate = (messages: Message[]) => {
    return messages.reduce((accumulator: Array<Message[]>, message, index) => {
        if (index === 0 || newDay(messages[index].timestamp, messages[index - 1].timestamp)) {
            accumulator.push([]);
        }
        accumulator[accumulator.length - 1].push(message);
        return accumulator;
    }, []);
}

const MessageHistory = ({ messages, userList }: Props) => {

    const dateWiseMessages = arrangeMessagesByDate(messages);
    return (
        <div style={{ overflow: 'hidden', overflowY: 'scroll' }}>
            {
                dateWiseMessages.map((messageArray, index) => {
                    return <DateWiseMessages messages={messageArray} userList={userList} scrollIntoView={index === dateWiseMessages.length - 1} />
                })
            }
        </div>
    )
}

export default MessageHistory