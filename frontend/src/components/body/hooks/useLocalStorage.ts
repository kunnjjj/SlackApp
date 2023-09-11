import { useCallback } from "react";

const useLocalStorage = (key: unknown) => {
  const stringKey = JSON.stringify(key);

  const getItemFromLocalStorage = useCallback((): unknown => {
    const item = localStorage.getItem(stringKey);
    if (!item) return null;
    return JSON.parse(item);
  }, [stringKey]);

  const setItemToLocalStorage = useCallback(
    (item: unknown) => {
      const stringItem = JSON.stringify(item);
      localStorage.setItem(stringKey, stringItem);
    },
    [stringKey],
  );

  return { getItemFromLocalStorage, setItemToLocalStorage };
};

export { useLocalStorage };
