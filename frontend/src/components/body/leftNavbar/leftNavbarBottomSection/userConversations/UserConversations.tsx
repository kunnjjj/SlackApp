//packages
import React from "react";

// components
import MessageChannel from "./userConversation/MessageChannel";

//types
import { User } from "../../../types/user";

//style
import "./user-conversations.css";

{
  /* Discussed */
}
const GROUP_CHANNEL = {
  name: "Channels" as "Channels",
  items: [
    {
      id: 0,
      icon: "#",
      subcategoryName: "classnotes",
    },
    {
      id: 1,
      icon: "#",
      subcategoryName: "doubts",
    },
    {
      id: 2,
      icon: "#",
      subcategoryName: "general",
    },
    {
      id: 3,
      icon: "#",
      subcategoryName: "memes",
    },
  ],
};

type Props = {
  userList: User[];
  onUserSelect: (newUser: User) => void;
};

const UserConversations = ({ userList, onUserSelect }: Props) => {
  const groupMessageChannel = GROUP_CHANNEL;

  {
    /* Discussed useMemo */
  }
  const directMessageChannel = {
    name: "Direct Messages" as "Direct Messages",
    items: userList.map((user, index) => {
      return {
        id: user.id ?? index,
        icon: user.icon,
        subcategoryName: user.name,
        onClick: () => {
          onUserSelect(user);
        },
      };
    }),
  };

  return (
    <div className="message-channel-wrapper">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <MessageChannel channel={groupMessageChannel} />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <MessageChannel channel={directMessageChannel} />
      </div>
    </div>
  );
};
export default UserConversations;
