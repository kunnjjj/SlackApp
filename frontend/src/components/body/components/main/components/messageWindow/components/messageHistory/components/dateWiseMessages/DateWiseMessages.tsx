//Libs
import React, { useMemo } from "react";

//Components
import { Message } from "./components/message/Message";

//Types
import { Message as MessageType } from "@/components/body/types/message";

//Constants 
import { DAYS, MONTHS } from "./constants/daysAndMonths";

//Helpers
import { getUserFromId } from "./helpers/getUserFromId";

//Style
import './date-wise-messages.css'

const showMessageWithProfile = (currentMessage: MessageType, previousMessage: MessageType | null, isFirstMessage: boolean = false,) => {
    return (isFirstMessage || currentMessage.senderId !== previousMessage?.senderId);
}


type Props = {
    messages: MessageType[],
    scrollIntoView: boolean,
}

const isDateToday = (date: Date) => {
    const today = new Date();
    const res = (today.getDate() === date.getDate() && today.getMonth() === date.getMonth() && today.getFullYear() === date.getFullYear());
    return res;
}

const DateWiseMessages = React.memo(({ messages, scrollIntoView }: Props) => {

    const date = useMemo(() => new Date(messages[0].timestamp), [messages]);
    const dateText = useMemo(() => (isDateToday(date) ? 'Today' : DAYS[date.getDay() - 1] + ', ' + MONTHS[date.getMonth()] + " " + date.getDate()), [date]);

    return (
        <div>
            <div className='date-text-wrapper'>
                <b>
                    <div className='date-text'>{dateText}</div>
                </b>
            </div>
            <div>
                {
                    messages.map((message, index) => {
                        if (showMessageWithProfile(message, (index - 1 >= 0 ? messages[index - 1] : null), (index === 0))) {
                            return <Message message={message} key={message.id} user={getUserFromId(message.senderId)} scrollIntoView={scrollIntoView && (index === messages.length - 1)} />
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
