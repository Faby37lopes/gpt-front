import React from "react";
import "./ChatMessage.css";

const ChatMessage = ({ message, isUser }) => {
  return (
    <div className={`chat-message ${isUser ? "user" : "bot"}`}>
      <div className="bubble">{message}</div>
    </div>
  );
};

export default ChatMessage;
