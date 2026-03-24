import React from 'react';
import { Message as MessageType } from '../../types/message';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <div className={`message message-${message.role}`}>
      <div className="message-role">
        {message.role === 'user' ? 'Вы' : 'Ассистент'}
      </div>
      <div className="message-content">{message.content}</div>
      <div className="message-time">
        {message.timestamp.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Message;