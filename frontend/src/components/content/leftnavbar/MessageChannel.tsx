import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import '../../../styles/message-channel.css'
import { useState } from "react"
import React from "react"

type Channel = {
    name: string,
    items: { icon: string | JSX.Element, subcategoryName: string, onClick?: () => void }[],
}
type Props = {
    channel: Channel,
}

const MessageChannel = ({ channel }: Props) => {

    console.log('channel', channel);

    const [showItems, setShowItems] = useState<boolean>(false);
    const clickHandler = () => setShowItems(showItems => !showItems);
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div onClick={clickHandler}><FontAwesomeIcon icon={faChevronRight} className="hover-effect message-channel-row-item message-channel-icon fa-sm" /></div>
                <div className="message-channel-row-item hover-effect">{channel.name}</div>
            </div>
            {
                showItems
                    ?
                    <div style={{ display: 'flex', flexDirection: 'column', }}>
                        {channel.items.map((item, index) => {
                            return (
                                <div key={index} style={{ display: 'flex', gap: '10px', justifyContent: 'flex-start', padding: '3px', borderRadius: '3px', height: '30px', paddingLeft: '8px' }} className="hover-effect" onClick={item.onClick}>
                                    <div style={{}}>{item.icon}</div>
                                    <div>{item.subcategoryName}</div>
                                </div>
                            )
                        })}
                        <button className='add-btn'> <span style={{ padding: '3px', borderRadius: '3px' }} className="hover-effect">+</span>{'  '} Add {channel.name.toLowerCase()}</button>
                    </div>
                    : null
            }
        </div >
    )
}

export default MessageChannel