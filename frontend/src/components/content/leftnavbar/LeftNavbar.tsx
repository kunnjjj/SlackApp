import '../../../styles/left-navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { useContext } from "react";

import { ChannelNameContext } from '../../../contexts/ChannelNameContext';


import MessageCategoryWrapper from './MessageCategoryWrapper';
import CommunicationChannelWrapper from './CommunicationChannelWrapper';
import React from 'react';
import { type User } from '../../../typescriptTypes/user';
type Props = {
    width: number;
}

const LeftNavbar = ({ width }: Props) => {
    const channelName = useContext(ChannelNameContext);
    return (
        <nav className="left-nav" style={{ width: `${width}px`, }}>
            <div className="left-nav-top">
                <div className='channel-name-wrapper'>
                    <div className='hover-effect channel-name'>
                        <strong>{channelName.toUpperCase()}</strong>
                        {'  '}
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                    <div><FontAwesomeIcon icon={faMessage} /></div>
                </div>
                <button className='upgrade-btn hover-effect'>Upgrade Plan</button>
            </div>
            <div className="left-nav-mid">
                <MessageCategoryWrapper />
            </div>
            <div className="left-nav-bottom">
                <CommunicationChannelWrapper/>
            </div>
        </nav >
    )
}

export default LeftNavbar;