import React from 'react';
import ChatWindow from './components/chat/ChatWindow';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Чат с ассистентом</h1>
      <ChatWindow />
    </div>
  );
}

export default App;