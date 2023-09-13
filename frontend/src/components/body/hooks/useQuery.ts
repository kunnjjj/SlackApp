import { useState, useEffect, useCallback } from "react";

type State = {
  data?: any;
  error?: any;
  loading?: boolean;
};

const useQuery = (api: string) => {
  const [state, setState] = useState<State>({
    
  });

  const fetchQuery = useCallback(
    (controller?: AbortController) => {
      setState((prevState) => ({
        data: undefined,
        error: null,
        loading: true,
      }));

      fetch(api, { signal: controller?.signal })
        .then((response) => response.json())
        .then((data) => {
          setState({
            data,
            loading: false,
            error: null,
          });
        })
        .catch((err) => {
          setState({
            data: undefined,
            error: err,
            loading: false,
          });
        });
    },
    [api]
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchQuery(controller);
    return () => {
      controller.abort();
    };
  }, [api, fetchQuery]);

  return { ...state, refetchDataFromServer: fetchQuery };
};
export { useQuery };
