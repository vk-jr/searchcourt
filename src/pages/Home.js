import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Paper, Fab, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import ChatIcon from '@mui/icons-material/Chat';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchContainer = styled(Box)(({ theme }) => ({
  height: '100vh', // Full viewport height
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  position: 'relative',
  paddingTop: theme.spacing(8), // Account for header
}));

const NewsSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100%',
  background: '#ffffff',
  padding: theme.spacing(10, 2),
}));

const NewsCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const SearchBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  width: '100%',
  maxWidth: '80%',
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  background: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(10px)',
  margin: '0 auto',
  '&.blink-glow': {
    animation: 'glowAnimation 1.5s ease-in-out',
  },
  '@keyframes glowAnimation': {
    '0%': {
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
    },
    '50%': {
      boxShadow: '0 8px 32px rgba(25, 118, 210, 0.8)',
    },
    '100%': {
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
    },
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '95%',
    padding: theme.spacing(4),
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(2),
    transition: 'all 0.3s ease-in-out',
    fontSize: '1.2rem', // Increased font size
    '&:hover': {
      transform: 'scale(1.01)',
    },
    '&.Mui-focused': {
      transform: 'scale(1.02)',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '16px 20px', // Increased padding
  },
}));

const ChatbotButton = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(4),
  right: theme.spacing(4),
  zIndex: 1000,
}));

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isGlowing, setIsGlowing] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Mock news data
  const newsItems = [
    {
      id: 1,
      title: "Landmark Supreme Court Judgment",
      description: "Recent ruling sets new precedent in environmental law cases...",
      image: "/path-to-image-1.jpg",
      date: "March 15, 2024"
    },
    {
      id: 2,
      title: "High Court's Digital Initiative",
      description: "New online filing system revolutionizes court proceedings...",
      image: "/path-to-image-2.jpg",
      date: "March 14, 2024"
    },
    {
      id: 3,
      title: "Legal AI Breakthrough",
      description: "Artificial Intelligence making waves in legal research...",
      image: "/path-to-image-3.jpg",
      date: "March 13, 2024"
    }
  ];

  // Handle glow effect
  const handleGlowEffect = () => {
    setIsGlowing(true);
    window.history.replaceState({}, '', window.location.pathname);
    setTimeout(() => setIsGlowing(false), 1500);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('glow') === 'true') {
      handleGlowEffect();
    }
    if (params.get('section') === 'about') {
      const footerElement = document.getElementById('footer-section');
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState({}, '', window.location.pathname);
      }
    }
  }, [location.search]);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      if (params.get('glow') === 'true') {
        handleGlowEffect();
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleChatbotClick = () => {
    setIsExiting(true);
    // Wait for animation to complete before navigating
    setTimeout(() => {
      navigate('/chatbot');
      window.scrollTo(0, 0);
    }, 500); // Match this with animation duration
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isExiting ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SearchContainer>
          <Box width="100%" display="flex" justifyContent="center" alignItems="center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <SearchBox id="search-section" className={isGlowing ? 'blink-glow' : ''}>
                <Typography
                  variant="h2"
                  component="h1"
                  align="center"
                  gutterBottom
                  sx={{ 
                    fontWeight: 'bold', 
                    color: 'primary.main',
                    mb: 4,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                  }}
                >
                  What can I help with?
                </Typography>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <StyledTextField
                    fullWidth
                    variant="outlined"
                    placeholder="Search for legal judgments, cases, or topics..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    sx={{ mt: 4 }}
                  />
                </motion.div>
              </SearchBox>
            </motion.div>
          </Box>
          <ChatbotButton
            color="primary"
            onClick={handleChatbotClick}
            aria-label="Open Chatbot"
          >
            <ChatIcon />
          </ChatbotButton>
        </SearchContainer>

        <NewsSection>
          <Box maxWidth="lg" mx="auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                component="h2"
                align="center"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  mb: 6,
                  color: 'primary.main',
                }}
              >
                Popular News
              </Typography>

              <Grid container spacing={4}>
                {newsItems.map((news, index) => (
                  <Grid item xs={12} md={4} key={news.id} sx={{ display: 'flex' }}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      style={{ width: '100%' }}
                    >
                      <NewsCard>
                        <CardMedia
                          component="img"
                          height="200"
                          image={news.image}
                          alt={news.title}
                          sx={{ objectFit: 'cover' }}
                        />
                        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                          <Box>
                            <Typography variant="h5" gutterBottom>
                              {news.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                              {news.description}
                            </Typography>
                          </Box>
                          <Typography variant="caption" color="text.secondary">
                            {news.date}
                          </Typography>
                        </CardContent>
                      </NewsCard>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Box>
        </NewsSection>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home; 