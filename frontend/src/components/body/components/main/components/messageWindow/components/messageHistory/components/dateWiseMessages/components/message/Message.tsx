//Libs
import React, { useState, useMemo, useRef, useEffect } from "react";

//Components
import { UserLogo } from "../../../../../../../../../../../../icons/userLogo/UserLogo"; /*TODO*/

//Types
import { Message as MessageType } from '../../../../../../../../../../types/message'; /* TODO */
import { User } from '../../../../../../../../../../types/user';

//Styles
import './message.css'

type Props = {
    message: MessageType,
    user?: User,
    scrollIntoView: boolean,
}

const getTimeFromTimeStamp = (timestamp: number) => {
    const hours = new Date(timestamp).getHours();
    const minutes = ('' + new Date(timestamp).getMinutes());
    const minutesInProperFormat = (minutes.length === 2 ? minutes : '0' + minutes);
    return (hours % 12) + ':' + minutesInProperFormat + ' ' + (hours >= 12 ? 'PM' : 'AM');
}


const Message = ({ message, user, scrollIntoView }: Props) => {

    const time = useMemo(() => {
        return getTimeFromTimeStamp(message.timestamp)
    }, [message.timestamp]);

    const [hovered, setHovered] = useState(false);


    const UserProfilePhoto = (user ? <UserLogo user={user} showStatus={false} /> : null);

    const divRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (divRef.current && scrollIntoView) {
            divRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [scrollIntoView]);

    return (
        <div className="message" ref={divRef}>
            {
                user
                    ? (
                        <div className="hover-effect flex width100 align-items-center">
                            <div className="flex message-user-profile">{UserProfilePhoto}</div>
                            <div className='message-text-wrap'>
                                <div className="flex message-username"><b className="black-text">{user.name.toUpperCase()}</b><span className="first-message-time">{time}</span></div>
                                <div className='black-text flex'>{message.text}</div>
                            </div>
                        </div>
                    )
                    : (
                        <div className="hover-effect flex width100" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                            <div className="flex message-time-wrap">
                                <span className="show-on-hower message-time">{hovered ? time : null}</span>
                            </div>
                            <div className='message-text-wrap black-text flex' >{message.text}</div>
                        </div>
                    )
            }
        </div >
    );
}

export { Message }