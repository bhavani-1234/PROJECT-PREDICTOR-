import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import pwcLogo from './assets/pwc-logo.png';
import BarChart from './BarChart';
import LineGraph from './LineGraph';
import PieChart from './PieChart';

function App() {
  const [conversations, setConversations] = useState([]);
  const [currentConversationIndex, setCurrentConversationIndex] = useState(null);
  const [newConversationTitle, setNewConversationTitle] = useState(""); // For conversation title
  const [newConversationDescription, setNewConversationDescription] = useState(""); // For conversation description
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [messageText, setMessageText] = useState(""); // For typing messages
  const [showDialog, setShowDialog] = useState(false); // State to show/hide the dialog prompt
  const [charts, setCharts] = useState([]);
  const [currentOpenedChart, setCurrentOpenedChart] = useState(null);

  const messageEndRef = useRef(null); // Reference for the last message container

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

    setError("");

    const conversationData = {
      title: newConversationTitle,
      description: newConversationDescription, // Description is optional
      messages: []  // No messages initially
    };

    try {
      setConversations([...conversations, conversationData]);
      setCurrentConversationIndex(conversations.length);  // Set the first conversation as selected
      handleDialogClose(); // Close dialog on success
    } catch (err) {
      setError("Error connecting to server.");
    }
  };

  const handleConversationClick = (index) => {
    setCurrentConversationIndex(index);
  };

  // Function to send a message
  const handleSendMessage = async () => {
    try {
      setLoading(true);
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
      const response = await fetch("http://localhost:3002/api/start-conversation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentConversation.messages),
      });

      const jsonResult = await response.json();
      const result = JSON.parse(jsonResult.suggestion);
      const chartType = result?.data?.chart_type || '';
      let messageToPush;
      if(chartType){
        messageToPush = `${chartType} ${charts.length + 1}`;
        setCharts([...charts, { name : `${chartType} ${charts.length + 1}` , data : result.data.chart_data, chartType }]);
      }else{
        messageToPush = result.suggestion;
      }
      currentConversation.messages.push({ text: messageToPush, isUser: false, chartType }); 

      setConversations(updatedConversations);
      setMessageText("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversations, currentConversationIndex]);

  const handleMessageClick = (message) => {
    console.log('clicked',message);
    if(message.chartType){
      const chartData = charts.find(chart => chart.name === message.text);
      chartData && setCurrentOpenedChart(chartData);
    }
  };

  return (
    <div>
      <header>
        <img src={pwcLogo} alt="PwC Logo" className="pwc-logo" />
        <button className="start-conversation-btn" onClick={handleDialogOpen}>
          Start New Conversation
        </button>
      </header>

      <div className="container">

        <div className="sidebar">
          <h2 className="sidebar-title">Conversations</h2>
          <div className="conversation-tabs">
            {conversations.map((conversation, index) => (
              <div
                key={index}
                className={`tab ${currentConversationIndex === index ? 'active' : ''}`}
                onClick={() => handleConversationClick(index)}
              >
                {conversation.title}
              </div>
            ))}
          </div>
        </div>

        <div className="content">
          <div className="conversation-container">
            {currentConversationIndex !== null ? (
              <>
                <div className="conversation-messages">
                  {conversations[currentConversationIndex].messages.length > 0 ? (
                    conversations[currentConversationIndex].messages.map((message, idx) => (
                      <div key={idx} className={`message ${message.isUser ? 'user' : 'response'}`} onClick={() => {handleMessageClick(message)}}>
                        {message.text}
                      </div>
                    ))
                  ) : (
                    <p className="paragraph-styling">Conversation not yet started.</p>
                  )}
                  <div ref={messageEndRef} />
                </div>


                <div className="input-area">
                  <textarea
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Type your message..."
                  ></textarea>
                  <button onClick={handleSendMessage} disabled={loading}>
                    {loading ? "Requesting..." : `Request AI`}
                  </button>
                </div>
              </>
            ): (<p className='paragraph-styling'>Interact with our AI Intelligence by Starting a New Conversation</p>)}
          </div>
        </div>
      </div>


      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-content">
            <h2>Create New Conversation</h2>
            <input
              type="text"
              value={newConversationTitle}
              onChange={(e) => setNewConversationTitle(e.target.value)}
              placeholder="Enter conversation title (max 60 chars)"
              maxLength="60"
            />
            <textarea
              value={newConversationDescription}
              onChange={(e) => setNewConversationDescription(e.target.value)}
              placeholder="Enter conversation description (optional)"
              maxLength="2000"
            ></textarea>
            {error && <div className="error-message">{error}</div>}
            <button className="start-btn" onClick={startNewConversation} disabled={loading}>
              {loading ? "Creating..." : "Start Conversation"}
            </button>
            <button className="cancel-btn" onClick={handleDialogClose}>Cancel</button>
          </div>
        </div>
      )}

{currentOpenedChart && (
        <div className="dialog-overlay">
          <div className="dialog-content">
            {
              currentOpenedChart.chartType === 'bar chart' && <BarChart data={currentOpenedChart.data} handleClose={()=>setCurrentOpenedChart(null)}/>
            }{
              currentOpenedChart.chartType === 'line graph' && <LineGraph data={currentOpenedChart.data} handleClose={()=>setCurrentOpenedChart(null)}/>
            }{
              currentOpenedChart.chartType === 'pie chart' && <PieChart data={currentOpenedChart.data} handleClose={()=>setCurrentOpenedChart(null)}/>
            }
            </div>
        </div>
      )}
    </div>
  );
}

export default App;
