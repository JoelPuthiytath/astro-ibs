// src/components/search/Chat.jsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { formatAnswerAndRender } from "../../utils/FormatAnswer.jsx";  // adjust extension
import ContactInfo from "../contactUs/contactUs.jsx";               // adjust path
import "../../styles/SmartSearch.css";
import "../../styles/Chat.css";

export default function Chat({ onClose, initialInput = "" }) {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState(initialInput);
  const [isLoading, setIsLoading] = useState(false);
  const [doneTyping, setDoneTyping] = useState(true);
  const convHistoryRef = useRef([]);

  // Send the initial message on mount if provided
  useEffect(() => {
    if (initialInput) {
      sendMessage(initialInput);
    }
  }, []);

  // Helper to sanitize user text
  const sanitizeInput = (input) => input.replace(/<[^>]*>?/gm, "");

  // Core send logic
  const sendMessage = async (overrideText) => {
    const text = overrideText ?? userInput.trim();
    if (!text || !doneTyping) return;

    // Add user message
    const userMsg = { id: Date.now() + "_u", text, sender: "user" };
    setMessages((m) => [...m, userMsg]);
    convHistoryRef.current.push(userMsg);
    setUserInput("");
    setIsLoading(true);
    setDoneTyping(false);

    try {
      const res = await fetch("https://fulcro-smartsearch.allsocialassets.com/api/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: text,
          conv_history: convHistoryRef.current,
        }),
      });

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let botText = "";
      const botId = Date.now() + "_b";

      // As chunks arrive, update a “bot is typing” placeholder
      setMessages((m) => [
        ...m,
        { id: botId, text: "", sender: "bot", streaming: true },
      ]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        botText += decoder.decode(value, { stream: true });
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botId ? { ...msg, text: botText } : msg
          )
        );
      }

      // Finalize
      setDoneTyping(true);
      setIsLoading(false);
      convHistoryRef.current.push({ id: botId, text: botText, sender: "bot" });
    } catch (err) {
      console.error(err);
      setMessages((m) => [
        ...m,
        { id: Date.now() + "_err", text: "Error—please try again.", sender: "bot" },
      ]);
      setDoneTyping(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <img src="/images/smartsearch/logo.png" alt="logo" className="logo" />
        <button onClick={onClose} className="close-btn" aria-label="Close">
          ✕
        </button>
      </div>

      <div className="chatbot-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            {msg.sender === "bot" && <span className="bot-avatar">🤖</span>}
            <div className="message-text">
              {msg.sender === "bot"
                ? formatAnswerAndRender(msg.text)
                : msg.text}
            </div>
            {msg.sender === "bot" && doneTyping && msg.id.endsWith("_b") && (
              <ContactInfo />
            )}
          </div>
        ))}

        {isLoading && (
          <div className="message bot">
            <SkeletonTheme baseColor="#334959" highlightColor="#5f86a3">
              <Skeleton count={3} height={16} />
            </SkeletonTheme>
          </div>
        )}
      </div>

      <form
        className="chatbot-input-container"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <input
          type="text"
          className="chat-input"
          value={userInput}
          onChange={(e) => setUserInput(sanitizeInput(e.target.value))}
          placeholder="Type your message..."
          required
        />
        <button
          type="submit"
          className="submit-btn"
          aria-label="Send"
          disabled={!doneTyping}
        >
          {doneTyping ? "➤" : "⌛"}
        </button>
      </form>
    </div>
  );
}
