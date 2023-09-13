//Libs
import React, {  useMemo } from "react";

//Components
import { MessageWindowUserInput } from "./components/messageWindowUserInput/MessageWindowUserInput";
import { MessageHistory } from "./components/messageHistory/MessageHistory";
import { MessageWindowTitle } from "./components/messageWindowTitle/MessageWindowTitle";
import { Error } from "@/components/error/Error";
import { Loading } from "@/components/loading/Loading";

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
import { arrangeMessagesByDate } from "./helpers/arrangeMessagesByDate";

type Props = {
  selectedUser: User;
};

const HOST = "http://localhost:5000";
const URL = `${HOST}/api/directmessage`;

const MessageWindow = ({ selectedUser }: Props) => {
  const currentUserId = useCurrentUser()?.id;
  const receiverId = selectedUser?.id;

  const {
    data,
    error,
    loading,
    refetchDataFromServer: refetchMessages,
  } = useQuery(`${URL}/${currentUserId}/${receiverId}`);

  const dateWiseMessages = useMemo(() => arrangeMessagesByDate(data), [data]);

  const {
    messageSubmitHandler,
    error: errorWhileSendingMessage,
    loading: loadingWhileSubmitting,
  } = useMessageSubmitHandler(
    `${URL}/${currentUserId}/${receiverId}`,
    refetchMessages
  );

  if (error || errorWhileSendingMessage) {
    return <Error error={error || errorWhileSendingMessage} />;
  }

  if (loading || loadingWhileSubmitting) {
    return <Loading />;
  }

  return (
    <div className="direct-messages-window column-flex">
      <MessageWindowTitle
        title={selectedUser.name}
        selectedUser={selectedUser}
      />
      <div className="message-window column-flex">
        <MessageHistory dateWiseMessages={dateWiseMessages} />
        <MessageWindowUserInput onMessageSubmit={messageSubmitHandler} />
      </div>
    </div>
  );
};

export { MessageWindow };
