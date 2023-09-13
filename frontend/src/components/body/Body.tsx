//Libs
import React from "react";
import { useCallback, useState, useRef } from "react";

//Components
import { LeftNavbar } from "./components/leftNavbar";
import { Main } from "./components/main";
import { Error } from "../error/Error";
import { Loading } from "../loading/Loading";

//Context/ContextHooks
import { useCurrentUser } from "../../contexts/CurrentUser";

//Hooks
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useQuery } from "./hooks/useQuery";

//Types
import { User, UserId } from "./types/user";

//Style
import "./body.css";

type Props = {
  channelName: string;
};

type State = {
  data?: User[];
  error?: any;
  loading?: boolean;
};

const API = `http://localhost:5000/api/user`;

const Body = ({ channelName }: Props) => {
  const currentUser = useCurrentUser();
  const currentUserId = currentUser?.id;
  const {
    data: userList,
    error,
    loading,
  }: State = useQuery(`${API}/friends/${currentUserId}`, []);
  const [selectedUserId, setSelectedUserId] = useState<UserId>(currentUserId);
  const selectedUser =
    userList?.find((user) => user.id === selectedUserId) ?? currentUser;

  const [leftNavbarWidth, setLeftNavbarWidth] =
    useLocalStorage("left-navbar-width");
  const bodyRef = useRef<null | HTMLDivElement>(null);

  const setWidthHandler = useCallback(
    (event: MouseEvent) => {
      //ask clientX >=900 case
      setLeftNavbarWidth(event.clientX);
    },
    [setLeftNavbarWidth]
  );

  const mouseDownHandler = useCallback(() => {
    bodyRef.current?.addEventListener("mousemove", setWidthHandler);
  }, [setWidthHandler]);

  const mouseUpHandler = useCallback(() => {
    bodyRef.current?.removeEventListener("mousemove", setWidthHandler);
  }, [setWidthHandler]);

  if (error) {
    return <Error message={JSON.stringify(error)} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="content" ref={bodyRef}>
      <LeftNavbar
        channelName={channelName}
        userList={userList}
        onUserSelect={setSelectedUserId}
        style={{ width: `${leftNavbarWidth}px` }}
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
