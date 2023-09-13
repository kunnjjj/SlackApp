//Libs
import { useCallback } from "react";

//hooks
import { useMutation } from "./useMutation";
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
