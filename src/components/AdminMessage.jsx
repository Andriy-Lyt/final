import React from 'react'

function AdminMessage({message}) {
  const darkBlue = '#3674c9';
  
  if (message.attachments && message.attachments.length > 0) {
    
    return(
      <img 
        src={message.attachments[0].file} 
        alt="message-attachment"
        className="message-image"
        style={{float: 'right'}}
      />
    )
  }
  return (
    <div className="message" style={{float: 'right', marginRight:'18px', color:'white', backgroundColor: `${darkBlue}`}}>
      {message.text}
    </div>
  )
}
 
export default AdminMessage;
