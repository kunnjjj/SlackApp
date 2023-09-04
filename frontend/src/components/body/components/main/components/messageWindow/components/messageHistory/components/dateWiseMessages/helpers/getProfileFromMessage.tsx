import React from "react";
//Types
import { User } from "../../../../../../../../../types/user"; /*TODO*/
import { Message } from "../../../../../../../../../types/message";

//Icons
import { UserLogo } from "../../../../../../../../../../../icons/userLogo/UserLogo"; /* TODO */

const allUsers: User[] = [
  /*TODO from backend*/
  {
    id: "0",
    name: "User0",
    icon: <UserLogo showStatus={false} />
  },
  {
    id: "1",
    name: "User1",
    icon: <UserLogo showStatus={false} />,
  },
  {
    id: "2",
    name: "User2",
    icon: <UserLogo showStatus={false} />,
  },
  {
    id: "3",
    name: "User3",
    icon: <UserLogo showStatus={false} />,
  },
  {
    id: "4",
    name: "User4",
    icon: <UserLogo showStatus={false} />,
  },
];

const getUserProfileFromMessage = (message: Message) => { /* TODO */
  return allUsers.find((user) => user.id === message.senderId);
};

export { getUserProfileFromMessage }