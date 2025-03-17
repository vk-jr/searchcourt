import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingTop: '56.25%', // 16:9 aspect ratio
  backgroundColor: theme.palette.grey[200],
  overflow: 'hidden',
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0,
  transition: 'opacity 0.5s ease-in-out',
  '&.active': {
    opacity: 1,
  },
}));

const crimeData = [
  {
    id: 1,
    title: 'Cyber Fraud Case',
    images: [
      '/images/cyber-crime-1.jpg',
      '/images/cyber-crime-2.jpg'
    ],
    details: 'A major cyber fraud case where hackers stole millions through phishing scams. The accused used advanced AI-generated fake identities to deceive financial institutions.'
  },
  {
    id: 2,
    title: 'High-Profile Murder Case',
    images: [
      '/images/murder-case-1.jpg',
      '/images/murder-case-2.jpg'
    ],
    details: 'A sensational murder case where forensic analysis played a key role in identifying the suspect. The judgment set a new legal precedent in homicide cases.'
  },
  {
    id: 3,
    title: 'Landmark Corruption Case',
    images: [
      '/images/corruption-1.jpg',
      '/images/corruption-2.jpg'
    ],
    details: 'A landmark corruption case involving high-ranking officials and money laundering. The Supreme Court\'s ruling introduced stricter regulations for corporate transparency.'
  }
];

const CrimeCard = ({ crime }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === crime.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [crime.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledCard>
        <ImageContainer>
          {crime.images.map((image, index) => (
            <StyledCardMedia
              key={index}
              image={image}
              className={index === currentImageIndex ? 'active' : ''}
            />
          ))}
        </ImageContainer>
        <CardContent>
          <Typography variant="h5" gutterBottom component="div">
            {crime.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {crime.details}
          </Typography>
        </CardContent>
      </StyledCard>
    </motion.div>
  );
};

const PopularNews = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            mb: 6,
            background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Popular Section
        </Typography>

        <Grid container spacing={4}>
          {crimeData.map((crime) => (
            <Grid item key={crime.id} xs={12} md={4}>
              <CrimeCard crime={crime} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PopularNews; 