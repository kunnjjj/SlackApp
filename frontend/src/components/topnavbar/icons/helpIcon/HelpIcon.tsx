//Libs
import React from 'react';

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

//Style
import './help-icon.css'

const HelpIcon = () => {
    return (
        <div className="help-icon top-nav-btn hover-effect">
            <FontAwesomeIcon icon={faQuestionCircle} style={{ color: "#ffffff", }} className='fa-l' />
        </div>
    );
}
export { HelpIcon };