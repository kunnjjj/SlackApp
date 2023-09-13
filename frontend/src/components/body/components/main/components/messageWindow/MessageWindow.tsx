//Libs
import React, { useState } from "react";

//Components
import { MessageWindowUserInput } from "./components/messageWindowUserInput/MessageWindowUserInput";
import { MessageHistory } from "./components/messageHistory/MessageHistory";
import { MessageWindowTitle } from "./components/messageWindowTitle/MessageWindowTitle";

//Hocs/Contexts/ContextHooks
import { useCurrentUser } from "@/contexts/CurrentUser";

//Hooks
import { useMessageSubmitHandler } from "./hooks/useMessageSubmitHandler";
import { useQuery } from "@/components/body/hooks/useQuery";

//Types
import { User } from "@/components/body/types/user";

//Style
import "./message-window.css";

//Icons
import { UserLogo } from "@/components/userLogo/UserLogo";
import { arrangeMessagesByDate } from "./helpers/arrangeMessagesByDate";
import { Error } from "@/components/error/Error";
import { Loading } from "@/components/loading/Loading";

type Props = {
  selectedUser: User;
};

const HOST = "http://localhost:5000";
const URL = `${HOST}/api/directmessage`;

const MessageWindow = ({ selectedUser }: Props) => {
  const currentUserId = useCurrentUser()?.id;
  const receiverId = selectedUser?.id;

  const { data, error, loading } = useQuery(
    `${URL}/${currentUserId}/${receiverId}`,
    []
  );

  const [dateWiseMessages, setDateWiseMessages] = useState(() =>
    //ASK TODAY
    arrangeMessagesByDate(data)
  );

  const messageSubmitHandler = useMessageSubmitHandler(
    `${URL}/${currentUserId}/${receiverId}`,
    setDateWiseMessages
  );

  const userIcon = (
    <UserLogo
      user={selectedUser}
      showStatus={true}
      statusStyle={{
        height: "10px",
        width: "10px",
        boxShadow: "0 0 0 2px white",
      }}
    />
  );

  if (error) {
    return <Error message={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="direct-messages-window column-flex">
      <MessageWindowTitle title={selectedUser.name} icon={userIcon} />
      <div className="message-window column-flex">
        <MessageHistory dateWiseMessages={dateWiseMessages} />
        <MessageWindowUserInput onMessageSubmit={messageSubmitHandler} />
      </div>
    </div>
  );
};

export { MessageWindow };
