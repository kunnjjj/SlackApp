//Libs
import React, { useCallback, useState } from "react";

//Styles
import "./message-window-user-input.css";

type Props = {
  onMessageSubmit: (message: string) => void;
};

const MessageWindowUserInput = ({ onMessageSubmit }: Props) => {
  const [message, setMessage] = useState("");
  const messageSubmitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (message === "") return;
      onMessageSubmit(message);
      setMessage("");
    },
    [message, onMessageSubmit],
  );

  return (
    <form
      onSubmit={messageSubmitHandler}
      className="flex align-items-center width100 message-form"
    >
      <input
        className="user-form-input black-text"
        placeholder="Send Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button disabled={message === ""} className="send-btn">
        <img
          src={require("./sendIcon.png")}
          alt="send-icon"
          className="send-icon"
        />
      </button>
    </form>
  );
};

export { MessageWindowUserInput };
