import React, { useState } from 'react';
import { ChatHeader } from './components/ChatHeader';
import { ChatMessages } from './components/ChatMessages';
import { ChatInput } from './components/ChatInput';
import { createMessage } from './utils/messageUtils';
import { sendMessage } from './utils/api';
import type { Message } from './types/chat';

function App() {
  const [messages, setMessages] = useState<Message[]>([
    createMessage("Hello! I'm your AI assistant. How can I help you today?", true)
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (text: string) => {
    // Add user message
    setMessages(prev => [...prev, createMessage(text, false)]);
    setIsLoading(true);

    try {
      const response = await sendMessage(text);
      setMessages(prev => [...prev, createMessage(response, true)]);
    } catch (error) {
      setMessages(prev => [...prev, 
        createMessage('Sorry, I encountered an error. Please try again.', true)
      ]);
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <ChatHeader />
      <ChatMessages messages={messages} isLoading={isLoading} />
      <ChatInput onSend={handleSendMessage} disabled={isLoading} />
    </div>
  );
}

export default App;