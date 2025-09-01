import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, MapPin, Clock, Phone, Minimize2, Maximize2, Loader2 } from 'lucide-react';

const KurtosGroqChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      content: "Hello! I'm Anas from Kurtos! 👋\n\nWelcome to our authentic Hungarian chimney cake experience! I'm here to help you discover our delicious, freshly baked treats.\n\nHow can I assist you today?",
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('connected');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Check if we're on mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Use environment variable for API key
  const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
  const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

  // Debug API key
  useEffect(() => {
    console.log('API Key loaded:', GROQ_API_KEY ? 'Yes' : 'No');
    if (!GROQ_API_KEY) {
      setConnectionStatus('no-key');
    }
  }, [GROQ_API_KEY]);

  // ... rest of your component remains the same
  const kurtosContext = `You are Anas, a friendly and helpful customer service assistant for Kurtos, an authentic Hungarian chimney cake shop in Islamabad, Pakistan.

ABOUT KURTOS:
- Location: Shop #5, Mosaic District, 1-A Mir Chakar Khan Rd, I-8 Markaz, Islamabad
- Specialty: Hungarian Chimney Cakes (Kürtőskalács) - crispy, golden, freshly baked
- Services: Dine-in, Takeaway, Delivery across Islamabad
- Contact: kurtos.pakistan@gmail.com, Instagram @kurtos_pakistan
- Timings: Ramadan 6PM-2AM, Regular afternoon till late night

MENU HIGHLIGHTS:
- Hungarian Chimney Cakes with various toppings (cinnamon, chocolate, nuts, coconut)
- Chimney Cones filled with ice cream, chocolate, fresh fruits
- Premium coffee and beverages
- Seasonal specials and custom cake options

COMMUNICATION STYLE:
- Always introduce yourself as Anas when greeting new customers
- Be warm, friendly, and enthusiastic about our products
- Use clear, well-structured responses with proper formatting
- Keep responses concise but informative (2-4 sentences max per point)
- Use emojis sparingly and appropriately
- Always end with an offer to help further

RESPONSE FORMAT:
- Use line breaks for better readability
- Separate different topics with clear spacing
- Use bullet points only when listing items
- Keep paragraphs short and easy to read`;

  const quickActions = [
    { icon: "📍", text: "Location", query: "Where are you located?" },
    { icon: "🕐", text: "Hours", query: "What are your opening hours?" },
    { icon: "🍰", text: "Menu", query: "Tell me about your menu" },
    { icon: "🚚", text: "Delivery", query: "Do you deliver?" }
  ];

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;
    
    if (!GROQ_API_KEY) {
      setMessages(prev => [...prev, {
        id: Date.now(),
        role: 'assistant',
        content: "⚠️ Sorry, the chatbot service is currently unavailable. Please contact us directly:\n\n📧 kurtos.pakistan@gmail.com\n📱 @kurtos_pakistan\n📍 Visit us at I-8 Markaz, Islamabad",
        timestamp: Date.now()
      }]);
      return;
    }

    const userMessage = { 
      id: Date.now(), 
      role: 'user', 
      content: input, 
      timestamp: Date.now() 
    };
    
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);
    setConnectionStatus('connecting');

    try {
      // Create the conversation history for the API
      const conversationHistory = [
        { role: 'system', content: kurtosContext },
        ...messages.slice(-6).map(m => ({ role: m.role, content: m.content })),
        { role: 'user', content: currentInput }
      ];

      console.log('Sending request to GROQ API...');
      
      const response = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-20b',
          messages: conversationHistory,
          max_tokens: 300,
          temperature: 0.7,
          stream: false
        }),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('GROQ API Error Response:', errorText);
        
        let errorMessage = 'Unknown error occurred';
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.error?.message || errorData.message || errorMessage;
        } catch (parseError) {
          errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        }
        
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log('GROQ API Response:', data);

      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error('Invalid response format from API');
      }

      const assistantMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: data.choices[0].message.content,
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setConnectionStatus('connected');
      
    } catch (error) {
      console.error('Chatbot Error:', error);
      
      let errorDisplayMessage = "I'm having trouble connecting right now. ";
      
      if (error.message.includes('401') || error.message.includes('authentication')) {
        errorDisplayMessage += "There seems to be an API authentication issue.";
      } else if (error.message.includes('quota') || error.message.includes('limit')) {
        errorDisplayMessage += "The service is temporarily at capacity.";
      } else if (error.message.includes('network') || error.message.includes('fetch')) {
        errorDisplayMessage += "Please check your internet connection.";
      } else {
        errorDisplayMessage += "Please try again in a moment.";
      }
      
      const errorMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: `❌ ${errorDisplayMessage}\n\nYou can always reach us directly:\n📧 kurtos.pakistan@gmail.com\n📱 @kurtos_pakistan\n📍 I-8 Markaz, Islamabad`,
        timestamp: Date.now()
      };
      
      setMessages(prev => [...prev, errorMessage]);
      setConnectionStatus('error');
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleQuickAction = (query) => {
    setInput(query);
    // Auto-send the quick action
    setTimeout(() => {
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      document.dispatchEvent(event);
    }, 100);
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const getStatusColor = () => {
    switch(connectionStatus) {
      case 'connected': return 'bg-green-500';
      case 'connecting': return 'bg-yellow-500';
      case 'error': return 'bg-red-500';
      case 'no-key': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = () => {
    switch(connectionStatus) {
      case 'connected': return 'Online';
      case 'connecting': return 'Connecting...';
      case 'error': return 'Connection Error';
      case 'no-key': return 'Service Unavailable';
      default: return 'Unknown';
    }
  };

  // Mobile/Desktop responsive dimensions
  const chatDimensions = isMobile 
    ? "fixed bottom-4 right-4 left-4 top-24 z-50" 
    : "fixed bottom-6 right-6 w-80 h-[520px] z-50";
  
  const chatRadius = "rounded-2xl";

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group relative"
          >
            <MessageCircle size={isMobile ? 24 : 28} className="animate-pulse" />
            <div className={`absolute -top-1 -right-1 w-3 h-3 ${getStatusColor()} rounded-full animate-ping`}></div>
            <div className={`absolute -top-1 -right-1 w-3 h-3 ${getStatusColor()} rounded-full`}></div>
          </button>
          
          {/* Floating notification bubble */}
          <div className="absolute bottom-full right-0 mb-2 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Need help? Chat with us! 💬
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`${chatDimensions} bg-white ${chatRadius} shadow-2xl border-2 border-gray-100 flex flex-col overflow-hidden backdrop-blur-sm`}>
          
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white p-3 md:p-4 flex items-center justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-500/20 animate-pulse"></div>
            
            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-base md:text-lg">Anas</h3>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 ${getStatusColor()} rounded-full animate-pulse`}></div>
                  <span className="text-xs opacity-90 font-medium">
                    {getStatusText()}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-1 relative z-10">
              {!isMobile && (
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white/80 hover:text-white hover:bg-white/10 transition-all p-2 rounded-lg"
                >
                  {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/10 transition-all p-2 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          {!isMinimized && (
            <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 bg-gradient-to-b from-gray-50 to-white">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fadeIn 0.5s ease-out forwards'
                  }}
                >
                  <div
                    className={`max-w-[85%] md:max-w-[80%] ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl rounded-br-md shadow-lg'
                        : 'bg-white text-gray-800 rounded-2xl rounded-bl-md border shadow-md hover:shadow-lg transition-shadow'
                    } overflow-hidden transform hover:scale-[1.02] transition-transform duration-200`}
                  >
                    <div className="p-3 md:p-4">
                      <div className="flex items-start space-x-2">
                        {message.role === 'assistant' && (
                          <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Bot size={14} className="text-orange-600" />
                          </div>
                        )}
                        {message.role === 'user' && (
                          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <User size={14} className="text-white" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="text-sm leading-relaxed whitespace-pre-wrap break-words space-y-2">
                            {message.content.split('\n\n').map((paragraph, idx) => (
                              <p key={idx} className="leading-relaxed">
                                {paragraph.split('\n').map((line, lineIdx) => (
                                  <span key={lineIdx}>
                                    {line}
                                    {lineIdx < paragraph.split('\n').length - 1 && <br />}
                                  </span>
                                ))}
                              </p>
                            ))}
                          </div>
                          <p className={`text-xs mt-2 ${
                            message.role === 'user' ? 'text-white/70' : 'text-gray-500'
                          }`}>
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Loading Animation */}
              {isLoading && (
                <div className="flex justify-start animate-fadeIn">
                  <div className="bg-white rounded-2xl rounded-bl-md border shadow-md p-4 max-w-[80%]">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                        <Bot size={14} className="text-orange-600" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Loader2 size={16} className="text-orange-500 animate-spin" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">Typing...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Actions - Only show on first message */}
              {messages.length === 1 && !isLoading && (
                <div className="space-y-3 animate-fadeIn" style={{animationDelay: '0.5s'}}>
                  <p className="text-center text-sm text-gray-600 font-medium">Quick questions:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickAction(action.query)}
                        className="text-left p-3 bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-md hover:bg-orange-50 transition-all duration-200 transform hover:scale-105 active:scale-95"
                      >
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{action.icon}</span>
                          <span className="text-xs font-medium text-gray-700">{action.text}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}

          {/* Input Section */}
          {!isMinimized && (
            <div className="p-3 md:p-4 border-t bg-white/95 backdrop-blur-sm">
              <div className="flex space-x-2 md:space-x-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-sm transition-all duration-200 bg-white/90 backdrop-blur-sm"
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-3 rounded-xl hover:shadow-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 min-w-[48px] flex items-center justify-center"
                >
                  {isLoading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                </button>
              </div>
              
              {/* Footer Info */}
              <div className="flex items-center justify-center space-x-4 mt-3 text-xs text-gray-500">
                <div className="flex items-center space-x-1 hover:text-orange-600 transition-colors cursor-pointer">
                  <MapPin size={10} />
                  <span>I-8 Markaz, Islamabad</span>
                </div>
                <div className="flex items-center space-x-1 hover:text-orange-600 transition-colors cursor-pointer">
                  <Phone size={10} />
                  <span>@kurtos_pakistan</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default KurtosGroqChatbot;