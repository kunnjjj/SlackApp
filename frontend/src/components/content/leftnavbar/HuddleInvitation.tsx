import React from "react";

const getWidthFromLocalStorage = () => {
    const width = localStorage.getItem('width');
    if (!width) return null;
    return JSON.parse(width);
}

const HuddleInvitation = () => {
    const width = getWidthFromLocalStorage() ?? 400;
    return (
        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ padding: '20px', borderTop: '1px solid gray', width: `${width}px`, borderRadius: '10px 10px 0px 0px' }} className="hover-effect">Start a Huddle</div>
        </div>
    )
}
export default HuddleInvitation;