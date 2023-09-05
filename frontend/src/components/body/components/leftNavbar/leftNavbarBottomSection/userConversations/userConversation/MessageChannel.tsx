//Libs
import React, { useCallback, useMemo, useState } from "react"

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

//Styles
import './message-channel.css'

type Channel = {
    name: 'Channels' | 'Direct Messages',
    items: {
        id: string | number,
        icon: string | ((props?: unknown) => JSX.Element),
        subcategoryName: string,
        onClick?: () => void
    }[],
}

type Props = {
    channel: Channel,
}

/*TODO STYLES IN CSS */
const MessageChannel = ({ channel }: Props) => {

    const [showItems, setShowItems] = useState<boolean>(false);

    const clickHandler = useCallback(() => setShowItems(showItems => !showItems), []);

    const userLogoProps = useMemo(() => {
        return {
            style: {
                height: '20px',
                width: '20px',
            }
        }
    }, [])

    return (
        <div style={{ width: '100%'}}>
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
                        width: '100%',
                    }}>
                        {channel.items.map((item) => {
                            return (
                                <div key={item.id} style={{
                                    display: 'flex',
                                    gap: '10px',
                                    justifyContent: 'flex-start',
                                    padding: '5px',
                                    borderRadius: '3px',
                                    height: '30px',
                                    paddingLeft: '8px',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                }} className="hover-effect" onClick={item.onClick}>
                                    <div >{typeof item.icon === 'function' ? item.icon(userLogoProps) : item.icon}</div>
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

export { MessageChannel }