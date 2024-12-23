import React from 'react';
import { Bot, Info } from 'lucide-react';

export function ChatHeader() {
  return (
    <header className="bg-white border-b px-4 py-3 sticky top-0 z-10">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-500 p-2 rounded-lg">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-semibold">AI Assistant</h1>
        </div>
        <button
          className="text-gray-500 hover:text-gray-700 transition-colors"
          title="About this assistant"
        >
          <Info className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}