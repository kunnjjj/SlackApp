//Libs
import React from 'react'

//Styles
import './message-window-title.css'

type Props = {
    icon: JSX.Element;
    title: string;
}

const MessageWindowTitle = ({ icon, title }: Props) => {

    return (
        <div className="direct-message-user-topbar flex" >
            <div className='hover-effect hover-more-color flex align-items-center icon-name-wrap'>
                <div className='direct-message-user-icon'>{icon}</div>
                <strong className='direct-message-username'>{title}{' '}<span className='inverted black-text'>{' ^'}</span></strong>
            </div>
        </div>
    );
}

export { MessageWindowTitle };