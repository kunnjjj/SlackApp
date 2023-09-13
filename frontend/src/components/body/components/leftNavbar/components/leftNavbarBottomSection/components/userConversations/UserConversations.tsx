//Libs
import React from "react";

//Components
import { DirectMessageConversations } from "./components/directMessageConversations/DirectMessageConversations";
import { UserChannels } from "./components/userChannels/UserChannels";

//Types
import { User, UserId } from "@/components/body/types/user";

//Style
import "./user-conversations.css";

type Props = {
  userList: User[];
  onUserSelect: React.Dispatch<React.SetStateAction<UserId>>;
};

const UserConversations = ({ userList, onUserSelect }: Props) => {
  return (
    <div className="message-channel-wrapper">
      <div className="column-flex">
        <UserChannels />
      </div>
      <div className="column-flex">
        <DirectMessageConversations
          userList={userList}
          onUserSelect={onUserSelect}
        />
      </div>
    </div>
  );
};
export { UserConversations };
