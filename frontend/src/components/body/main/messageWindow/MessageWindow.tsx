//packages
import React, { useEffect, useState } from "react";

// components
import MessageWindowUserInput from "./messageWindowUserInput/MessageUserInput";
import MessageHistory from "./messageHistory/MessageHistory";
import MessageWindowTitle from "./messageWindowTitle/MessageWindowTitle";

//style
import "./message-window.css";

//types
import { type User } from "../../types/user";
import { type Message } from "../../types/message";
import { useCurrentUser } from "../../../../contexts/CurrentUser";

{
  /* Discussed  userList Redundant prop*/
}
type Props = {
  selectedUser: User;

  userList: User[];
};

const HOST = "http://localhost:5000";
const URL = `${HOST}/api/directmessage`;

const newDay = (currentTimestamp: number, oldTimestamp: number): boolean => {
  const oldDate = new Date(oldTimestamp);
  const currentDate = new Date(currentTimestamp);
  return (
    oldDate.getDate() !== currentDate.getDate() ||
    oldDate.getMonth() !== currentDate.getMonth() ||
    oldDate.getFullYear() !== currentDate.getFullYear()
  );
};

const arrangeMessagesByDate = (messages: Message[]) => {
  return messages.reduce((accumulator: Array<Message[]>, message, index) => {
    if (
      index === 0 ||
      newDay(messages[index].timestamp, messages[index - 1].timestamp)
    ) {
      accumulator.push([]);
    }
    accumulator[accumulator.length - 1].push(message);
    return accumulator;
  }, []);
};

messages = [
  { senderId: "", receiverId: "", messageId: "", timeStamp: "", text: "" },
];

const MessageWindow = ({ selectedUser, userList }: Props) => {
  const currentUserId = useCurrentUser().id;
  const receiverId = selectedUser.id;
  const [dateWiseMessages, setDateWiseMessages] = useState<Array<Message[]>>(
    []
  );

  {
    /* Discussed  custom hook*/
  }
  useEffect(() => {
    let ignore = false;
    {
      /* Discussed abort request*/
    }
    fetch(`${URL}/${currentUserId}/${receiverId}`)
      .then((response) => response.json())
      .then((messages) => {
        if (!ignore) {
          setDateWiseMessages(arrangeMessagesByDate(messages));
        }
      });
    return () => {
      ignore = true;
    };
  }, [currentUserId, receiverId]);

  const messageSubmitHandler = (message: string) => {
    fetch(`${URL}/${currentUserId}/${receiverId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        text: message,
      }),
    })
      .then((response) => response.json())
      .then((message: Message) => {
        setDateWiseMessages((oldMessages) => {
          const newMessages = [...oldMessages];
          if (
            newMessages.length === 0 ||
            newDay(
              message.timestamp,
              newMessages[newMessages.length - 1][0].timestamp
            )
          ) {
            newMessages.push([]);
          }
          newMessages[newMessages.length - 1] = [
            ...newMessages[newMessages.length - 1],
          ];
          newMessages[newMessages.length - 1].push(message);
          return newMessages;
        });
      });
  };

  return (
    <div
      className="direct-messages-window"
      style={{ color: "black", display: "flex", flexDirection: "column" }}
    >
      <MessageWindowTitle title={selectedUser.name} icon={selectedUser.icon} />
      <div
        className="message-window"
        style={{ display: "flex", flexDirection: "column", padding: "15px" }}
      >
        <MessageHistory
          dateWiseMessages={dateWiseMessages}
          userList={userList}
        />
        <MessageWindowUserInput onMessageSubmit={messageSubmitHandler} />
      </div>
    </div>
  );
};

export default MessageWindow;
