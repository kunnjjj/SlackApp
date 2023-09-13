//Libs
import React from "react";

//Styles
import "./message-category.css";

type MessageCategoryType = {
  icon: JSX.Element;
  name: string;
};

type Props = {
  category: MessageCategoryType;
};

const MessageCategory = ({ category }: Props) => {
  return (
    <div className="category hover-effect">
      <div className="category-icon text-color">{category.icon}</div>
      <div className="category-name text-color">{category.name}</div>
    </div>
  );
};

export { MessageCategory };
