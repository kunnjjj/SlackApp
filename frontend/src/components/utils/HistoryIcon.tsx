import '../../styles/history-icon.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const HistoryIcon = () => {
    return <div className="history-icon">
        <div className='hover-effect top-nav-btn hover-effect'>
            <FontAwesomeIcon icon={faHistory} className='fa-l' />
        </div>
    </div>
}
export default HistoryIcon