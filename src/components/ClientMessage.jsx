import React from 'react'

function ClientMessage({lastMessage, message}) {
  const lblue = '#b6ceec';
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div 
          className="message-avatar"
          style={{backgroundImage: `url(${message?.sender?.avatar})`}}
        />
      )}
      {message?.attachments?.length > 0
          ?(
            <img 
              src={message.attachments[0].file} 
              alt="message-attachment"
              className="message-image"
              style={{marginLeft: isFirstMessageByUser ? '5px' : '47px' }}
            />
          ) : (
            <div className="message" style={{float: 'left', backgroundColor: {lblue}, marginLeft: isFirstMessageByUser ? '5px' : '47px'}}>
                  {message.text}
            </div>
          ) 
        }
    </div>
  );
}

export default ClientMessage;
