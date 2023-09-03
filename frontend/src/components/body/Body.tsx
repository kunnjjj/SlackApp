// packages
import React from "react";
import { useCallback, useEffect, useState } from "react";

// components
import LeftNavbar from "./leftNavbar/LeftNavbar";
import Main from "./main/Main";
import UserLogo from "../userLogo/UserLogo";

// contexts

// types
import { type User } from "./types/user";

// styles
import "./body.css";
import { LeftNavbarWidthProvider } from "../../contexts/LeftNavbarWidth";

const getWidthFromLocalStorage = () => {
  const item = localStorage.getItem("width");
  if (!item) return null;
  return JSON.parse(item);
};

//Discussed.
const allUsers: User[] = [
  {
    id: "1",
    name: "User1",
    icon: <UserLogo showStatus={false} />,
  },
  {
    id: "2",
    name: "User2",
    icon: <UserLogo showStatus={false} />,
  },
  {
    id: "3",
    name: "User3",
    icon: <UserLogo showStatus={false} />,
  },
  {
    id: "4",
    name: "User4",
    icon: <UserLogo showStatus={false} />,
  },
  {
    id: "0",
    name: "User0",
    icon: <UserLogo showStatus={false} />,
  },
];

// Width
// 400 -> 450 -> 500.

const Body = () => {
  // Naming //Discussed
  const [width, setWidth] = useState(() => getWidthFromLocalStorage() ?? 400);
  const [userList] = useState(allUsers);
  const [selectedUser, setSelectedUser] = useState<User>(userList[0]);

  useEffect(() => {
    //Discussed
    return () => {
      localStorage.setItem("width", JSON.stringify(width));
    };
  }, [width]);

  const setWidthHandler = useCallback((event: MouseEvent) => {
    setWidth(event.clientX);
  }, []);

  //Should Not be required
  //Discussed
  const mouseDownHandler = () => {
    document.addEventListener("mousemove", setWidthHandler);
  };

  const mouseUpHandler = () => {
    document.removeEventListener("mousemove", setWidthHandler);
  };

  //Discussed Redundant Functions.
  //UseCallback //Discussed
  const newUserClickHandler = (newUser: User) => {
    setSelectedUser(newUser);
  };

  return (
    <div className="content" onMouseLeave={mouseUpHandler}>
      {/* Why is leftNavBarWidth a provider? Should Instead pass as prop. Use Contexts only when absolutely necessary //Discussed */}
      <LeftNavbarWidthProvider value={width}>
        <LeftNavbar userList={userList} onUserSelect={newUserClickHandler} />
      </LeftNavbarWidthProvider>
      <div
        id="leftnav-main-seperator"
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
      ></div>
      <div className="content-right">
        <Main selectedUser={selectedUser} userList={userList} />
      </div>
    </div>
  );
};

export default Body;
