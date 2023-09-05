//Libs
import { useEffect } from "react";

//Types
import { User } from "../../../../../../types/user"; /*TODO*/
import { Conversation } from "../types/conversation";

type UserId = User["id"];

const useFetchChannels = (
  api: string,
  userId: UserId,
  setGroupMessageChannel: React.Dispatch<React.SetStateAction<Conversation>>
) => {
  useEffect(() => {
    fetch(`${api}/${userId}`)
      .then((response) => response.json())
      .then((channel) => setGroupMessageChannel(channel));
  });
};

export { useFetchChannels };
