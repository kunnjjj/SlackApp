import express from "express";
import DirectMessageController from "../controllers/directMessageController";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("DIRECT MESSAGE ROUTE");
});

router.post("/:receiverID", (req, res) => {

  try {
    const senderId:string = req.body.id;
    const receiverID:string = req.params.receiverID;
    const message = {
      senderId: senderId,
      receiverID: receiverID,
      text: req.body.text as string,
      timestamp: +new Date(),
    };

    DirectMessageController.addMessage(senderId, receiverID, message);
    res.status(201).send("RECEIVED SUCCESSFULLY");
  } catch (e) {
    res.status(400).send("UNSUCCESSFULL, NOT RECEIVED");
  }
});

router.get("/:senderId/:recieverId", (req, res) => {

  const id1 = req.params.senderId;
  const id2 = req.params.recieverId;
  res.send(JSON.stringify(DirectMessageController.getMessageList(id1, id2)));
});

export default router;
