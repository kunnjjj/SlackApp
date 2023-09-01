import React, { useState, useMemo, useRef, useLayoutEffect } from "react";
import { Message } from "../../types/message";
import { User } from "../../types/user";
import './message-component.css'

type Props = {
    message: Message,
    profile?: User,
    scrollIntoView: boolean,
}

const getDate = (timestamp: number) => {
    const hours = new Date(timestamp).getHours();
    const minutes = ('' + new Date(timestamp).getMinutes());
    const minutesInProperFormat = (minutes.length === 2 ? minutes : '0' + minutes);
    return (hours % 12) + ':' + minutesInProperFormat + ' ' + (hours >= 12 ? 'PM' : 'AM');
}

const MessageComponent = ({ message, profile, scrollIntoView }: Props) => {

    const time = useMemo(() => {
        return getDate(message.timestamp)
    }, [message.timestamp]);
    const [hovered, setHovered] = useState(false);

    const divRef = useRef<HTMLDivElement | null>(null);
    useLayoutEffect(() => {
        if (divRef.current && scrollIntoView) {
            divRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    },[scrollIntoView]);

    return (
        <div style={{ display: "flex", marginTop: '5px', padding: '7px', paddingLeft: '5px', }} className="message" ref={divRef}>
            {
                profile
                    ? (
                        <div style={{ display: 'flex', width: '100%', alignItems: 'center' }} className="hover-effect">
                            <div style={{ height: '40px', width: '40px', display: 'flex', }}>{profile.icon}</div>
                            <div style={{ flexGrow: '1', marginLeft: '10px' }}>
                                <div style={{ left: '0px', position: 'relative', display: 'flex', alignItems: 'flex-end' }}><b style={{ color: 'black', }}>{profile.name.toUpperCase()}</b><span style={{ color: 'gray', fontSize: '12px', marginLeft: '5px', marginBottom: '1px' }}>{time}</span></div>
                                <div style={{ color: 'black', display: 'flex' }} >{message.text}</div>
                            </div>
                        </div>
                    )
                    : (
                        <div style={{ display: 'flex', width: '100%', }} className="hover-effect" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                            <div style={{ width: '40px', display: 'flex', alignItems: 'center', }}>
                                <span style={{ color: 'gray', fontSize: '10px', minWidth: 'max-content' }} className="show-on-hower">{hovered ? time : null}</span>
                            </div>
                            <div style={{ color: 'black', flexGrow: 1, display: 'flex', marginLeft: '10px' }}>{message.text}</div>
                        </div>
                    )
            }
        </div >
    );
}

export default MessageComponent;