# Next.js ChatGPT Tutorial Documentation
> Build and customize your own ChatGPT-like web app using Next.js and the OpenAI API. The provided code serves as a foundation, and you can customize it to fit your specific use case. 
<img alt="Screenshot" src="./public/img/screenshot.jpg" height="75%" width="75%"/>

## Tutorial
You can find a step-by-step tutorial [here](https://www.jakeprins.com/blog/how-to-create-a-chatgpt-application-using-next-js-and-the-openai-api). 

## Overview

The application uses the following components:

- Next.js for the frontend and backend server
- The OpenAI API for chat interactions
- Tailwind CSS for styling
- Apideck components for toast notifications and modals

## Getting Started

1.  Clone the repository and navigate to the project directory.
    
2.  Install the required dependencies by running `npm install` or `yarn`.
    
3.  Create a `.env.local` file in the project root and add your OpenAI API key:
    ```
    OPENAI_API_KEY=your_openai_api_key
    ```
4.  Start the development server by running `npm run dev` or `yarn dev`.
    
5.  Open your browser and navigate to `http://localhost:3000` to access the application.
    
6.  You can now interact with the chatbot using the input field at the bottom of the screen.
    

## Customizing the Application

#### Model Selection (Optional)

The current implementation of the application uses the "gpt-3.5-turbo" model for chat interactions. This model provides excellent performance for a wide range of tasks and is the recommended choice for most use cases.

However, you might be interested in using other models such as GPT-4. As of March 25th, 2023, GPT-4 is available but in an invite-only mode. Your OpenAI account may not yet have access to it. If you do have access to GPT-4, you can change the model used in the application by modifying the `createMessage` function in the `/src/pages/api/createMessage.ts` file:

```typescript
const body = JSON.stringify({
  messages,
  model: 'gpt-4', // Replace 'gpt-3.5-turbo' with 'gpt-4'
  stream: false
})
``` 

Remember that the performance, response time, and pricing for different models may vary. Please refer to the OpenAI API documentation for more information on available models and their specific capabilities.

Feel free to modify the code and styles to fit your specific needs. The application uses Tailwind CSS for styling, making it easy to customize the design by modifying the `/src/styles/tailwind.css` and `/src/styles/globals.css` files.

You can also update the application logic, components, and API calls to match your requirements. The main chat functionality is located in `/src/utils/sendMessage.ts` and `/src/utils/useMessages.tsx`.

## Deploying to Production

To deploy your application, you can use a platform like Vercel or Netlify. Both platforms offer seamless integration with Next.js and support environment variables, which are required to store your OpenAI API key securely. Follow the documentation provided by your chosen platform to deploy the application.

If you have any questions or need further assistance, don't hesitate to create a GitHub issue!

## TeamSmart AI

For a complete ChatGPT Chrome extension checkout [TeamSmart AI](https://www.teamsmart.ai/).

