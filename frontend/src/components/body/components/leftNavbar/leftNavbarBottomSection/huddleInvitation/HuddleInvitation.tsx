import React from "react";

const HuddleInvitation = () => {
    /* TODO STYLE */
    return (
        <div style={{
            flexGrow: 1, display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            alignItems: 'center',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
        }} >
            <div style={{
                padding: '20px',
                borderTop: '1px solid gray',
                width: `100%`,
                borderRadius: '10px 10px 0px 0px',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
            }} className="hover-effect">Start a Huddle</div>
        </div>
    )
}
export { HuddleInvitation };