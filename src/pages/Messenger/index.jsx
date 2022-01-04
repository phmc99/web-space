import { ChatBox, ChatColumn, FriendColumn, NoChat } from "./style";
import { useEffect, useRef, useState } from "react";
import { useUser } from "../../providers/User";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

import api from "../../services/";
import ChatCard from "../../components/ChatCard";
import ChatMessage from "../../components/ChatMessage";
import Header from "../../components/Header";
import ChatHeader from "../../components/ChatHeader";

const Messenger = () => {
  const { userInfo } = useUser();
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("@webspace:token") || "null");

  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [onlineUsers, setOnlineUsers] = useState([]);

  const socket = useRef();

  useEffect(() => {
    socket.current = io("https://web-space-socket.herokuapp.com");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        senderId: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.senderId) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    socket.current.emit("addUser", userInfo._id);
    socket.current.on("getUsers", async (users) => {
      const res = await api.get(`/user/follows/${userInfo.followList}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setOnlineUsers(
        res.data.followers.filter((f) => {
          return users.some((u) => u.userId === f._id);
        })
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, userInfo]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await api.get(`conversation/${userInfo._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setConversations(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [token, userInfo._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await api.get(`message/${currentChat?._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = {
      senderId: userInfo._id,
      text: newMessage,
      conversationId: currentChat?._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== userInfo._id
    );

    socket.current.emit("sendMessage", {
      senderId: userInfo._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await api.post("/message", message, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <ChatBox>
        <FriendColumn>
          {conversations.map((item, key) => (
            <div onClick={() => setCurrentChat(item)}>
              <ChatCard
                user={
                  item.members[0] === userInfo._id
                    ? item.members[1]
                    : item.members[0]
                }
                key={key}
              />
            </div>
          ))}
        </FriendColumn>
        {currentChat ? (
          <ChatColumn>
            <ChatHeader
              user={currentChat.members.find(
                (member) => member !== userInfo._id
              )}
            />

            <div className="chat-content">
              <div>
                {messages.map((item, key) => (
                  <ChatMessage
                    owner={item.senderId === userInfo._id}
                    data={item}
                    key={key}
                  />
                ))}
              </div>
            </div>
            <footer>
              <form onSubmit={handleSubmit}>
                <input
                  placeholder="Escreva sua mensagem..."
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                  onKeyPress={(e) => {
                    e.key === "Enter" && handleSubmit();
                  }}
                />
                <button type="submit">enviar</button>
              </form>
            </footer>
          </ChatColumn>
        ) : (
          <NoChat>
            <h2>Escolha uma conversa</h2>
          </NoChat>
        )}
      </ChatBox>
    </>
  );
};

export default Messenger;
