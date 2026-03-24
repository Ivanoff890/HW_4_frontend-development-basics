import React, { useState } from 'react';
import { Message } from '../../types/message';
import MessageList from './MessageList';
import InputArea from './InputArea';

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMockResponse = (userMessage: string): string => {
    const responses = [
      `Я получил ваше сообщение: "${userMessage}". Спасибо!`,
      `Интересно! Расскажите подробнее о "${userMessage}".`,
      `Спасибо за сообщение! Я обрабатываю ваш запрос: "${userMessage}"`,
      `Отлично! Я понял, что вы имеете в виду: "${userMessage}"`,
      `Давайте разберемся с "${userMessage}". Что именно вас интересует?`,
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = (content: string) => {
    // Добавляем сообщение пользователя
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Симулируем ответ ассистента через 1-2 секунды
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getMockResponse(content),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, Math.random() * 1000 + 1000); // 1-2 секунды
  };

  return (
    <div className="chat-window">
      <MessageList messages={messages} isLoading={isLoading} />
      <InputArea onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default ChatWindow;