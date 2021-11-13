import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";
import "./Chat.css";
import NavBar from "./NavBar";

function ChatPage() {
  // 실시간 데이터값
  const [Name, setName] = useState("");
  const [Message, setMessage] = useState("");
  const [Chat, setChat] = useState([]);
  // 서버 db 고정값
  const [UserName, setUserName] = useState("");
  const [UserProfile, setUserProfile] = useState("");
  const socket = io.connect("http://localhost:5050");

  // 로그인한 유저의 아이디 ,정보등을 받아서 name에 각각 넣어주기
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}`, { withCredentials: true })
      .then(res => {
        console.log(res.data);
        if (res.data.user && res.data.user.name) {
          setUserName(res.data.user.name);
          setUserProfile(res.data.user.image);
          setName(res.data.user.name);
        } else if (res.data.user && res.data.user.companyName) {
          setUserName(res.data.user.companyName);
          setUserProfile(res.data.user.logo);
          setName(res.data.user.companyName);
        }
      });
  }, []);
  // 로그인한 유저의 아이디 ,정보등을 받아서 name에 각각 넣어주기

  // 엔터키 이벤트 추가
  function enterkey(e) {
    if (e.key == "Enter") {
      // 엔터키가 눌렸을 때
      onMessageSubmit();
    }
  }
  // 엔터키 이벤트 추가

  // 채팅
  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id); //socket이 부여해주는 고유 id
    });
    socket.on("chatting", ({ name, message, time }) => {
      // 서버에서 emit으로 보낸 데이터를 받는것
      // console.log(name,message,time)
      let newChat = [...Chat];
      newChat.push({ name, message, time });
      setChat(newChat);
    });
  }, [Chat]);

  const onMessageSubmit = () => {
    const name = Name;
    const message = Message;
    console.log(name, message);
    socket.emit("chatting", { name, message });
    // 클라이언트에서 서버로 보내는것
    setMessage("");
  };

  const MessageHandler = e => {
    setMessage(e.target.value);
  };
  // 채팅

  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="user-container">
          <label for="nickname">사용자 명</label>
          <span>{UserName}</span>
        </div>
        <div className="display-container">
          <span>{UserName}님이 입장하셨습니다.</span>

          {Chat.map((data, index) => (
            <ul
              key={index}
              className={
                data.name === UserName ? "sent chatting-list" : "chatting-list"
              }
            >
              <li>
                <span className="profile">
                  <span className="user">{data.name}</span>
                  <img className="image" src={UserProfile} alt="profile" />
                </span>
                <span className="message">{data.message}</span>
                <span className="time">{data.time}</span>
              </li>
            </ul>
          ))}
        </div>
        <div className="input-container">
          <span>
            <input
              type="text"
              className="chatting-input"
              value={Message}
              onChange={MessageHandler}
              onKeyPress={enterkey}
            />
            <button
              className="send-button"
              type="button"
              onClick={onMessageSubmit}
            >
              전송
            </button>
          </span>
        </div>
      </div>
      {/* <div>
           <div>
             <label>대화명</label>
             {UserName}
           </div>
           <div>
             <div></div>
           </div>
           <div>
             <span>
    
               <input

                  type="text"
                  className="chatting-input" 
                  value={Message} 
                  onChange={MessageHandler} 
                /> 
               <button className="send-button" type="submit">
                 메세지 보내기
               </button>
             </span>
           </div>
         </div>

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
                 alignItems: "center",
                 width: "100%",
               }}
               className={a.name === UserName ? "sent" : ""}
             >
              <span>{a.name}</span> 
              <span>{a.message}</span> 
              <span>{a.time}</span> 
            </div> 
           ))}
        </div> 
      </div> 
    </div>  */}
    </>
  );
}

export default ChatPage;
