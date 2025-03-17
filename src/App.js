import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './pages/Search';
import JudgmentDetail from './pages/JudgmentDetail';
import Chatbot from './pages/Chatbot';
import PopularNews from './pages/PopularNews';
import AdminDashboard from './pages/AdminDashboard';
import About from './pages/About';

function App() {
  const location = useLocation();
  const isChatbotPage = location.pathname === '/chatbot';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/judgment/:id" element={<JudgmentDetail />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/news" element={<PopularNews />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
      {!isChatbotPage && <Footer />}
    </Box>
  );
}

export default App; 