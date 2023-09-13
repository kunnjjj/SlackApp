//Libs
import React, { useMemo } from "react";

//Components
import { UserLogo } from "@/components/userLogo/UserLogo";

//Context/ContextHooks
import { useCurrentUser } from "src/contexts/CurrentUser";

//Types
import { User, UserId } from "@/components/body/types/user";
import { Conversation } from "./types/conversation";

//Style
import "./user-conversations.css";
import { useQuery } from "@/components/body/hooks/useQuery";
import { DirectMessageConversations } from "./components/directMessageConversations/DirectMessageConversations";
import { UserChannels } from "./components/userChannels/UserChannels";

type Props = {
  userList: User[];
  onUserSelect: React.Dispatch<React.SetStateAction<UserId>>;
};


const API = `http://localhost:5000/api/channel`;

const UserConversations = ({ userList, onUserSelect }: Props) => {
  const currentUserId = useCurrentUser().id;

  const [state] = useQuery(`${API}/${currentUserId}`, {
    name: "Channels" as "Channels",
    items: [],
  });

  const groupMessageChannel: Conversation = state.data;

  const directMessageConversation = useMemo(
    () => ({
      name: "Direct Messages" as "Direct Messages",
      items: userList
        ? userList.map((user, index) => {
            return {
              id: user.id ?? index,
              icon: (props) => <UserLogo {...props} />,
              subcategoryName: user.name,
              onClick: () => {
                onUserSelect(user.id);
              },
            };
          })
        : [],
    }),
    [onUserSelect, userList]
  );

  return (
    <div className="message-channel-wrapper">
      <div className="column-flex">
        <DirectMessageConversations conversation={groupMessageChannel} />
      </div>
      <div className="column-flex">
        <UserChannels conversation={directMessageConversation} />
      </div>
    </div>
  );
};
export { UserConversations };
