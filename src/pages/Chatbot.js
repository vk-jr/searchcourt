import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  IconButton,
  Chip,
  List,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import { motion } from 'framer-motion';

const ChatContainer = styled(Paper)(({ theme }) => ({
  height: '80vh',
  width: '80%',
  margin: '84px auto 20px',
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.background.default,
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  overflow: 'hidden',
}));

const MessageList = styled(List)(({ theme }) => ({
  flex: 1,
  overflow: 'auto',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
}));

const InputContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
}));

const Message = styled(Paper)(({ theme, isUser }) => ({
  padding: theme.spacing(1.5),
  marginBottom: theme.spacing(1),
  maxWidth: '70%',
  alignSelf: isUser ? 'flex-end' : 'flex-start',
  backgroundColor: isUser ? theme.palette.primary.main : theme.palette.grey[100],
  color: isUser ? theme.palette.primary.contrastText : theme.palette.text.primary,
  borderRadius: theme.spacing(2),
}));

const QuickPromptButton = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
}));

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I am your AI legal assistant. How can I help you today?",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    'Summarize this case',
    'Find related cases',
    'Explain key legal principles',
  ];

  const scrollToBottom = () => {
    const messageList = messagesEndRef.current?.parentElement;
    if (messageList) {
      const isAtBottom = messageList.scrollHeight - messageList.scrollTop === messageList.clientHeight;
      if (isAtBottom) {
        messagesEndRef.current?.scrollIntoView({ behavior: 'instant' });
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "I am processing your request. Here is what I found...",
            isUser: false,
          },
        ]);
      }, 1000);
      setInput('');
    }
  };

  const handleQuickPrompt = (prompt) => {
    setInput(prompt);
  };

  const handleVoiceInput = () => {
    setIsRecording(!isRecording);
    // Implement voice recognition logic here
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ minHeight: '100vh' }}
    >
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          pt: '64px',
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ChatContainer>
              <Box 
                p={2} 
                bgcolor="primary.main" 
                color="primary.contrastText"
                sx={{
                  borderTopLeftRadius: theme => theme.spacing(2),
                  borderTopRightRadius: theme => theme.spacing(2),
                }}
              >
                <Typography variant="h6">
                  Legal AI Assistant
                </Typography>
              </Box>

              <MessageList>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Message isUser={message.isUser}>
                      <Typography>{message.text}</Typography>
                    </Message>
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </MessageList>

              <Divider />

              <Box p={2} sx={{ bgcolor: 'grey.50' }}>
                <Typography variant="subtitle2" gutterBottom>
                  Quick Prompts:
                </Typography>
                {quickPrompts.map((prompt) => (
                  <QuickPromptButton
                    key={prompt}
                    label={prompt}
                    onClick={() => handleQuickPrompt(prompt)}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>

              <InputContainer sx={{
                borderBottomLeftRadius: theme => theme.spacing(2),
                borderBottomRightRadius: theme => theme.spacing(2),
              }}>
                <Box display="flex" alignItems="center" gap={1}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'grey.50',
                      }
                    }}
                  />
                  <IconButton
                    color={isRecording ? 'error' : 'primary'}
                    onClick={handleVoiceInput}
                  >
                    <MicIcon />
                  </IconButton>
                  <IconButton color="primary" onClick={handleSend}>
                    <SendIcon />
                  </IconButton>
                </Box>
              </InputContainer>
            </ChatContainer>
          </motion.div>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Chatbot; 