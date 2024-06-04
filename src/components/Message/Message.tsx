import { User } from "../MessageThread/MessageThread";

type MessageProps = {
  user: User;
  sameUserAsPrev?: boolean;
};

const Message = ({ user, sameUserAsPrev }: MessageProps) => {
  if (user.sender) {
    if (sameUserAsPrev) {
      return (
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full"></div>
          </div>
          <div className="chat-bubble bg-[#D9D9D9] text-black text-left">
            {user.message}
          </div>
        </div>
      );
    }
    return (
      <div className="chat chat-end">
        <div className="chat-image avatar flex flex-col items-center">
          <div className="chat-header h-[20px] w-full">{user.name}</div>
          <div className="w-10 rounded-full">
            <img alt={user.name} src={user.image} />
          </div>
        </div>
        <div className="chat-bubble bg-[#D9D9D9] text-black text-left">
          {user.message}
        </div>
      </div>
    );
  }
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar flex flex-col items-center">
        <div className="chat-header h-[20px] w-full">{user.name}</div>
        <div className="w-10 rounded-full">
          <img alt={user.name} src={user.image} />
        </div>
      </div>
      <div className="chat-bubble bg-[#74C2FF] text-black text-left">
        {user.message}
      </div>
    </div>
  );
};

export default Message;
