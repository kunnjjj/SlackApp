//Libs
import React, { useState } from "react";

//Types

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

//Styles
import "./user-channels.css";
import { useCurrentUser } from "@/contexts/CurrentUser";
import { useQuery } from "@/components/body/hooks/useQuery";
import { Error } from "@/components/error/Error";
import { Loading } from "@/components/loading/Loading";

const HASH_ICON = "#";
const API = `http://localhost:5000/api/channel`;
const TITLE = "Channels";

const UserChannels = () => {
  const [showItems, setShowItems] = useState<boolean>(false);

  const currentUserId = useCurrentUser().id;

  const {
    data: channels,
    error,
    loading,
  } = useQuery(`${API}/${currentUserId}`);
  // const channels = useMemo(() => data.items, [data]);

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="width100">
      <div className="conversation-title">
        <div
          onClick={() => setShowItems((showItems) => !showItems)}
          className={showItems ? "rotate-me" : ""}
        >
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
          {channels.map((channel, index) => {
            return (
              <div
                key={channel?.id ?? index}
                className="hover-effect conversation-item"
              >
                <div className="conversation-icon">{HASH_ICON}</div>
                <div className="truncate">{channel.subcategoryName}</div>
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

export { UserChannels };
