const API_URL = 'https://hello-ai.aicodegen.workers.dev/';

export async function sendMessage(prompt: string, timeoutMs = 5000): Promise<string> {
  try {
    const url = new URL(API_URL);
    url.searchParams.append('prompt', prompt);

    const timeout = new Promise<string>((_, reject) =>
      setTimeout(() => reject(new Error('Request timed out')), timeoutMs)
    );

    const fetchPromise = fetch(url.toString()).then(async response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (!data.response) {
        throw new Error('Invalid API response structure');
      }
      return data.response;
    });

    return await Promise.race([fetchPromise, timeout]);
  } catch (error: any) {
    console.error('API Error:', error.message, error.stack);
    throw new Error('Failed to communicate with the AI service');
  }
}
