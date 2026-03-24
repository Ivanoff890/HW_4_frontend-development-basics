import React, { useState, FormEvent } from 'react';

interface InputAreaProps {
  onSendMessage: (content: string) => void;
  isLoading: boolean;
}

const InputArea: React.FC<InputAreaProps> = ({ onSendMessage, isLoading }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <form className="input-area" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите сообщение..."
        disabled={isLoading}
        className="message-input"
      />
      <button
        type="submit"
        disabled={isLoading || !inputValue.trim()}
        className="send-button"
      >
        {isLoading ? 'Отправка...' : 'Отправить'}
      </button>
    </form>
  );
};

export default InputArea;