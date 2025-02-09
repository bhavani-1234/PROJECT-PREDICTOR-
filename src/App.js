import React, { useState } from 'react';
import './App.css';
import pwcLogo from './assets/pwc-logo.png';

function App() {
  const [conversations, setConversations] = useState([]);
  const [currentConversationIndex, setCurrentConversationIndex] = useState(null);
  const [newConversationTitle, setNewConversationTitle] = useState(""); // For conversation title
  const [newConversationDescription, setNewConversationDescription] = useState(""); // For conversation description
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [messageText, setMessageText] = useState(""); // For typing messages
  const [showDialog, setShowDialog] = useState(false); // State to show/hide the dialog prompt

  const resetConversation = () => {
    setNewConversationTitle("");
    setNewConversationDescription("");
    setError("");
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    resetConversation();
  };

  const handleDialogOpen = () => {
    setShowDialog(true);
  };

  const startNewConversation = async () => {
    if (!newConversationTitle.trim()) {
      setError("Please provide a title to start the conversation.");
      return;
    }

    setLoading(true);
    setError("");

    const conversationData = {
      title: newConversationTitle,
      description: newConversationDescription, // Description is optional
      messages: []  // No messages initially
    };

    try {
      const response = await fetch("http://localhost:3001/api/start-conversation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(conversationData)
      });

      const result = await response.json();

      if (response.ok) {
        setConversations([...conversations, conversationData]);
        setCurrentConversationIndex(conversations.length);  // Set the first conversation as selected
        handleDialogClose(); // Close dialog on success
      } else {
        setError(result.message || "Failed to start conversation.");
      }
    } catch (err) {
      setError("Error connecting to server.");
    }

    setLoading(false);
  };

  const handleConversationClick = (index) => {
    setCurrentConversationIndex(index);
  };

  // Function to send a message
  const handleSendMessage = () => {
    if (!messageText.trim()) {
      return; // Don't send if the message is empty
    }

    if (currentConversationIndex === null || !conversations[currentConversationIndex]) {
      setError("Please select or start a conversation before sending a message.");
      return;
    }

    const updatedConversations = [...conversations];
    const currentConversation = updatedConversations[currentConversationIndex];

    // Add the user's message
    currentConversation.messages.push({ text: messageText, isUser: true });

    // Example of adding a response (you can customize the response logic)
    currentConversation.messages.push({ text: "This is a response from the system.", isUser: false });

    setConversations(updatedConversations);
    setMessageText("");  // Clear the input field
  };

  return (
    <div>
      <header>
        <img src={pwcLogo} alt="PwC Logo" className="pwc-logo" />
        <button className="start-conversation-btn" onClick={handleDialogOpen}>
          Create New Conversation
        </button>
      </header>

      <div className="container">
        {/* Left Sidebar with Tabs for Conversations (20%) */}
        <div className="sidebar">
  <h2 className="sidebar-title">All Conversations</h2> {/* Title added here */}
  <div className="conversation-tabs">
    {conversations.map((conversation, index) => (
      <div
        key={index}
        className={`tab ${currentConversationIndex === index ? 'active' : ''}`}
        onClick={() => handleConversationClick(index)}
      >
        {conversation.title} {/* Show only the title in the left panel */}
      </div>
    ))}
  </div>
</div>

        {/* Right Content Area (80%) */}
        <div className="content">
          <div className="conversation-container">
            {currentConversationIndex !== null && (
              <>
                <h2>Conversation: {conversations[currentConversationIndex].title}</h2>
                <p>{conversations[currentConversationIndex].description}</p> {/* Show the description at the top */}
                <div className="conversation-messages">
                  {conversations[currentConversationIndex].messages.length > 0 ? (
                    conversations[currentConversationIndex].messages.map((message, idx) => (
                      <div key={idx} className={`message ${message.isUser ? 'user' : 'response'}`}>
                        {message.text}
                      </div>
                    ))
                  ) : (
                    <p>No messages in this conversation yet.</p>
                  )}
                </div>

                {/* Message Input Area appears only after starting a conversation */}
                <div className="input-area">
                  <textarea
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Type your message..."
                  ></textarea>
                  <button onClick={handleSendMessage} disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Dialog for Creating New Conversation */}
      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-content">
            <h2>Create New Conversation</h2>
            <input
              type="text"
              value={newConversationTitle}
              onChange={(e) => setNewConversationTitle(e.target.value)}
              placeholder="Enter conversation title (max 60 chars)"
              maxLength="60" // Limit to 60 characters
            />
            <textarea
              value={newConversationDescription}
              onChange={(e) => setNewConversationDescription(e.target.value)}
              placeholder="Enter conversation description (optional)"
              maxLength="2000" // Limit to 2000 characters
            ></textarea>
            {error && <div className="error-message">{error}</div>}
            <button onClick={startNewConversation} disabled={loading}>
              {loading ? "Creating..." : "Start Conversation"}
            </button>
            <button className="cancel-btn" onClick={handleDialogClose}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
