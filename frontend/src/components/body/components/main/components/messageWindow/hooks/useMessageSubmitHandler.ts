//Libs
import { useCallback, useState } from "react";
import isSameDay from "date-fns/isSameDay";

//Types
import { Message } from "@/components/body/types/message";

// Helpers
import { mutationEvent } from "../helpers/mutationEvent";

type State = {
  loading?: boolean;
  error?: any;
};
const useMutation = (url: string) => {
  const [state, setState] = useState<State>();

  const mutate = (requestBody: any) => {
    return new Promise((resolve, reject) => {
      setState({
        loading: true,
        error: null,
      });

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => response.json())
        .then((data) => {
          setState({ error: null, loading: false });
          resolve(data);
        })
        .catch((err) => {
          setState({ loading: false, error: err });
          reject(err);
        });
    });
  };
  return { ...state, mutate };
};

const useMessageSubmitHandler = (url: string, onSuccess: () => void) => {
  const { mutate, error, loading } = useMutation(url);

  const messageSubmitHandler = useCallback(
    (messageText: string) => {
      mutate({ text: messageText }).then(() => {
        onSuccess();
      });
    },
    [mutate, onSuccess]
  );

  return { messageSubmitHandler, error, loading };
};

export { useMessageSubmitHandler, useMutation };
