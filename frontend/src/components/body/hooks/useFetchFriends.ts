import { useEffect } from "react";

import { User } from "../types/user";

type UserId = User["id"];

const useFetchFriends = (
  api: string,
  userId: UserId,
  setUserList: React.Dispatch<React.SetStateAction<User[]>>
) => {
  /* TODO ABORT CONTROLLER */
  useEffect(() => {
    fetch(`${api}/friends/${userId}`)
      .then((response) => response.json())
      .then((users) => setUserList(users));
  }, [api, userId, setUserList]);
};

export { useFetchFriends };
