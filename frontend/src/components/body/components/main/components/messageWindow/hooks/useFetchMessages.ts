import { useEffect } from "react";
import { Message } from "../../../../../types/message"; /* TODO */
import { arrangeMessagesByDate } from "../helpers/arrangeMessagesByDate";

const useFetchMessages = (
  url: string,
  setDateWiseMessages: React.Dispatch<React.SetStateAction<Message[][]>>
) => {
  let ignore = false; /* TODO ABORT CONTROLLER */

  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then((response) => response.json())
      .then((messages) => {
        if (!ignore) {
          setDateWiseMessages(arrangeMessagesByDate(messages));
        }
      });
    return () => {
      ignore = true;
    };
  }, [url, setDateWiseMessages]);
  // ask if can be removed as it is stable
};

export { useFetchMessages };
