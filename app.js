const backendBaseUrl = "https://chatterbox-backend.vercel.app/api";
const socket = io('https://chatterbox-backend.vercel.app'); // updated socket connection

function App() {
  // Authentication state
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [error, setError] = React.useState('');

  // DM-related state
  const [dmConversations, setDmConversations] = React.useState({}); // { partner: [messages] }
  const [selectedConversation, setSelectedConversation] = React.useState(null);
  const [messageInput, setMessageInput] = React.useState('');

  // New DM form state
  const [newDMRecipient, setNewDMRecipient] = React.useState('');

  // Active tab: "messages" or "newDM"
  const [activeTab, setActiveTab] = React.useState('messages');

  // Refs for scrolling messages area
  const messagesEndRef = React.useRef(null);
  const messagesContainerRef = React.useRef(null);

  // Add manual scroll functions
  const handleScrollUp = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollBy({ top: -100, behavior: 'smooth' });
    }
  };

  const handleScrollDown = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollBy({ top: 100, behavior: 'smooth' });
    }
  };

  // Fetch DM list upon login
  React.useEffect(() => {
    if (loggedIn && username) {
      socket.emit('registerUser', username);
      axios.get(`${backendBaseUrl}/dmList`, { params: { user: username } })
        .then(response => {
          setDmConversations(prev => {
            const convs = { ...prev };
            response.data.forEach(partner => {
              if (!convs[partner]) {
                convs[partner] = [];
              }
            });
            return convs;
          });
        })
        .catch(err => console.error("Error fetching DM list", err));
    }
  }, [loggedIn, username]);

  // Fetch conversation history when a conversation is selected
  React.useEffect(() => {
    if (selectedConversation && username) {
      axios.get(`${backendBaseUrl}/messages`, {
        params: { user1: username, user2: selectedConversation }
      })
        .then(response => {
          setDmConversations(prev => ({
            ...prev,
            [selectedConversation]: response.data
          }));
        })
        .catch(error => console.error('Error fetching conversation:', error));
    }
  }, [selectedConversation, username]);

  // Auto-scroll logic (only if user is near the bottom)
  React.useEffect(() => {
    if (!selectedConversation) return;
    const container = messagesContainerRef.current;
    if (container && messagesEndRef.current) {
      const isUserNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 50;
      if (isUserNearBottom) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [dmConversations, selectedConversation]);

  // Listen for incoming messages via socket
  React.useEffect(() => {
    socket.on('receiveMessage', (data) => {
      if (data.sender === username || data.recipient === username) {
        const partner = data.sender === username ? data.recipient : data.sender;
        setDmConversations(prev => {
          const conv = prev[partner] ? [...prev[partner]] : [];
          conv.push(data);
          return { ...prev, [partner]: conv };
        });
      }
    });
    return () => {
      socket.off('receiveMessage');
    };
  }, [loggedIn, username]);

  const handleRegister = () => {
    axios.post(`${backendBaseUrl}/register`, { username, email, password })
      .then(response => alert(response.data.message))
      .catch(err => setError(err.response?.data?.error || 'Registration error'));
  };

  const handleLogin = () => {
    axios.post(`${backendBaseUrl}/login`, { email, password })
      .then(response => {
        setToken(response.data.token);
        setLoggedIn(true);
        alert(response.data.message);
        socket.emit('registerUser', username);
      })
      .catch(err => setError(err.response?.data?.message || 'Login error'));
  };

  const handleSendMessage = () => {
    if (!selectedConversation) {
      alert("Select a conversation first");
      return;
    }
    if (messageInput.trim() !== '') {
      const dmData = { sender: username, recipient: selectedConversation, message: messageInput };
      socket.emit('sendMessage', dmData);
      setMessageInput('');
    }
  };

  const handleStartNewDM = () => {
    if (newDMRecipient.trim() !== '') {
      if (!dmConversations[newDMRecipient]) {
        setDmConversations(prev => ({ ...prev, [newDMRecipient]: [] }));
      }
      setSelectedConversation(newDMRecipient);
      setActiveTab('messages');
      setNewDMRecipient('');
    }
  };

  // If not logged in, show registration/login overlay
  if (!loggedIn) {
    return (
      <div id="register-section">
        <div className="register-card">
          <h2>Chatterbox</h2>
          {error && <div className="error">{error}</div>}
          <input 
            id="username"
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <input 
            id="email"
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            id="password"
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button className="register-button" onClick={handleRegister}>Register</button>
          <button className="register-button" onClick={handleLogin}>Login</button>
        </div>
      </div>
    );
  }

  // Main UI
  return (
    <div id="app">
      {/* Sidebar */}
      <div id="sidebar">
        <div className="brand">
          <i className="icon">💬</i>
          <h2>Chatterbox</h2>
        </div>
        <div id="dm-list">
          <div className="section-title">Direct Messages</div>
          {Object.keys(dmConversations).map((partner) => (
            <div 
              key={partner} 
              className={`dm-user ${selectedConversation === partner ? 'active' : ''}`}
              onClick={() => setSelectedConversation(partner)}
            >
              <div className="user-avatar">{partner.charAt(0).toUpperCase()}</div>
              <span>{partner}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Area */}
      <div id="main">
        <div id="tabs">
          <button 
            className={activeTab === 'messages' ? 'active' : ''} 
            onClick={() => setActiveTab('messages')}
          >
            Messages
          </button>
          <button 
            className={activeTab === 'newDM' ? 'active' : ''} 
            onClick={() => setActiveTab('newDM')}
          >
            New DM
          </button>
        </div>

        {/* Messages Section */}
        <div id="messages-section" className={activeTab === 'messages' ? 'active' : ''}>
          <div id="chat-header">
            <div className="current-user">
              <div className="user-avatar">{selectedConversation ? selectedConversation.charAt(0).toUpperCase() : '?'}</div>
              <div className="user-info">
                <h3>{selectedConversation || 'No Conversation Selected'}</h3>
                {selectedConversation && <p>Chatting with {selectedConversation}</p>}
              </div>
            </div>
          </div>
          {/* Manual Scroll Controls */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0.5rem 1rem', gap: '0.5rem' }}>
            <button onClick={handleScrollUp}>↑</button>
            <button onClick={handleScrollDown}>↓</button>
          </div>
          <div id="messages-container" ref={messagesContainerRef}>
            <div id="messages">
              {selectedConversation && dmConversations[selectedConversation] && dmConversations[selectedConversation].length > 0 ? (
                dmConversations[selectedConversation].map((msg, index) => (
                  <div key={index} className={`message ${msg.sender === username ? 'sent' : 'received'}`}>
                    <div className="message-header">{msg.sender}</div>
                    <div className="message-body">{msg.message}</div>
                  </div>
                ))
              ) : (
                <div style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-secondary)' }}>
                  No messages yet.
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          <div id="message-input">
            <div className="input-wrapper">
              <input 
                id="currentMessage"
                type="text" 
                placeholder="Type a message" 
                value={messageInput} 
                onChange={(e) => setMessageInput(e.target.value)} 
              />
              <button className="send-button" onClick={handleSendMessage}>
                Send
              </button>
            </div>
          </div>
        </div>

        {/* New DM Section */}
        <div id="dm-section" className={activeTab === 'newDM' ? 'active' : ''}>
          <div className="send-dm-wrapper">
            <input 
              type="text" 
              placeholder="Recipient's username" 
              value={newDMRecipient} 
              onChange={(e) => setNewDMRecipient(e.target.value)} 
            />
            <button onClick={handleStartNewDM}>Start DM</button>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
