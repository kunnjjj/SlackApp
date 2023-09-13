export type Conversation = {
  name: "Channels" | "Direct Messages";
  items: {
    id: string | number;
    icon?: string;
    subcategoryName: string;
    onClick?: () => void;
  }[];
};
