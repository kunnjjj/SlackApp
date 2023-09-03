//packages
import React from "react";

// components
import LeftNavbarMidSection from "./leftNavbarMidSection/LeftNavbarMidSection";
import LeftNavbarBottomSection from "./leftNavbarBottomSection/LeftNavbarBottomSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faAngleDown } from "@fortawesome/free-solid-svg-icons";

// contexts
import { useChannelName } from "../../../contexts/ChannelName";
import { useLeftNavbarWith } from "../../../contexts/LeftNavbarWidth";

//types
import { type User } from "../types/user";

//styles
import "./left-navbar.css";

type Props = {
  userList: User[];
  onUserSelect: (newUser: User) => void;
};

const LeftNavbar = ({ userList, onUserSelect }: Props) => {
  //Discussed Both Should Be Props
  const channelName = useChannelName();
  const width = useLeftNavbarWith();

  return (
    <nav className="left-nav" style={{ width: `${width}px` }}>
      <div className="left-nav-top">
        <div className="channel-name-wrapper">
          {/* //Discussed */}
          <div
            className="hover-effect channel-name"
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {/* Discussed */}
            <strong
              style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {channelName.toUpperCase()}
            </strong>

            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div>
            <FontAwesomeIcon icon={faMessage} />
          </div>
        </div>
        <button className="upgrade-btn hover-effect">Upgrade Plan</button>
      </div>
      <div className="left-nav-mid">
        <LeftNavbarMidSection />
      </div>
      <div className="left-nav-bottom">
        <LeftNavbarBottomSection
          userList={userList}
          onUserSelect={onUserSelect}
        />
      </div>
    </nav>
  );
};

export default LeftNavbar;
