import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'white',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  margin: theme.spacing(0, 1),
  '&:hover': {
    backgroundColor: 'rgba(25, 118, 210, 0.04)',
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  letterSpacing: '1px',
  fontWeight: 'bold',
  background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.02)',
    transition: 'transform 0.2s ease',
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchClick = () => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home with glow parameter
      navigate('/?glow=true');
    } else {
      // If on home page, just trigger glow effect
      window.history.replaceState({}, '', '/?glow=true');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleAboutClick = () => {
    if (location.pathname !== '/') {
      navigate('/?section=about');
    } else {
      const footerElement = document.getElementById('footer-section');
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <StyledAppBar position="fixed">
      <Toolbar sx={{ py: 1 }}>
        <LogoText
          variant="h4"
          component="div"
          sx={{ flexGrow: 1 }}
          onClick={() => navigate('/')}
        >
          SearchCourt
        </LogoText>
        <Box>
          <NavButton onClick={() => navigate('/')}>Home</NavButton>
          <NavButton onClick={handleSearchClick}>Search</NavButton>
          <NavButton onClick={() => navigate('/chatbot')}>Chatbot</NavButton>
          <NavButton onClick={() => navigate('/news')}>Popular News</NavButton>
          <NavButton onClick={handleAboutClick}>About Us</NavButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header; 