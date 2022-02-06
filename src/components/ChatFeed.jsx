import React from 'react';
import MessageForm from './MessageForm';
import ClientMessage from './ClientMessage';
import AdminMessage from './AdminMessage';

function ChatFeed(props) {
  const { chats, activeChat, userName, messages } = props;

  // console.log("messages: ", messages);
  // console.log("chats: ", chats);

  const chat = chats && chats[activeChat];

  // console.log(chat, userName, messages);

  const renderReadReceipts = (message, isAdminMessage) => {
   return chat.people.map((person, index) => person.last_read === message.id && (
      <div
        key={`read_${index}`}
        className="read-receipt"
        style={{
          float: isAdminMessage ? 'right' : 'left',
          backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
        }}
      />
    ));
  } 

  const renderMessages = () => {
    const keys = Object.keys(messages);
    // console.log("keys: ", keys);
    return keys.map((key, i) => {
      const message = messages[key];
      const lastMessageKey = i === 0 ? null : keys[i - 1];
      const isAdminMessage = userName === message.sender.username;

      return(
        <div key={`msg_${i}`} style={{width: '100%'}}>
          <div className="message-block">
            {
              isAdminMessage 
              ? <AdminMessage message={message} />
              : <ClientMessage message={message} lastMessage={messages[lastMessageKey]}/>
            }
          </div>
          <div className="read-receipts" style={{marginRight: isAdminMessage ? '18px' : '0px', marginLeft: isAdminMessage ? '0px' : '67px'}}>
             {renderReadReceipts(message, isAdminMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) {
    // console.log("line 42 runs");
    return (<div>Loading...</div> );
  };
    // console.log("line 45 runs") 
  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
        {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{height: '100px'}}></div>
      <div className="message-form-container" >
          <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};


export default ChatFeed;