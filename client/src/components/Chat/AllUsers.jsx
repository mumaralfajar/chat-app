import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

const AllUsers = () => {
  const { user } = useContext(AuthContext);
  const { potentialChats, createChat } = useContext(ChatContext);
  const { onlineUsers } = useContext(ChatContext);

  return (
    <div className="all-users">
      {potentialChats?.map((receiver) => (
        <div
          className="single-user"
          key={receiver._id}
          onClick={() => createChat(user?._id, receiver?._id)}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          {receiver.name}
          <span
            className={
              onlineUsers?.some((user) => user?.userId === receiver?._id)
                ? "user-online"
                : ""
            }
          ></span>
        </div>
      ))}
    </div>
  );
};

export default AllUsers;
