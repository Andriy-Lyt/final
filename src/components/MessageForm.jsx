// My File MsgForm

import React, {useState} from 'react';
import{ sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

function MessageForm(props) {
  const[value, setValue] = useState('');
  const {chatId, creds} = props;

  const handleSubmit = (event) => {
      event.preventDefault();
      const text = value.trim();
      if (text.length > 0) { sendMessage(creds, chatId, { text }) };
      setValue('');
  }

  const handleChange = (event) => {
    setValue(event.target.value); //set State
    isTyping(props, chatId);
  }

  const handleUpload = (event) => {
    console.log("event.target.file ln23 MsgForm.js: ", event.target.file);
    sendMessage(creds, chatId, { files: event.target.files, text: ''});
  }

  return (
    <div>
      <form className="message-form" onSubmit={handleSubmit}>
        <input 
            className="message-input"
            placeholder="Send a message..."
            value={value}
            onChange={handleChange}
            onSubmit={handleSubmit} //send message by pressing Enter key
        />
        <div>
          <label htmlFor="upload-button">
            <span className="image-butt on">
                <PictureOutlined className="picture-icon" />
            </span>
          </label>
          <input 
              type="file"
              multiple={false}
              id="upload-button"
              style={{display: 'none'}}
              onChange={handleUpload}
            />
            <button type="submit" className="send-button"  > 
              <SendOutlined className="send-icon" />
            </button>
        </div>
      </form>
    </div>
  )
}

export default MessageForm;
