# Test-AI-ChatBot-Application
This application will allow a user to interact with a personalized chatbot. This is a test project to see if it can be integrated for future projects.

## Prerequisites
- Node.js (version 14 or higher)
- npm

## Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```
4. Start the server: `npm start`

## Usage
The server runs on port 3000 by default. Send a POST request to `/chat` with a JSON body containing `message`.

Example:
```json
{
  "message": "Hello, how are you?"
}
```

Response:
```json
{
  "response": "Hello! I'm doing well, thank you for asking."
}
```
