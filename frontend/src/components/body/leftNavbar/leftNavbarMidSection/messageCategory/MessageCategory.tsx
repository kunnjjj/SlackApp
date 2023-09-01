import React from 'react'
import './message-category.css'

type MessageCategoryType = {
    icon: JSX.Element,
    name: string,
}

type Props = {
    category: MessageCategoryType
}

const MessageCategory = ({ category }: Props) => {
    return (
        <div className='category hover-effect' >
            <div style={{ width: '20px' }}>{category.icon}</div>
            <div className="category-name">{category.name}</div>
        </div>
    )
}

export default MessageCategory;