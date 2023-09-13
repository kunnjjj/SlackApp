//Libs
import React, { useCallback, useMemo, useState } from "react";

//Types
import { Conversation } from "../../types/conversation";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

//Styles
import "./user-channels.css";

type Props = {
  conversation: Conversation;
};

const UserChannels = ({ conversation }: Props) => {
  const [showItems, setShowItems] = useState<boolean>(false);

  const clickHandler = useCallback(
    () => setShowItems((showItems) => !showItems),
    []
  );

  const userLogoProps = useMemo(() => {
    return {
      style: {
        height: "20px",
        width: "20px",
      },
    };
  }, []);

  return (
    <div className="width100">
      <div className="conversation-title">
        <div onClick={clickHandler} className={showItems ? "rotate-me" : ""}>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="hover-effect message-channel-row-item message-channel-icon fa-sm text-color"
            style={
              {
                // color: 'inheit' //ask
              }
            }
          />
        </div>
        <div className="message-channel-row-item hover-effect truncate text-color">
          {conversation.name}
        </div>
      </div>
      {showItems ? (
        <div className="column-flex width100">
          {conversation.items.map((item) => {
            return (
              <div
                key={item.id}
                className="hover-effect conversation-item"
                onClick={item.onClick}
              >
                <div className="conversation-icon">
                  {typeof item.icon === "function"
                    ? item.icon(userLogoProps)
                    : item.icon}
                </div>
                <div className="truncate">{item.subcategoryName}</div>
              </div>
            );
          })}
          <button className="add-btn truncate text-color">
            <span className="hover-effect plus-sign text-color">+</span>
            {"  "} Add {conversation.name.toLowerCase()}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export { UserChannels };
