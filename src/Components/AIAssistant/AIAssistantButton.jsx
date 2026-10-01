import React, { useState, useRef, useEffect } from "react";
import { BsStars } from "react-icons/bs";
import { FiX, FiArrowRight } from "react-icons/fi";
import "./AIAssistantButton.css";

const API_URL = import.meta.env.VITE_API_URL;;

function AIAssistantButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatBodyRef = useRef(null);

  const suggestedPrompts = [
    "Tell about Karthick",
    "What projects has Karthick built?",
    "What is his tech stack?",
    "Why should we hire Karthick?",
  ];

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (text) => {
    const messageToSend = (text || query).trim();
    if (!messageToSend || isLoading) return;

    setMessages((prev) => [...prev, { role: "user", content: messageToSend }]);
    setQuery("");
    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: messageToSend }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to get AI response");

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.answer || "I couldn't generate a response right now." },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I'm unable to reach the AI assistant right now. Please try again later." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ai-assistant-widget">
      {isOpen && (
        <div className="ai-chat-modal">
          <div className="ai-modal-glow-border"></div>
          <div className="ai-modal-header">
            <div className="ai-header-profile">
              <div className="ai-neural-avatar">
                <span className="neural-core"></span>
                <span className="neural-ring"></span>
              </div>
              <div className="ai-header-info">
                <h3>Karthick's AI Assistant</h3>
                <span className="ai-status">
                  <span className="status-dot-live"></span> RAG + Gemini
                </span>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="ai-modal-body" ref={chatBodyRef}>
            <div className="ai-welcome-box">
              <p>Hi! I'm Karthick's AI portfolio assistant ✨</p>
              <span>Ask me anything about his skills, projects, or background.</span>
            </div>

            <div className="ai-suggested-section">
              <span className="ai-suggested-label">SUGGESTED PROMPTS</span>
              <div className="ai-suggested-list">
                {suggestedPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    className="ai-suggestion-pill"
                    onClick={() => handleSend(prompt)}
                    disabled={isLoading}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {messages.map((message, index) => (
              <div
                key={index}
                className={message.role === "user" ? "ai-user-message" : "ai-assistant-message"}
              >
                {message.content}
              </div>
            ))}

            {isLoading && (
              <div className="ai-assistant-message typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>

          <div className="ai-modal-footer">
            <input
              type="text"
              placeholder="Ask about Karthick..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="ai-chat-input"
              disabled={isLoading}
            />
            <button
              className="ai-send-btn"
              onClick={() => handleSend()}
              aria-label="Send query"
              disabled={isLoading || !query.trim()}
            >
              <FiArrowRight />
            </button>
          </div>
        </div>
      )}

      <button
        className="global-ai-btn"
        aria-label="Ask AI Assistant"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="ai-btn-glow" />
        {isOpen ? <FiX className="ai-btn-icon" /> : <BsStars className="ai-btn-icon" />}
      </button>
    </div>
  );
}

export default AIAssistantButton;