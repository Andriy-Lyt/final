import React from 'react';
import './styles/App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed  from './components/ChatFeed';

function App() {
  return (
   <>
    <div className="App">
     <h3>Lets Rock the Final!
     <span style={{fontSize:"20px"}}> &#128512;</span>
     </h3>
    </div>

    <ChatEngine 
        height="100vh"
        projectID="f427c030-b876-401d-8a99-790f0f95fe25"
        userName="admin1"
        userSecret="111"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  </>
  );
}

export default App;
