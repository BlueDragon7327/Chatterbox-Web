// Use your Render backend URL here:
const BACKEND_URL = "https://cb-backend-vjli.onrender.com";
      
const socket = io(BACKEND_URL);

// Utility functions to handle cookies
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays*24*60*60*1000);
  document.cookie = `${cname}=${cvalue};expires=${d.toUTCString()};path=/`;
}
function getCookie(cname) {
  const name = cname + "=";
  const ca = document.cookie.split(';');
  for(let c of ca) {
    c = c.trim();
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
  }
  return "";
}
function eraseCookie(cname) {
  document.cookie = `${cname}=; Max-Age=-99999999;path=/`;
}

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

  // Active tab: "messages", "newDM", or "account"
  const [activeTab, setActiveTab] = React.useState('messages');

  // Refs for scrolling messages area
  const messagesEndRef = React.useRef(null);
  const messagesContainerRef = React.useRef(null);

  // Add new profile-related state
  const [profile, setProfile] = React.useState({
    avatar: '',
    aboutMe: '',
    status: 'online',
    customStatus: '',
    backgroundColor: '#7C3AED'
  });
  const [editingProfile, setEditingProfile] = React.useState(false);
  const fileInputRef = React.useRef();

  // Add new profile-related states for DM list and selected conversation
  const [dmProfiles, setDmProfiles] = React.useState({});
  const [selectedProfile, setSelectedProfile] = React.useState(null);

  // Auto-login from cookies on mount
  React.useEffect(() => {
    const savedUsername = getCookie("username");
    const savedToken = getCookie("token");
    if (savedUsername && savedToken) {
      setUsername(savedUsername);
      setToken(savedToken);
      setLoggedIn(true);
      socket.emit('registerUser', savedUsername);
    }
  }, []);

  // Fetch DM list upon login
  React.useEffect(() => {
    if (loggedIn && username) {
      socket.emit('registerUser', username);
      axios.get(`${BACKEND_URL}/api/dmList`, { params: { user: username } })
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

  // Fetch profile upon login
  React.useEffect(() => {
    if (loggedIn && username) {
      axios.get(`${BACKEND_URL}/api/profile/${username}`)
        .then(response => setProfile(response.data.profile))
        .catch(console.error);
    }
  }, [loggedIn, username]);

  // When DM conversations update, fetch each partner's profile if not already fetched
  React.useEffect(() => {
    Object.keys(dmConversations).forEach(partner => {
      if (partner !== username && !dmProfiles[partner]) {
        axios.get(`${BACKEND_URL}/api/profile/${partner}`)
          .then(response => {
            setDmProfiles(prev => ({ ...prev, [partner]: response.data.profile }));
          })
          .catch(console.error);
      }
    });
  }, [dmConversations, username]);

  // When selectedConversation changes, fetch that user's profile for the right sidebar
  React.useEffect(() => {
    if (selectedConversation && selectedConversation !== username) {
      axios.get(`${BACKEND_URL}/api/profile/${selectedConversation}`)
        .then(response => setSelectedProfile(response.data.profile))
        .catch(err => setSelectedProfile(null));
    } else {
      setSelectedProfile(null);
    }
  }, [selectedConversation, username]);

  // Reset scroll and fetch conversation history when a conversation is selected
  React.useEffect(() => {
    if (selectedConversation && username) {
      // Reset scroll position for the new conversation
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop = 0;
      }
      
      axios.get(`${BACKEND_URL}/api/messages`, {
        params: { user1: username, user2: selectedConversation }
      })
        .then(response => {
          setDmConversations(prev => ({
            ...prev,
            [selectedConversation]: response.data
          }));
          
          // After loading messages, scroll to bottom
          setTimeout(() => {
            if (messagesEndRef.current) {
              messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        })
        .catch(error => console.error('Error fetching conversation:', error));
    }
  }, [selectedConversation, username]);

  // Auto-scroll logic for new messages (only if user is near the bottom)
  React.useEffect(() => {
    if (!selectedConversation) return;
    const container = messagesContainerRef.current;
    if (container && messagesEndRef.current) {
      const isUserNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 100;
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
    if (!username || !email || !password) {
      setError('All fields are required');
      return;
    }
    axios.post(`${BACKEND_URL}/api/register`, { username, email, password })
      .then(response => alert(response.data.message))
      .catch(err => setError(err.response?.data?.error || 'Registration error'));
  };

  const handleLogin = () => {
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
    axios.post(`${BACKEND_URL}/api/login`, { email, password })
      .then(response => {
        const loggedUsername = response.data.username || username;
        setToken(response.data.token);
        setLoggedIn(true);
        setUsername(loggedUsername);
        socket.emit('registerUser', loggedUsername);
        // Save login details to cookies for 7 days
        setCookie("username", loggedUsername, 7);
        setCookie("token", response.data.token, 7);
      })
      .catch(err => setError(err.response?.data?.message || 'Login error'));
  };

  const handleLogout = () => {
    setUsername("");
    setToken("");
    setLoggedIn(false);
    eraseCookie("username");
    eraseCookie("token");
    setActiveTab('messages');
  };

  const handleSendMessage = () => {
    if (!selectedConversation) {
      alert("Select a conversation first");
      return;
    }
    
    if (selectedConversation === username) {
      alert("You cannot send messages to yourself");
      return;
    }

    if (messageInput.trim() !== '') {
      const dmData = { sender: username, recipient: selectedConversation, message: messageInput };
      socket.emit('sendMessage', dmData);
      
      // Remove immediate local state update to avoid duplication.
      // setDmConversations(prev => { ... });   <-- Removed
      
      setMessageInput('');
      
      // Force scroll to bottom after sending message
      setTimeout(() => {
        if (messagesEndRef.current) {
          messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleStartNewDM = () => {
    if (newDMRecipient.trim() === username) {
      alert("You cannot start a DM with yourself");
      return;
    }
    
    if (newDMRecipient.trim() !== '') {
      // Verify user exists first
      axios.get(`${BACKEND_URL}/api/profile/${newDMRecipient}`)
        .then(response => {
          setDmConversations(prev => ({ ...prev, [newDMRecipient]: [] }));
          setSelectedConversation(newDMRecipient);
          setActiveTab('messages');
          setNewDMRecipient('');
        })
        .catch(error => {
          alert("User not found!");
        });
    }
  };
  
  const selectConversation = (partner) => {
    // Only fetch if changing to a different conversation
    if (selectedConversation !== partner) {
      setSelectedConversation(partner);
      
      // Make sure we're in messages tab
      setActiveTab('messages');
      
      // Reset message input when switching conversations
      setMessageInput('');
    }
  };

  const handleProfileUpdate = async () => {
    try {
      const response = await axios.put(`${BACKEND_URL}/api/profile/${username}`, {
        profile
      });
      setProfile(response.data.profile);
      setEditingProfile(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(prev => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
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
            id="username"
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            id="username"
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
      {/* Sidebar - Fixed position like Discord */}
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
              onClick={() => selectConversation(partner)}
            >
              {/* Use an image for avatar if available, else default */}
              <img 
                src={dmProfiles[partner]?.avatar || 'default-avatar.png'} 
                alt="avatar" 
                className="user-avatar" 
              />
              <span>{partner}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main content container with chat area and right sidebar */}
      <div style={{ display: 'flex', flex: 1 }}>
        {/* Chat Area */}
        <div id="main" style={{ flex: 1 }}>
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
            <button 
              className={activeTab === 'account' ? 'active' : ''} 
              onClick={() => setActiveTab('account')}
            >
              Account
            </button>
          </div>

          {/* Messages Section - Discord Style with Fixed Header/Input */}
          <div id="messages-section" className={activeTab === 'messages' ? 'active' : ''}>
            <div id="chat-header">
              <div className="current-user">
                {selectedConversation && (
                  <div className="user-avatar">
                    <img 
                      src={selectedProfile && selectedProfile.avatar ? selectedProfile.avatar : 'default-avatar.png'} 
                      alt={selectedConversation} 
                      style={{ width: '32px', height: '32px', borderRadius: '50%' }}
                    />
                  </div>
                )}
                <div className="user-info">
                  <h3>{selectedConversation || 'No Conversation Selected'}</h3>
                  {selectedConversation && <p>Chatting with {selectedConversation}</p>}
                </div>
              </div>
              {/* ...existing code... */}
            </div>
            
            {/* Scrollable Messages Container - Discord Style */}
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
                    {selectedConversation ? 'No messages yet. Say hello!' : 'Select a conversation to start chatting'}
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            {/* Fixed Message Input - Discord Style */}
            <div id="message-input">
              <div className="input-wrapper">
                <input 
                  id="currentMessage"
                  type="text" 
                  placeholder={selectedConversation ? "Message @" + selectedConversation : "Select a conversation first"} 
                  value={messageInput} 
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={!selectedConversation}
                />
                <button 
                  className="send-button" 
                  onClick={handleSendMessage}
                  disabled={!selectedConversation}
                >
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
                onKeyPress={(e) => e.key === 'Enter' && handleStartNewDM()}
              />
              <button onClick={handleStartNewDM}>Start DM</button>
            </div>
          </div>
          
          {/* Account Section */}
          <div id="account-section" className={activeTab === 'account' ? 'active' : ''}>
            <div className="account-wrapper">
              <h3>Account</h3>
              <p>Logged in as: {username}</p>
              <button onClick={handleLogout}>Log Out</button>
            </div>
            <div className="profile-section">
              <div className="profile-header">
                <div className="profile-avatar-container">
                  <img 
                    src={profile.avatar || 'default-avatar.png'} 
                    alt="Profile" 
                    className="profile-avatar"
                  />
                  {editingProfile && (
                    <div 
                      className="avatar-upload"
                      onClick={() => fileInputRef.current.click()}
                    >
                      📷
                      <input
                        type="file"
                        ref={fileInputRef}
                        hidden
                        accept="image/*"
                        onChange={handleAvatarChange}
                      />
                    </div>
                  )}
                </div>
                
                <div className="profile-info">
                  <h2 className="profile-username">{username}</h2>
                  <div className="profile-status">
                    <span className="status-dot"></span>
                    {profile.customStatus || 'Online'}
                  </div>
                </div>
              </div>

              <div className="profile-content">
                {editingProfile ? (
                  <>
                    <div className="profile-about">
                      <h3 className="profile-section-title">About Me</h3>
                      <textarea
                        value={profile.aboutMe}
                        onChange={e => setProfile(prev => ({ 
                          ...prev, 
                          aboutMe: e.target.value 
                        }))}
                        placeholder="Tell us about yourself..."
                      />
                    </div>
                    
                    <div className="profile-customization">
                      <div className="profile-status-custom">
                        <h3 className="profile-section-title">Custom Status</h3>
                        <input
                          type="text"
                          value={profile.customStatus}
                          onChange={e => setProfile(prev => ({
                            ...prev,
                            customStatus: e.target.value
                          }))}
                          placeholder="Set a custom status..."
                        />
                      </div>
                      
                      <div className="color-picker">
                        <h3 className="profile-section-title">Theme Color</h3>
                        <input
                          type="color"
                          value={profile.backgroundColor}
                          onChange={e => setProfile(prev => ({
                            ...prev,
                            backgroundColor: e.target.value
                          }))}
                        />
                      </div>
                    </div>

                    <div className="profile-actions">
                      <button onClick={handleProfileUpdate}>Save Changes</button>
                      <button onClick={() => setEditingProfile(false)}>Cancel</button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="profile-about">
                      <h3 className="profile-section-title">About Me</h3>
                      <p>{profile.aboutMe || 'No bio yet'}</p>
                    </div>
                    <button onClick={() => setEditingProfile(true)}>
                      Edit Profile
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div id="profile-sidebar" style={{
          width: '300px',
          background: 'var(--bg-secondary)',
          padding: '1rem',
          overflowY: 'auto'
        }}>
          {selectedConversation ? (
            selectedProfile ? (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img 
                    src={selectedProfile.avatar ? selectedProfile.avatar : 'default-avatar.png'} 
                    alt={selectedConversation} 
                    style={{ width: '80px', height: '80px', borderRadius: '50%', border: '3px solid var(--primary-color)' }}
                  />
                  <div>
                    <h3>{selectedConversation}</h3>
                    <p>{selectedProfile.customStatus || selectedProfile.status}</p>
                  </div>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <h4>About</h4>
                  <p>{selectedProfile.aboutMe || 'No bio available.'}</p>
                </div>
              </>
            ) : (
              <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                Loading profile…
              </p>
            )
          ) : (
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
              Select a conversation to see profile details.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
