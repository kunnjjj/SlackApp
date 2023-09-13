//Libs
import { useCallback } from "react";

//Types
import { Message } from "@/components/body/types/message";

// Helpers
import { mutationEvent } from "../helpers/mutationEvent";
import { isCurrentTimestampNewDay } from "../helpers/isCurrentTimestampNewDay";

const useMessageSubmitHandler = (
  url: string,
  onSuccess: React.Dispatch<React.SetStateAction<Message[][]>>
) => {
  const messageSubmitHandler = useCallback(
    (messageText: string) => {
      mutationEvent(url, {
        body: JSON.stringify({
          text: messageText,
        }),
      })
        .then((message: Message) => {
          onSuccess((oldDateWiseMessages) => {
            const newDateWiseMessages = [...oldDateWiseMessages];
            if (
              newDateWiseMessages.length === 0 ||
              isCurrentTimestampNewDay(
                message.timestamp,
                newDateWiseMessages[newDateWiseMessages.length - 1][0]
                  .timestamp /*any message of last row of newDateWiseMessages array*/
              )
            ) {
              newDateWiseMessages.push([]);
            }

            newDateWiseMessages[newDateWiseMessages.length - 1] = [
              ...newDateWiseMessages[newDateWiseMessages.length - 1],
              message,
            ];
            return newDateWiseMessages;
          });
        })
        .catch((err) => {
          console.error("error found", err);
        });
    },
    [onSuccess, url]
  );
  return messageSubmitHandler;
};

export { useMessageSubmitHandler };
