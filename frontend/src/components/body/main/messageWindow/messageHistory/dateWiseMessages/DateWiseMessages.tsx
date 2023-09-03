import React from "react";
import MessageComponent from "./messageComponent/MessageComponent";
import { Message } from "../../../../types/message";
import { User } from "../../../../types/user";

const showMessageWithProfile = (
  message: Message,
  index: number,
  messages: Message[]
) => {
  return index === 0 || message.senderId !== messages[index - 1].senderId;
};

// showMessageWithProfile = ({currentMessage, isFirstMEssage, previousMessage})

const getProfile = (message: Message, userList: User[]) => {
  /* MEMOIZE TODO */
  return userList.find((user) => user.id === message.senderId);
};

type Props = {
  messages: Message[];
  userList: User[];
  scrollIntoView: boolean;
};
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const isDateToday = (date: Date) => {
  const today = new Date();
  const res =
    today.getDate() === date.getDate() &&
    today.getMonth() === date.getMonth() &&
    today.getFullYear() === date.getFullYear();
  return res;
};

// https://date-fns.org/docs/Getting-Started Discussed
const DateWiseMessages = React.memo(
  ({ messages, userList, scrollIntoView }: Props) => {
    const date = new Date(messages[0].timestamp);
    const dateText = isDateToday(date)
      ? "Today"
      : DAYS[date.getDay() - 1] +
        ", " +
        MONTHS[date.getMonth()] +
        " " +
        date.getDate();
    return (
      <div>
        <div
          style={{ position: "sticky", top: "1px", opacity: 1, zIndex: 100 }}
        >
          <b>
            {/* Discussed borderRadius */}
            <div
              style={{
                color: "black",
                border: "1px solid black",
                width: "max-content",
                margin: "0px auto",
                padding: "5px 10px",
                borderRadius: "999999px",
                zIndex: 1,
                position: "relative",
                backgroundColor: "white",
                fontSize: "12px",
              }}
            >
              {dateText}
            </div>
          </b>
        </div>
        <div style={{}}>
          {messages.map((message, index) => {
            if (showMessageWithProfile(message, index, messages)) {
              {
                /* Discussed Naming */
              }
              return (
                <MessageComponent
                  message={message}
                  key={message.id}
                  profile={getProfile(message, userList)}
                  scrollIntoView={
                    scrollIntoView && index === messages.length - 1
                  }
                />
              );
            } else {
              return (
                <MessageComponent
                  message={message}
                  key={message.id}
                  scrollIntoView={
                    scrollIntoView && index === messages.length - 1
                  }
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
);

export default DateWiseMessages;
