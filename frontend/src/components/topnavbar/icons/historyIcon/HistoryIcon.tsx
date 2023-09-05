//Libs
import React from 'react'

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory } from '@fortawesome/free-solid-svg-icons'

//Styles
import './history-icon.css'


const HistoryIcon = () => {
    return <div className="history-icon">
        <div className='hover-effect top-nav-btn hover-effect'>
            <FontAwesomeIcon icon={faHistory} className='fa-l' />
        </div>
    </div>
}

export { HistoryIcon }