import { useEffect } from "react";

import { User } from "../types/user";

type UserId = User["id"];

const useFetchFriends = (
  api: string,
  userId: UserId,
  setUserList: React.Dispatch<React.SetStateAction<User[]>>
) => {
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`${api}/friends/${userId}`, { signal })
      .then((response) => response.json())
      .then((users) => setUserList(users));
    return () => {
      controller.abort();
    };
  }, [api, userId, setUserList]);
};

export { useFetchFriends };
