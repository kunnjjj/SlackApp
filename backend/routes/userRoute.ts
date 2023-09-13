//Libs
import express from "express";

//Type
import { User } from "../types/user";

const allUsers: User[] = [
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

const router = express.Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = allUsers.find((user) => user.id === id);
  res.send(user);
});

router.get("/friends/:id", (req, res) => {
  setTimeout(() => {
    res.send(allUsers);
  }, 2000);
});

export { router };
