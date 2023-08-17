import { useMessages } from 'utils/useMessages'
import { useEffect } from "react";

const MessagesList = () => {
  const { messages, isLoadingAnswer } = useMessages()

  useEffect(() => {
    window.scrollTo({top:document.body.scrollHeight, behavior: "smooth"},);
  }, [isLoadingAnswer]);

  return (
    <div className="max-w-3xl mx-auto pt-8 pb-32">
      {messages?.map((message, i) => {
        const isUser = message.role === 'user'
        if (message.role === 'system') return null
        return (
          <div
            id={`message-${i}`}
            className={`flex mb-4 fade-up ${isUser ? 'justify-end' : 'justify-start'} ${
              i === 1 ? 'max-w-md' : ''
            }`}
            key={message.content}
          >
            {!isUser && (
              <img
                src={`https://source.unsplash.com/${process.env.NEXT_PUBLIC_AI_PHOTO}/500x500`}
                className="w-10 h-10 rounded-full"
                alt="avatar"
              />
            )}
            <div
              style={{ maxWidth: 'calc(100% - 45px)' }}
              className={`group relative px-3 py-2 rounded-lg ${
                isUser
                  ? 'mr-2 bg-gradient-to-br from-primary-700 to-primary-600 text-white'
                  : 'ml-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200'
              }`}
            >
              {message?.content?.trim() || "..."}
            </div>
            {isUser && (
              <img
              src={`https://source.unsplash.com/${process.env.NEXT_PUBLIC_USER_PHOTO}/500x500`}
                className="w-10 h-10 rounded-full cursor-pointer"
                alt="avatar"
              />
            )}
          </div>
        )
      })}
      {isLoadingAnswer && (
        <div className="flex justify-start mb-4">
          <img
            src={`https://source.unsplash.com/${process.env.NEXT_PUBLIC_AI_PHOTO}/500x500`}
            className="w-10 h-10 rounded-full"
            alt="avatar"
          />
          <div className="loader ml-2 p-2.5 px-4 bg-gray-200 dark:bg-gray-800 rounded-full space-x-1.5 flex justify-between items-center relative">
            <span className="block w-3 h-3 rounded-full"></span>
            <span className="block w-3 h-3 rounded-full"></span>
            <span className="block w-3 h-3 rounded-full"></span>
          </div>
        </div>
      )}
    </div>
  )
}

export default MessagesList
