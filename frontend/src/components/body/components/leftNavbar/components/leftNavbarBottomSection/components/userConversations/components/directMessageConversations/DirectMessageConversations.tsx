//Libs
import React, { useCallback, useState } from "react";

//Types
import { User, UserId } from "@/components/body/types/user";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

//Styles
import "./direct-message-conversation.css";
import { UserLogo } from "@/components/userLogo/UserLogo";

type Props = {
  userList: User[];
  onUserSelect: React.Dispatch<React.SetStateAction<UserId>>;
};

const TITLE = "Direct Messages";

const DirectMessageConversations = ({ userList, onUserSelect }: Props) => {
  const [showItems, setShowItems] = useState<boolean>(false);

  const clickHandler = useCallback(
    () => setShowItems((showItems) => !showItems),
    []
  );

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
          {TITLE}
        </div>
      </div>
      {showItems ? (
        <div className="column-flex width100">
          {userList.map((user) => {
            return (
              <div
                key={user.id}
                className="hover-effect conversation-item"
                onClick={() => {
                  onUserSelect(user.id);
                }}
              >
                <div className="conversation-icon">
                  <UserLogo
                    user={user}
                    style={{
                      height: "20px",
                      width: "20px",
                    }}
                  />
                </div>
                <div className="truncate">{user.name}</div>
              </div>
            );
          })}
          <button className="add-btn truncate text-color">
            <span className="hover-effect plus-sign text-color">+</span>
            {"  "} Add {TITLE.toLowerCase()}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export { DirectMessageConversations };
