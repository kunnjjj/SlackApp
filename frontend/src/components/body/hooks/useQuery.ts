import { useState, useEffect } from "react";

type State = {
  data?: any;
  error?: any;
  loading?: boolean;
};

const DEFAULT_TRANSFORMATION = (val) => val;

const useQuery = (
  api: string,
  initialValue?: any,
  dataTransformationFn = DEFAULT_TRANSFORMATION
): [State, React.Dispatch<React.SetStateAction<State>>] => {
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

    fetch(api /* { signal: controller.signal } */)
      .then((response) => response.json())
      .then((data) => {
        const transformedData = dataTransformationFn(data);
        setState((state) => ({
          ...state,
          loading: false,
          error: null,
          data: transformedData,
        }));
      })

      .catch((err) => {
        setState((state) => ({
          ...state,
          error: err,
          loading: false,
        }));
      });
    return () => {
      controller.abort();
    };
  }, [api, dataTransformationFn]);

  return [state, setState];
};
export { useQuery };
