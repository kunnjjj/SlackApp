//Libs
import React from "react";
import { useCallback, useEffect, useState, useRef } from "react";

//Components
import { LeftNavbar } from "./components/leftNavbar";
import { Main } from "./components/main";

//Context/ContextHooks
import { useCurrentUser } from "../../contexts/CurrentUser";

//Hooks
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useFetchFriends } from "./hooks/useFetchFriends";

//Types
import { User } from "./types/user";

//Style
import "./body.css";

type Props = {
  channelName: string;
};
const API = `http://localhost:5000/api/user`;

const Body = ({ channelName }: Props) => {
  const currentUser = useCurrentUser();
  const currentUserId = currentUser?.id;

  const { getItemFromLocalStorage, setItemToLocalStorage } =
    useLocalStorage("left-navbar-width");

  const [leftNavBarWidth, setLeftNavbarWidth] = useState(
    () => (getItemFromLocalStorage() as number) ?? 400,
  );

  const [userList, setUserList] = useState<User[]>([]);

  const [selectedUser, setSelectedUser] = useState<User>(currentUser);

  const bodyRef = useRef<null | HTMLDivElement>(null);

  useFetchFriends(API, currentUserId, setUserList);

  useEffect(() => {
    setItemToLocalStorage(leftNavBarWidth);
  }, [leftNavBarWidth, setItemToLocalStorage]);

  const setWidthHandler = useCallback((event: MouseEvent) => {
    //ask clientX >=900 case
    setLeftNavbarWidth(event.clientX);
  }, []);

  const mouseDownHandler = useCallback(() => {
    bodyRef.current?.addEventListener("mousemove", setWidthHandler);
  }, [setWidthHandler]);

  const mouseUpHandler = useCallback(() => {
    bodyRef.current?.removeEventListener("mousemove", setWidthHandler);
  }, [setWidthHandler]);

  return (
    <div className="content" ref={bodyRef}>
      <LeftNavbar
        channelName={channelName}
        userList={userList}
        onUserSelect={setSelectedUser}
        style={{ width: `${leftNavBarWidth}px` }}
      />
      <div
        id="leftnav-main-seperator"
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
      ></div>
      <div className="content-right">
        <Main selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export { Body };
