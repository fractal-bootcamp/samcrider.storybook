import Message from "../Message/Message";
import s from "./styles.module.css";

export type User = {
  sender: boolean;
  name: string;
  message: string;
  image: string;
  id: number;
};

const messages: User[] = [
  {
    sender: true,
    name: "sam",
    message:
      "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
    image: "/criderSelfie.PNG",
    id: 0,
  },
  {
    sender: true,
    name: "sam",
    message:
      "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
    image: "/criderSelfie.PNG",
    id: 1,
  },
  {
    sender: true,
    name: "sam",
    message:
      "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
    image: "/criderSelfie.PNG",
    id: 3,
  },
  {
    sender: false,
    name: "aiden",
    message:
      "I've decided to take up a new hobby and start learning how to play the piano. It's something I've always wanted to do, and I finally signed up for lessons. The first few sessions have been challenging, but I love the feeling of progress with each practice.",
    image: "/thoughts.PNG",
    id: 2,
  },
];

const sortedMessages = messages.sort((a, b) => a.id - b.id);

const MessageThread = () => {
  return (
    <div className={s.messageContainer}>
      {sortedMessages.map((message, index) => {
        if (index > 0) {
          const sameUserAsPrev =
            message.name === sortedMessages[index - 1].name ? true : false;
          return (
            <Message
              key={message.id}
              user={message}
              sameUserAsPrev={sameUserAsPrev}
            />
          );
        }

        return <Message key={message.id} user={message} />;
      })}
    </div>
  );
};

export default MessageThread;
