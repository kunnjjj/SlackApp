import { useEffect } from "react";
import { Message } from "@/components/body/types/message";
import { arrangeMessagesByDate } from "../helpers/arrangeMessagesByDate";

const useFetchMessages = (
  url: string,
  setDateWiseMessages: React.Dispatch<React.SetStateAction<Message[][]>>,
) => {
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(url, { signal })
      .then((response) => response.json())
      .then((messages) => {
        setDateWiseMessages(arrangeMessagesByDate(messages));
      });
    return () => {
      controller.abort();
    };
  }, [url, setDateWiseMessages]);
  // ask if can be removed as it is stable
};

export { useFetchMessages };
