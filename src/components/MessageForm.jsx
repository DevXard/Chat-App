import {useState} from 'react';
import {sendMessage, isTyping} from 'react-chat-engine';

const MessageForm = (props) => {
    const [formData, setFromData] = useState('');
    const {chatId, creds } = props;

    const handleSubmit = e => {
        e.preventDefault();
        const text = formData.trim();
        setFromData('')
        if(text.length > 0) sendMessage(creds, chatId, {text});

    }

    const handleChange = e => {
        
        setFromData(e.target.value)
        
        isTyping(props, props.chatId)
    }

    return(
        <form className="message-form" onSubmit={handleSubmit}>
            <input
            className='message-input'
            placeholder='Send Message'
            value={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            type="" />
        </form>
    )
}

export default MessageForm;