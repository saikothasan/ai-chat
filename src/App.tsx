import React, { useState, useCallback } from 'react';
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

  const handleSendMessage = useCallback(async (text: string) => {
    // Ensure the message is not empty or whitespace
    if (!text.trim()) return;

    // Add user message optimistically
    const userMessage = createMessage(text, false);
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await sendMessage(text);

      // Add AI response
      const aiMessage = createMessage(response, true);
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);

      // Add error response
      const errorMessage = createMessage(
        'Sorry, I encountered an error. Please try again later.',
        true
      );
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <ChatHeader />

      {/* Messages Section */}
      <ChatMessages messages={messages} isLoading={isLoading} />

      {/* Input Section */}
      <ChatInput onSend={handleSendMessage} disabled={isLoading} />
    </div>
  );
}

export default App;
