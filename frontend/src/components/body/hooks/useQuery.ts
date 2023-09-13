import { useState, useEffect } from "react";

type State = {
  data?: any;
  error?: any;
  loading?: boolean;
};

const useQuery = (api: string, initialValue?: any): State => {
  const [state, setState] = useState<State>({
    data: initialValue,
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      error: null,
      loading: true,
    }));

    const controller = new AbortController();

    fetch(api, { signal: controller.signal })
      .then((response) => response.json())
      .then((data) => {
        setState({
          data,
          loading: false,
          error: null,
        });
      })
      .catch((err) => {
        setState((prevState) => ({
          ...prevState,
          error: err,
          loading: false,
        }));
      });
    return () => {
      controller.abort();
    };
  }, [api]);
  return state;
};
export { useQuery };
