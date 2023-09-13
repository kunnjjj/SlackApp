export type Conversation = {
  name: "Channels" | "Direct Messages";
  items: {
    id: string | number;
    icon: string | ((props?: any) => JSX.Element);
    subcategoryName: string;
    onClick?: () => void;
  }[];
};
