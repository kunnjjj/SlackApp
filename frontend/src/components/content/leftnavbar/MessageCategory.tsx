import React from 'react'
import '../../../styles/message-category.css'
type MessageCategoryType = {
    icon: JSX.Element,
    name: string,
}
type Props = {
    category: MessageCategoryType
}

const MessageCategory = ({ category }: Props) => {
    return (
        <div className='category hover-effect'>
            {category.icon}
            <div className="category-name">{category.name}</div>
        </div>
    )
}

export default MessageCategory;