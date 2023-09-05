export type Conversation = {
  name: "Channels" | "Direct Messages";
  items: {
    id: string | number;
    icon: string | ((props?: unknown) => JSX.Element);
    subcategoryName: string;
    onClick?: () => void;
  }[];
};
