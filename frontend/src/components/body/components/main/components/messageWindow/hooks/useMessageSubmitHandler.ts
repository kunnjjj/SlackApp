//Libs
import { useCallback } from "react";

//Types
import { Message } from "@/components/body/types/message";

// Helpers
import { isCurrentTimestampNewDay } from "../helpers/isCurrentTimestampNewDay";

type State = {
  data: Message[][];
  error: any;
  loading: boolean;
};

const useMessageSubmitHandler = (
  url: string,
  onSuccess: React.Dispatch<React.SetStateAction<State>>
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
          onSuccess((state) => {
            const oldDateWiseMessages = state.data;
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

            const newState = {
              ...state,
              data: newDateWiseMessages,
            };

            return newState;
          });
        });
    },
    [url, onSuccess]
  );
  return messageSubmitHandler;
};

export { useMessageSubmitHandler };
