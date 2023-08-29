import { assert } from "console";
import { v4 as uuidv4 } from "uuid";
import { type Key,type MessageId,type Message,type UserId } from "./types";


class DirectMessageController {
  messageIdMap: Map<string, string>;
  messageList: Map<string, Message[]>;

  constructor() {
    this.messageIdMap = new Map<Key,MessageId>();
    this.messageList = new Map<MessageId,Message[]>();
  }

  findMessageId(user1Id:UserId, user2Id:UserId):string{
    const option1 = [user1Id, user2Id].join("-");
    if (this.messageIdMap.has(option1)) {
      return this.messageIdMap.get(option1) as string;
    }

    const option2 = [user2Id, user1Id].join("-");
    if (this.messageIdMap.has(option2)) {
      return this.messageIdMap.get(option2) as string;
    }

    const generatedId = JSON.stringify(uuidv4());
    this.messageIdMap.set(option1, generatedId);
    return generatedId;
  }

  getMessageList(user1Id:UserId, user2Id:UserId) {
    const messageId = this.findMessageId(user1Id, user2Id);
    const messageList = this.messageList.has(messageId)
      ? this.messageList.get(messageId)
      : [];
    return messageList;
  }

  addMessage(user1Id:UserId, user2Id:UserId, message:Message) {
    const messageId = this.findMessageId(user1Id, user2Id);
    if (!this.messageList.has(messageId)) {
      this.messageList.set(messageId, []);
    }
    (this.messageList.get(messageId) as Message[]).push(message);
  }
}

const Controller = new DirectMessageController();
export default Controller;
