import React from "react"
import { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

import './message-channel.css'
import { useCurrentUser } from "../../../../../../contexts/CurrentUser"

type Channel = {
    name: 'Channels' | 'Direct Messages',
    items: { id: string | number, icon: string | JSX.Element, subcategoryName: string, onClick?: () => void }[],
}

type Props = {
    channel: Channel,
}

const MessageChannel = ({ channel }: Props) => {

    const currentUserId = useCurrentUser().id; /* REMOVE LATER WHEN ACTUAL USER LIST IS PROVIDED*/

    const [showItems, setShowItems] = useState<boolean>(false);
    const clickHandler = () => setShowItems(showItems => !showItems);
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', }}>
                <div onClick={clickHandler}><FontAwesomeIcon icon={faChevronRight} className="hover-effect message-channel-row-item message-channel-icon fa-sm" /></div>
                <div className="message-channel-row-item hover-effect" style={{
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                }}>{channel.name}</div>
            </div>
            {
                showItems
                    ?
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',

                    }}>
                        {channel.items.map((item) => {
                            if (channel.name === 'Direct Messages' && item.id === currentUserId) return null;
                            return (
                                <div key={item.id} style={{
                                    display: 'flex', gap: '10px',
                                    justifyContent: 'flex-start',
                                    padding: '5px',
                                    borderRadius: '3px',
                                    height: '30px',
                                    paddingLeft: '8px',
                                    width: '97%',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                }} className="hover-effect" onClick={item.onClick}>
                                    <div >{item.icon}</div>
                                    <div style={{
                                        textOverflow: 'ellipsis',
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                    }}>{item.subcategoryName}</div>
                                </div>
                            )
                        })}
                        <button className='add-btn' style={{ minWidth: 'max-content' }}> <span style={{ padding: '3px', borderRadius: '3px', minWidth: 'max-content' }} className="hover-effect">+</span>{'  '} Add {channel.name.toLowerCase()}</button>
                    </div>
                    : null
            }
        </div >
    )
}

export default MessageChannel