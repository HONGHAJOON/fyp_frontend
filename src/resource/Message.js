import React, { useState } from "react";
import "../css/Message.css";
import { formatDate, formatDay, formatTime, isNewDate } from "./DateUtils";

const Message = ({ onClose }) => {
  const [position, setPosition] = useState({ top: 200, left: 400 }); // 초기 위치
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const [conversations, setConversations] = useState({
    user1: {
      profileImage: "../icon/how3.jpg",
      messages: [
        { id: 1, sender: "me", text: "안녕하세요!", createdAt: "2025-01-14T10:30:00Z" },
        { id: 2, sender: "user1", text: "네, 안녕하세요!", createdAt: "2025-01-14T10:35:00Z" },
      ],
    },
    user2: {
      profileImage: "../icon/how4.jpg",
      messages: [
        { id: 1, sender: "user2", text: "프로젝트 진행은 어떻게 되고 있나요?", createdAt: "2024-12-31T08:20:00Z" },
        { id: 2, sender: "me", text: "잘 진행 중이에요! 그런데 메세지가 생각보다 제가 너무 공을 들여서 조금 열받아요 왜 안되는거지 이거 축약시켜야 할듯? 길게 보내면 ... 처리를 해줘야", createdAt: "2024-12-31T09:45:00Z" },
      ],
    },
  });

  const [selectedUser, setSelectedUser] = useState(null); // 선택된 수신인

  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.left,
      y: e.clientY - position.top,
    });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        top: e.clientY - offset.y,
        left: e.clientX - offset.x,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleUserSelect = (userId) => {
    setSelectedUser(userId); // 선택된 수신인 설정
  };

  const handleSendMessage = (text) => {
    if (text.trim() === "") return;

    const now = new Date().toISOString();

    setConversations((prev) => ({
      ...prev,
      [selectedUser]: {
        ...prev[selectedUser],
        messages: [
          ...prev[selectedUser].messages,
          { id: Date.now(), sender: "me", text, createdAt: now },
        ],
      },
    }));
  };

  return (
    <div
      className="message-modal"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="message-header"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{ cursor: "move" }}
      >
        {selectedUser ? (
          <>
            <img
                src="../icon/arrow-2.png"
                alt="뒤로가기"
                className="back-button"
                onClick={() => setSelectedUser(null)} // 뒤로가기 클릭 시 수신인 선택 화면으로 이동
            />
            <div className="header-profile">
                <img
                src={conversations[selectedUser]?.profileImage}
                alt={`${selectedUser} profile`}
                className="header-profile-image"
                />
                <div className="header-user-name">{selectedUser}</div>
                </div>
          </>
        ) : (
          <h3 style={{ marginLeft: "10px" }}>Messages</h3>
        )}
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      </div>
      {!selectedUser ? ( // 수신인 선택 화면
        <div className="user-selection">
          {Object.keys(conversations).map((userId) => {
            const lastMessage =
              conversations[userId].messages[conversations[userId].messages.length - 1];
            const lastMessageTime = lastMessage
              ? formatDate(lastMessage.createdAt)
              : null;

            return (
              <div
                key={userId}
                className="user-item"
                onClick={() => handleUserSelect(userId)}
              >
                <div className="user-message">
                    <div className="user-profile">
                        <img
                        src={conversations[userId].profileImage}
                        alt={`${userId} profile`}
                        className="profile-image"
                        />
                    </div>
                    <div className="message-preview">
                      <div className="user-name">{userId}</div>
                      <div className="last-message">{lastMessage.text || "대화를 시작하세요"}</div>
                    </div>
                    {lastMessageTime && (
                      <div className="last-message-time">{lastMessageTime}</div>
                      )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="message-body">
          <div className="message-list">
            {conversations[selectedUser].messages?.map((message, index, array) => {
              const showDate =
                index === 0 ||
                isNewDate(array[index - 1]?.createdAt, message.createdAt);

              return (
                <React.Fragment key={message.id}>
                  {showDate && (
                    <div className="message-date">
                      {formatDay(message.createdAt)}
                    </div>
                  )}
                  <div
                    className={`message-container ${
                        message.sender === "me" ? "my-message-container" : "their-message-container"
                    }`}
                    >
                    {message.sender === "me" && (
                        <div className="message-time">{formatTime(message.createdAt)}</div>
                    )}
                    <div
                        className={`message-item ${
                        message.sender === "me" ? "my-message" : "their-message"
                        }`}
                    >
                        {message.text}
                    </div>
                    {message.sender !== "me" && (
                        <div className="message-time">{formatTime(message.createdAt)}</div>
                    )}    
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          <div className="message-input">
            <input
              type="text"
              placeholder="메시지를 입력하세요..."
              className="message-input-field"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage(e.target.value);
                  e.target.value = "";
                }
              }}
            />
            <button
              className="send-button"
              onClick={() => {
                const input = document.querySelector(".message-input-field");
                handleSendMessage(input.value);
                input.value = "";
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
