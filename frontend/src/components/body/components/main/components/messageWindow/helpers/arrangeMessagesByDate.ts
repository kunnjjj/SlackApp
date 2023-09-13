import { Message } from "../../../../../types/message";
import { isCurrentTimestampNewDay } from "./isCurrentTimestampNewDay";

const arrangeMessagesByDate = (messages: Message[]): Array<Message[]> => {
  if (!messages) return [];
  return messages.reduce((accumulator: Array<Message[]>, message, index) => {
    if (
      index === 0 ||
      isCurrentTimestampNewDay(
        messages[index].timestamp,
        messages[index - 1].timestamp
      )
    ) {
      accumulator.push([]);
    }

    accumulator[accumulator.length - 1].push(message);
    return accumulator;
  }, []);
};

export { arrangeMessagesByDate };
