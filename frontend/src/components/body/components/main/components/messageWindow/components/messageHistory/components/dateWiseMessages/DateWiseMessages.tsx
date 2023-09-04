//Libs
import React from "react";

//Components
import { Message } from "./components/message/Message";

//Types
import { Message as MessageType } from "../../../../../../../../types/message"; /* TODO */
import { User } from "../../../../../../../../types/user"; /* TODO */

//Constants 
import { DAYS, MONTHS } from "./constants/daysAndMonths";

//Helpers
import { getUserProfileFromMessage } from "./helpers/getProfileFromMessage";

const showMessageWithProfile = (currentMessage: MessageType, previousMessage: MessageType | null, isFirstMessage: boolean = false,) => {
    return (isFirstMessage || currentMessage.senderId !== previousMessage.senderId);
}


type Props = {
    messages: MessageType[],
    userList: User[],
    scrollIntoView: boolean,
}

const isDateToday = (date: Date) => {
    const today = new Date();
    const res = (today.getDate() === date.getDate() && today.getMonth() === date.getMonth() && today.getFullYear() === date.getFullYear());
    return res;
}

const DateWiseMessages = React.memo(({ messages, userList, scrollIntoView }: Props) => {
    const date = new Date(messages[0].timestamp);
    const dateText = (isDateToday(date) ? 'Today' : DAYS[date.getDay() - 1] + ', ' + MONTHS[date.getMonth()] + " " + date.getDate());
    return (
        <div>
            <div style={{ position: 'sticky', top: '1px', opacity: 1, zIndex: 100, }}>
                <b>
                    <div style={{ color: 'black', border: '1px solid black', width: 'max-content', margin: '0px auto', padding: '5px 10px', borderRadius: '999999px', zIndex: 1, position: 'relative', backgroundColor: 'white', fontSize: '12px' }}>{dateText}</div>
                </b>
            </div>
            <div style={{}}>
                {
                    messages.map((message, index) => {
                        if (showMessageWithProfile(message, (index - 1 >= 0 ? messages[index - 1] : null), (index === 0))) {
                            return <Message message={message} key={message.id} profile={getUserProfileFromMessage(message)} scrollIntoView={scrollIntoView && (index === messages.length - 1)} />
                        } else {
                            return <Message message={message} key={message.id} scrollIntoView={scrollIntoView && (index === messages.length - 1)} />
                        }
                    })
                }
            </div>
        </div>
    )
});

export { DateWiseMessages };
