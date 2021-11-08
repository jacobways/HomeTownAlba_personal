import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";

function ChatPage() {
  const [Name, setName] = useState("");
  const [Message, setMessage] = useState("");
  const [Chat, setChat] = useState([]);
  const [UserName, setUserName] = useState("");
  const socket = io.connect("http://localhost:5001");

  // 로그인한 유저의 아이디 ,정보등을 받아서 name에 각각 넣어주기
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}`, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        if (res.data.user && res.data.user.name) {
          setUserName(res.data.user.name);
          setName(res.data.user.name);
        } else if (res.data.user && res.data.user.companyName) {
          setUserName(res.data.user.companyName);
          setName(res.data.user.companyName);
        }
      });
  }, []);
  // 로그인한 유저의 아이디 ,정보등을 받아서 name에 각각 넣어주기

  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id); //socket이 부여해주는 고유 id
    });
    socket.on("message", ({ name, message }) => {
      console.log(message);
      setChat([...Chat, { name, message }]);
    });
  }, [Chat]);

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const name = Name;
    const message = Message;
    // console.log(name, message);
    socket.emit("message", { name, message });
    setMessage("");
  };

  const MessageHandler = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onMessageSubmit}>
        <h1>메신저</h1>
        <div>사용자명 : {UserName}</div>
        <div>
          <input
            type="text"
            name="message"
            value={Message}
            onChange={MessageHandler}
            style={{ width: "15rem" }}
            placeholder="보내고 싶은 내용을 자유롭게 입력하세요"
          />
        </div>
        <button type="submit">메세지 보내기</button>
      </form>

      <div>
        <h1>채팅 내용</h1>
        <div
          style={{
            margin: "2rem",
            padding: "2rem",
            width: "30rem",
            height: "auto",
            backgroundColor: "#677BAC",
            color: "white",
          }}
        >
          {Chat.map((a, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <h4 style={{ marginRight: "0.5rem" }}>{a.name}</h4>
              <h5>{a.message}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
