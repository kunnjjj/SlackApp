import {  useEffect, useState } from "react";

const getItemFromLocalStorage = (key): number => {
  const item = localStorage.getItem(key);
  if (!item) return null;
  return JSON.parse(item);
};

const useLocalStorage = (
  key: string
): [number, React.Dispatch<React.SetStateAction<number>>] => {
  const [item, setItem] = useState(() => getItemFromLocalStorage(key) ?? 400);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(item));
  }, [item, key]);

  return [item, setItem];
};

export { useLocalStorage };
