import express from "express";
import { Controller as DirectMessageController } from "../controllers/directMessageController";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("DIRECT MESSAGE ROUTE");
});

router.post("/:senderId/:receiverID", (req, res) => {
  try {
    const senderId: string = req.params.senderId;
    const receiverID: string = req.params.receiverID;
    console.log(req.body);
    const message = {
      id: uuidv4(),
      senderId: senderId,
      receiverID: receiverID,
      text: req.body.text as string,
      timestamp: +new Date(),
    };
    console.log("message", message);

    DirectMessageController.addMessage(senderId, receiverID, message);
    res.status(201).send(message);
  } catch (e) {
    res.status(400).send("UNSUCCESSFULL, NOT RECEIVED");
  }
});

router.get("/:senderId/:recieverId", (req, res) => {
  const id1 = req.params.senderId;
  const id2 = req.params.recieverId;
  res.send(JSON.stringify(DirectMessageController.getMessageList(id1, id2)));
});

export { router };
