import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="message message-assistant typing-indicator">
      <div className="message-role">Ассистент</div>
      <div className="typing-dots">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
};

export default TypingIndicator;