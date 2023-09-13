//Libs
import React from "react";

// Components
import { DateWiseMessages } from "./components/dateWiseMessages/DateWiseMessages";

//Types
import { Message } from "@/components/body/types/message";

//Styles
import "./message-history.css";

type Props = {
  dateWiseMessages: Array<Message[]>;
};

const MessageHistory = ({ dateWiseMessages }: Props) => {
  return (
    <div className="message-history">
      {dateWiseMessages?.map((messageArray, index) => {
        return (
          <DateWiseMessages
            key={messageArray[0].id}
            messages={messageArray}
            scrollIntoView={index === dateWiseMessages.length - 1}
          />
        );
      })}
    </div>
  );
};

export { MessageHistory };
