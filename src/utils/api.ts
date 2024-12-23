const API_URL = 'https://hello-ai.aicodegen.workers.dev/';

export async function sendMessage(prompt: string): Promise<string> {
  try {
    const url = new URL(API_URL);
    url.searchParams.append('prompt', prompt);

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.response || 'Sorry, I could not process that.';
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to communicate with the AI service');
  }
}