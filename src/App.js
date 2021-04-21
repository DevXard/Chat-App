import {ChatEngine} from 'react-chat-engine';
import {projectID, secretKey} from '../keys';
import './App.css'

const App = () => {

    return(
        <ChatEngine 
            height="100vh"
            projectID={projectID}
            userNmae="DevXard"
            userSecret={secretKey}
        />
            
        
    )
}

export default App;