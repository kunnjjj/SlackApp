import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const HOST = 'https://localhost:5000';

const MessageUserInput = () => {

    return (<form style={{ display: 'flex', alignItems: 'center', width: '100%', padding: '30px', border: '1px solid gray', borderRadius: '10px', gap: '5px' }}>
        <input placeholder="Send" style={{ color: 'black', height: `60px`, flexGrow: 1 }} />
        <button><FontAwesomeIcon icon={faPaperPlane} style={{ backgroundColor: 'black' }} className="fa-xl" /></button>
        {/* TODO ICON COLOR*/}
    </form>);
}

export default MessageUserInput;