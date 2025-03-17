import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Chip,
  Container,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const NewsCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    cursor: 'pointer',
  },
}));

const NewsMedia = styled(CardMedia)(({ theme }) => ({
  paddingTop: '56.25%', // 16:9 aspect ratio
}));

const PopularNews = () => {
  // Mock news data
  const newsArticles = [
    {
      id: 1,
      title: 'Cyber Fraud Case',
      image: 'https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=800&q=80',
      date: '2024-03-15',
      category: 'Criminal Law',
      summary: 'Major cyber fraud case involving cryptocurrency theft and international hacking network. The case highlighted the need for stronger cybersecurity measures...',
    },
    {
      id: 2,
      title: 'Money Laundering Case',
      image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=800&q=80',
      date: '2024-03-14',
      category: 'Criminal Law',
      summary: 'High-profile money laundering case involving multiple shell companies and cross-border transactions. The investigation led to significant asset recovery...',
    },
    {
      id: 3,
      title: 'Corporate Fraud Case',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
      date: '2024-03-13',
      category: 'Criminal Law',
      summary: 'Major corporate fraud case uncovering systematic financial misrepresentation and insider trading. The case resulted in new corporate governance standards...',
    },
    {
      id: 4,
      title: 'Bank Fraud Case',
      image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=800&q=80',
      date: '2024-03-12',
      category: 'Criminal Law',
      summary: 'Extensive bank fraud scheme involving forged documents and identity theft. The investigation led to the recovery of millions in stolen funds...',
    },
  ];

  return (
    <Container>
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{
          fontWeight: 'bold',
          color: 'primary.main',
          textAlign: 'center',
          mb: 4
        }}>
          Popular Criminal Cases
        </Typography>
        <Grid container spacing={4}>
          {newsArticles.map((article) => (
            <Grid item xs={12} sm={6} md={3} key={article.id}>
              <NewsCard elevation={3}>
                <NewsMedia
                  image={article.image}
                  title={article.title}
                  sx={{
                    height: 240,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(20%) brightness(90%)',
                    transition: 'filter 0.3s ease-in-out',
                    '&:hover': {
                      filter: 'grayscale(0%) brightness(100%)',
                    }
                  }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Box>
                    <Box mb={1} display="flex" justifyContent="space-between" alignItems="center">
                      <Chip
                        label={article.category}
                        size="small"
                        color="error"
                        sx={{ mb: 1 }}
                      />
                      <Typography variant="caption" color="text.secondary">
                        {article.date}
                      </Typography>
                    </Box>
                    <Typography variant="h6" gutterBottom component="h3" sx={{
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      height: '2.8em',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}>
                      {article.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{
                      height: '4.5em',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                    }}>
                      {article.summary}
                    </Typography>
                  </Box>
                </CardContent>
              </NewsCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default PopularNews; 