import { v4 as uuidv4 } from "uuid";
import { type Key,type MessageId,type Message,type UserId } from "./types";
import fs from 'fs'


const messageListPath='messageListFile.txt'
const messageIdMapPath='messageIdMapFile.txt'

class DirectMessageController {
  messageList:{[x: string]: Message[]};
  messageIdMap: {[x:string]:string};

  constructor() {
    // this.messageIdMap = new Map<Key,MessageId>();
    // this.messageList = new Map<MessageId,Message[]>();

    this.messageIdMap={};
    this.messageList={};
    // this.read();
  }
  
  // read(){
  //   fs.readFile(messageIdMapPath,(err,data)=>{
  //     if(err){
  //       throw err;
  //     }
  //     if(data as any as string===''){
  //       this.messageIdMap={};
  //     } else {
  //       this.messageIdMap=JSON.parse(data as any as string);
  //     }

  //   })
 
  //   fs.readFile(messageListPath,(err,data)=>{
  //     if(err){
  //       throw err;
  //     }
  //     if(data as any as string===''){
  //       this.messageList={};
  //     } else {
  //       this.messageList=JSON.parse(data as any as string);
  //     }
  //   })
  // }

  // write(){
  //   const stringMessageIdMap=JSON.stringify(this.messageIdMap);
  //   fs.writeFile(messageIdMapPath,stringMessageIdMap,()=>{});

  //   const stringMessageList=JSON.stringify(this.messageList);
  //   fs.writeFile(messageListPath,stringMessageList,()=>{});
  //   this.read();
  // }

  findMessageId(user1Id:UserId, user2Id:UserId):string{
    const option1 = [user1Id, user2Id].join("-");
    if (this.messageIdMap[option1]) {
      return this.messageIdMap[option1];
    }

    const option2 = [user2Id, user1Id].join("-");
    if (this.messageIdMap[option2]) {
      return this.messageIdMap[option2];
    }

    const generatedId = JSON.stringify(uuidv4());
    this.messageIdMap[option1]=generatedId;
    return generatedId;
  }

  getMessageList(user1Id:UserId, user2Id:UserId) {
    const messageId = this.findMessageId(user1Id, user2Id);
    if(!this.messageList[messageId]){
      this.messageList[messageId]=[];
    }
    return this.messageList[messageId];
  }

  addMessage(user1Id:UserId, user2Id:UserId, message:Message) {
    const messageId = this.findMessageId(user1Id, user2Id);
    if (!this.messageList[messageId]) {
      this.messageList[messageId]=[];
    }
    this.messageList[messageId].push(message);
  }
}

const Controller = new DirectMessageController();
export default Controller;
