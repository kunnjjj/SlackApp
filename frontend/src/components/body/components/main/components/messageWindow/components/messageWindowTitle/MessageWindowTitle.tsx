//Libs
import React from "react";

//Components
import { UserLogo } from "@/components/userLogo/UserLogo";

//Types
import { User } from "@/components/body/types/user";

//Styles
import "./message-window-title.css";

type Props = {
  selectedUser: User;
  title: string;
};

const MessageWindowTitle = ({ selectedUser, title }: Props) => {
  return (
    <div className="direct-message-user-topbar flex">
      <div className="hover-effect hover-more-color flex align-items-center icon-name-wrap">
        <div className="direct-message-user-icon">
          <UserLogo
            user={selectedUser}
            showStatus={true}
            statusStyle={{
              height: "10px",
              width: "10px",
              boxShadow: "0 0 0 2px white",
            }}
          />
        </div>
        <strong className="direct-message-username">
          {title} <span className="inverted black-text">{" ^"}</span>
        </strong>
      </div>
    </div>
  );
};

export { MessageWindowTitle };
