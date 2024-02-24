# Frontend Application with Next.js, TypeScript, Ant Design

## Overview

This is a frontend application developed using Next.js, TypeScript, and Ant Design. The application integrates with Hugging Face's ML models to perform two main tasks:

1. **Text Keyword Extraction:** Utilizes Hugging Face's ML models to extract keywords from text input.

2. **Voice-to-Text Conversion (German):** Records voice input and converts it to text using Hugging Face's ML models with support for the German language.

## Prerequisites

- Node.js: Ensure that you have Node.js installed on your machine. You can download it [here](https://nodejs.org/).

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/2bdulra7manRea/voice-text-insight-AI-frontend
   ```

2. Install dependencies:

   ```bash
   cd voice-text-insight-AI-frontend
   npm install
   ```

3. Create a `.env.local` file at the root of your project and add the required environment variables:

   ```env
   REACT_APP_HUGGING_FACE_API_KEY=your_huggingface_api_key
   ```

   Replace `your_huggingface_api_key` with your actual Hugging Face API key.

4. Start the development server:

   ```bash
   npm run dev
   ```

   The application should now be running at `http://localhost:3000`.

## Configuration

- **Hugging Face API Key:** Obtain your Hugging Face API key by signing up on the [Hugging Face website](https://huggingface.co/). Add the API key to the `.env.local` file.

## Usage

- Navigate to the application in your web browser (`http://localhost:3000` by default).
- Use the provided UI to input text for keyword extraction or initiate voice recording for conversion to German text.
- Explore the results and enjoy the application!

## Contributing

Feel free to contribute to the project by creating issues or pull requests. Contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE).
