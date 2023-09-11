//Libs
import { useCallback } from "react";

//Types
import { Message } from "@/components/body/types/message";

// Helpers
import { isCurrentTimestampNewDay } from "../helpers/isCurrentTimestampNewDay";

const useMessageSubmitHandler = (
  url: string,
  setDateWiseMessages: React.Dispatch<React.SetStateAction<Message[][]>>,
) => {
  const messageSubmitHandler = useCallback(
    (message: string) => {
      fetch(url, {
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
              isCurrentTimestampNewDay(
                message.timestamp,
                newMessages[newMessages.length - 1][0]
                  .timestamp /*any message of last row of newMessages array*/,
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
    },
    [url, setDateWiseMessages],
  );
  return messageSubmitHandler;
};

export { useMessageSubmitHandler };
