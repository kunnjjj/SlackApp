import '../../../styles/communication-channel-wrapper.css'
import MessageChannelWrapper from './MessageChannelWrapper'
import HuddleInvitation from './HuddleInvitation'
import React from 'react'

const CommunicationChannelWrapper = () => {
    return (
        <div className="comm-channel-wrapper">
            <MessageChannelWrapper />
            <HuddleInvitation />
        </div>
    )

}

export default CommunicationChannelWrapper;