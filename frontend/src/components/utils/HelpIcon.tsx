import '../../styles/help-icon.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
const HelpIcon = () => {
    return <div className="help-icon top-nav-btn hover-effect"><FontAwesomeIcon icon={faQuestionCircle} style={{ color: "#ffffff", }} className='fa-l' /></div>
}
export default HelpIcon;