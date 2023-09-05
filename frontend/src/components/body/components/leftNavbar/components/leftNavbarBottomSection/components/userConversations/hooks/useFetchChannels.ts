//Libs
import { useEffect } from "react";

//Types
import { User } from "@/components/body/types/user";
import { Conversation } from "../types/conversation";

type UserId = User["id"];

const useFetchChannels = (
  api: string,
  userId: UserId,
  setGroupMessageChannel: React.Dispatch<React.SetStateAction<Conversation>>
) => {
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`${api}/${userId}`, { signal })
      .then((response) => response.json())
      .then((channel) => setGroupMessageChannel(channel));

    return () => {
      controller.abort();
    };
  }, [api, setGroupMessageChannel, userId]);
};

export { useFetchChannels };
