const API_URL = 'https://hello-ai.aicodegen.workers.dev/';

export async function sendMessage(prompt: string, timeoutMs = 5000): Promise<string> {
  try {
    const url = new URL(API_URL);
    url.searchParams.append('prompt', prompt);

    // Create a timeout promise
    const timeout = new Promise<string>((_, reject) => 
      setTimeout(() => reject(new Error('Request timed out')), timeoutMs)
    );

    // Fetch the API response with timeout
    const fetchPromise = fetch(url.toString()).then(async response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.response || 'Sorry, I could not process that.';
    });

    // Wait for either fetch or timeout
    return await Promise.race([fetchPromise, timeout]);
  } catch (error) {
    console.error('API Error:', error);
    return 'Failed to communicate with the AI service. Please try again later.';
  }
}
