import {ChatEngine} from 'react-chat-engine';
import {projectID, secretKey} from './keys';

import MainChatFeed from './components/MainChatFeed.jsx';
import './App.css'

const App = () => {

    return(
        <ChatEngine 
            height="100vh"
            projectID={projectID}
            userName="DevXard"
            userSecret={secretKey}
            renderChatFeed={(chatAppProps) => <MainChatFeed p={chatAppProps}/>}
        />
            
        
    )
}

export default App;