import React from "react";
import MessageWindow from "./messageWindow/MessageWindow";
import { User } from "../types/user";
import "./main.css";

type Props = {
  selectedUser: User;
  userList: User[];
};
const Main = ({ selectedUser, userList }: Props) => {
  return (
    <main id="main">
      <MessageWindow selectedUser={selectedUser} userList={userList} />
    </main>
  );
};

export default Main;
