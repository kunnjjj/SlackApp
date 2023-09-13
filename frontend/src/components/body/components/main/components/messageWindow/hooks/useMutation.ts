import { useState } from "react";

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

export { useMutation };
