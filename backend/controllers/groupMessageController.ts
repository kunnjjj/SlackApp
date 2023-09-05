import { v4 as uuidv4 } from "uuid";
import { type Key, type MessageId, type Message, type UserId } from "./types";

class GroupMessageController {
  messageIdMap: Map<string, string>;
  messageList: Map<string, Message[]>;

  constructor() {
    this.messageIdMap = new Map<Key, MessageId>();
    this.messageList = new Map<MessageId, Message[]>();
  }

  findMessageId(userList: UserId[]): string {
    userList.sort();

    const key = userList.join("-");
    if (this.messageIdMap.has(key)) {
      return this.messageIdMap.get(key) as string;
    }

    const generatedId = JSON.stringify(uuidv4());
    this.messageIdMap.set(key, generatedId);
    return generatedId;
  }

  getMessageList(userList: UserId[]) {
    const messageId = this.findMessageId(userList);
    const messageList = this.messageList.has(messageId)
      ? this.messageList.get(messageId)
      : [];
    return messageList;
  }

  addMessageByUserList(userList: UserId[], message: Message) {
    const messageId = this.findMessageId(userList);
    if (!this.messageList.has(messageId)) {
      this.messageList.set(messageId, []);
    }
    (this.messageList.get(messageId) as Message[]).push(message);
  }
  addMessageByGroupId(groupId: string, message: Message) {
    if (!this.messageList.has(groupId)) {
      this.messageList.set(groupId, []);
    }
    (this.messageList.get(groupId) as Message[]).push(message);
  }
}

const Controller = new GroupMessageController();
export { Controller };
