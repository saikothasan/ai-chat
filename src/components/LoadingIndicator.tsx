import React from 'react';
import { Bot } from 'lucide-react';

export function LoadingIndicator() {
  return (
    <div className="flex gap-2 p-6 bg-gray-50">
      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center animate-pulse">
        <Bot className="w-5 h-5 text-white" />
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]" />
      </div>
    </div>
  );
}