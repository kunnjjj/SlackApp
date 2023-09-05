//Libs
import React from 'react';

//Components
import { LeftNavbarMidSection } from './leftNavbarMidSection/LeftNavbarMidSection';
import { LeftNavbarBottomSection } from './leftNavbarBottomSection/LeftNavbarBottomSection'

//Types
import { type User } from '../../types/user';

//Logos/Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faAngleDown } from '@fortawesome/free-solid-svg-icons';

//Styles
import './left-navbar.css'

type Props = {
    channelName: string;
    userList: User[];
    onUserSelect: (newUser: User) => void;
    style: {
        width?: string
    }
}

const LeftNavbar = ({ channelName, userList, onUserSelect, style }: Props) => {

    const width = style.width ?? '400px';

    return (
        /*TODO STYLES */
        <nav className="left-nav" style={{ width: width, }}>
            <div className="left-nav-top">
                <div className='channel-name-wrapper'>
                    <div className='hover-effect channel-name' style={{
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                    }}>
                        <strong style={{
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                        }}>{channelName.toUpperCase()}</strong>
                        {'  '}
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                    <div><FontAwesomeIcon icon={faMessage} /></div>
                </div>
                <button className='upgrade-btn hover-effect' >Upgrade Plan</button>
            </div>
            <div className="left-nav-mid">
                <LeftNavbarMidSection />
            </div>
            <div className="left-nav-bottom">
                <LeftNavbarBottomSection userList={userList} onUserSelect={onUserSelect} />
            </div>
        </nav >
    )
}

export { LeftNavbar };