//Libs
import React from "react"

// Components
import { DateWiseMessages } from "./components/dateWiseMessages/DateWiseMessages";

//Types
import { Message } from '../../../../../../types/message'; /*TODO*/
import { User } from '../../../../../../types/user'; /* TODO */

type Props = {
    dateWiseMessages: Array<Message[]>,
    userList: User[],
}

const MessageHistory = ({ dateWiseMessages, userList }: Props) => {
    return (
        <div style={{ overflow: 'hidden', overflowY: 'scroll', height: '100%' }}>
            {
                dateWiseMessages.map((messageArray, index) => {
                    return <DateWiseMessages key={messageArray[0].id} messages={messageArray} userList={userList} scrollIntoView={index === dateWiseMessages.length - 1} />
                })
            }
        </div>
    )
}

export { MessageHistory }