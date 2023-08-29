import MessageCategory from "./MessageCategory"
import { messageCategories } from '../../../data/messageCategories'
import { memo } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons"
import React from "react"
const MessageCategoryWrapper = memo(() => {
    return (
        <>
            {
                messageCategories.map((category, index) => {
                    return <MessageCategory category={category} key={index} />
                })
            }
            <MessageCategory category={{
                icon: <FontAwesomeIcon icon={faEllipsisV} />,
                name: 'More',
            }} />
        </>
    )
})
export default MessageCategoryWrapper;