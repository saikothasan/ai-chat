import { Message } from '../types/chat';

export function createMessage(text: string, isBot: boolean): Message {
  return {
    id: crypto.randomUUID(),
    text,
    isBot,
    timestamp: Date.now(),
  };
}

export function formatTimestamp(timestamp: number): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(timestamp);
}