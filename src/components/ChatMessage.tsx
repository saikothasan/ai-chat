import React from 'react';
import { Bot, User } from 'lucide-react';
import { formatTimestamp } from '../utils/messageUtils';
import type { Message } from '../types/chat';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const { text, isBot, timestamp } = message;

  return (
    <div className={`flex gap-4 ${isBot ? 'bg-gray-50' : ''} p-6 animate-fadeIn`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        isBot ? 'bg-blue-500' : 'bg-green-500'
      }`}>
        {isBot ? (
          <Bot className="w-5 h-5 text-white" />
        ) : (
          <User className="w-5 h-5 text-white" />
        )}
      </div>
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          <span className="font-medium">{isBot ? 'AI Assistant' : 'You'}</span>
          <span className="text-xs text-gray-500">{formatTimestamp(timestamp)}</span>
        </div>
        <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );
}