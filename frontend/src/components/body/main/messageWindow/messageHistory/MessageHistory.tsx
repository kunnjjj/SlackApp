import React from "react";
import { type Message } from "../../../types/message";
import { User } from "../../../types/user";
import DateWiseMessages from "./dateWiseMessages/DateWiseMessages";

type Props = {
  dateWiseMessages: Array<Message[]>;
  userList: User[];
};

const MessageHistory = ({ dateWiseMessages, userList }: Props) => {
  return (
    <div style={{ overflow: "hidden", overflowY: "scroll", height: "100%" }}>
      {dateWiseMessages.map((messageArray, index) => {
        return (
          <DateWiseMessages
            key={messageArray[0].id}
            messages={messageArray}
            userList={userList}
            scrollIntoView={index === dateWiseMessages.length - 1}
          />
        );
      })}
    </div>
  );
};

export default MessageHistory;
