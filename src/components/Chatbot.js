import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Paper,
  TextField,
  IconButton,
  Typography,
  Avatar,
  Container,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';

const ChatContainer = styled(Paper)(({ theme }) => ({
  height: '70vh',
  display: 'flex',
  flexDirection: 'column',
  background: 'rgba(255,255,255,0.95)',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
}));

const MessagesContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  overflowY: 'auto',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const MessageBubble = styled(Box)(({ theme, isBot }) => ({
  maxWidth: '70%',
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(2),
  backgroundColor: isBot ? theme.palette.primary.light : theme.palette.grey[100],
  color: isBot ? theme.palette.primary.contrastText : 'inherit',
  alignSelf: isBot ? 'flex-start' : 'flex-end',
  display: 'flex',
  gap: theme.spacing(1),
}));

const InputContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  gap: theme.spacing(1),
}));

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! I\'m your AI legal assistant. How can I help you today?',
      isBot: true,
    },
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, text: input, isBot: false },
    ]);

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: 'I understand your query. Let me analyze the relevant legal precedents and provide you with accurate information.',
          isBot: true,
        },
      ]);
    }, 1000);

    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Container>
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Legal Assistant
        </Typography>
        <ChatContainer elevation={3}>
          <MessagesContainer>
            {messages.map((message) => (
              <MessageBubble key={message.id} isBot={message.isBot}>
                <Avatar sx={{ width: 32, height: 32 }}>
                  {message.isBot ? <SmartToyIcon /> : <PersonIcon />}
                </Avatar>
                <Box>
                  <Typography variant="body1">
                    {message.text}
                  </Typography>
                </Box>
              </MessageBubble>
            ))}
            <div ref={messagesEndRef} />
          </MessagesContainer>
          <InputContainer>
            <TextField
              fullWidth
              multiline
              maxRows={4}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your legal question here..."
              variant="outlined"
            />
            <IconButton
              color="primary"
              onClick={handleSend}
              disabled={!input.trim()}
            >
              <SendIcon />
            </IconButton>
          </InputContainer>
        </ChatContainer>
      </Box>
    </Container>
  );
};

export default Chatbot; 