"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/img/images/cheeltech_logo_white1.png";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<{ sender: string; text: string }[]>([]);

  const sendMessage = async () => {
    if (!message.trim()) return;
    const userMsg = { sender: "user", text: message };
    setChat([...chat, userMsg]);
    setMessage("");

    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    setChat((prev) => [
      ...prev,
      { sender: "bot", text: data.response || "No response" },
    ]);
  };

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <div className="chat-launcher" onClick={() => setIsOpen(true)}>
          <div className="chat-launcher-bubble">Chat with us 👋</div>
             {/* <div className="chat-launcher-icon">
            💬
          </div> */}
          <i className="material-icons" >
            <svg className="chat-launcher-icon" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path>
              <path d="M0 0h24v24H0z" fill="none"></path>
            </svg>
          </i>
        </div>
      )}

      {/* Chat box */}
      {isOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <div className="gap-2 d-flex align-items-center">
           <div>
            <Image
              src={logo}
              alt="Chat Avatar"
              width={85}
              height={70}
            />
           </div>
              <div>
                <h5>Hi there 👋</h5>
                <p>CheelTech AI Assistant</p>
              </div>
              </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>

          <div className="chat-body">
            {chat.map((msg, i) => (
              <div
                key={i}
                className={`chat-msg ${msg.sender === "user" ? "user" : "bot"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              placeholder="Enter your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>➤</button>
          </div>
        </div>
      )}
    </>
  );
}
