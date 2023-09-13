//Libs
import express from "express";

const GROUP_CHANNEL = {
  name: "Channels" as "Channels",
  items: [
    {
      id: 0,
      icon: "#",
      subcategoryName: "classnotes",
    },
    {
      id: 1,
      icon: "#",
      subcategoryName: "doubts",
    },
    {
      id: 2,
      icon: "#",
      subcategoryName: "general",
    },
    {
      id: 3,
      icon: "#",
      subcategoryName: "memes",
    },
  ],
};

const router = express.Router();

router.get("/:userId", (req, res) => {
  //   const { id } = req.params; // later message can be fetched according to user
  res.send(GROUP_CHANNEL.items);
});

export { router };
