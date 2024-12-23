export interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: number;
}

export interface ChatError {
  message: string;
  code: string;
}