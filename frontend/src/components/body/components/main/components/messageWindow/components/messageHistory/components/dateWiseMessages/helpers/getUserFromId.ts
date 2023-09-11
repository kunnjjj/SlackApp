import { User } from "@/components/body/types/user";

const allUsers: User[] = [
  /* LATER from backend*/
  {
    id: "0",
    name: "User0",
  },
  {
    id: "1",
    name: "User1",
  },
  {
    id: "2",
    name: "User2",
  },
  {
    id: "3",
    name: "User3",
  },
  {
    id: "4",
    name: "User4",
  },
];

const getUserFromId = (id: string | number) => {
  /* LATER fetch backend */
  return allUsers.find((user) => user.id === id);
};

export { getUserFromId };
