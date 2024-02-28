import React, { useState, useRef, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface Message {
  sender: string;
  content: string;
  timestamp: Date;
}

function Kbbot(): JSX.Element {
  const [question, setQuestion] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post<{ answer: string }>('http://178.16.131.211:5005/ask', { question });
      const userMessage: Message = { sender: 'USER', content: question, timestamp: new Date() };
      const botResponse: Message = { sender: 'KBBOT', content: res.data.answer, timestamp: new Date() };
      setMessages([...messages, userMessage, botResponse]);
      setQuestion('');
    } catch (error) {
      console.error('Error fetching response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-black text-white rounded-lg shadow-lg p-4 backdrop-blur-md bg-opacity-20">
      <div ref={chatContainerRef} className=" overflow-y-auto max-h-64 mb-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'USER' ? 'justify-end' : 'justify-start'} mb-2`}>
            <div className={`rounded-lg py-2 px-4 ${message.sender === 'USER' ? 'bg-gray text-gray-300 self-end bg-opacity-50' : 'bg-gray bg-opacity-25 text-gray-300 self-start'}`}>
              <p className="text-sm">{message.sender}:</p>
              {message.content}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-end">
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={question}
            onChange={handleChange}
            placeholder="Type a message"
            className="flex-grow border border-[#7F2C36] rounded-lg py-2 px-4 focus:outline-none focus:border-[#7F2C36] text-black"
          />
          <button type="submit" className="ml-2 bg-black  text-gray-300 rounded-lg py-2 px-4 bg-opacity-50 hover:bg-gray focus:outline-none focus:bg-blue-600">
            {isLoading ? 'Loading...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Kbbot;
