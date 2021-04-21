import {useEffect} from 'react'

const ChatFeed = ({p}) => {
    useEffect(() =>{
        console.log(p)
    },[p])
    

    return(
        <div>ChatFeed</div>
    )
}

export default ChatFeed;