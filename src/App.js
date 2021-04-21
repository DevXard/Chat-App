import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const projectID = '4cdfb5d3-a634-4185-a552-756e48d04710';

const App = () => {
  

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName="DevXard"
      userSecret="81979"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
      
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;