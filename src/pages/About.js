import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Divider,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
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

const ContactSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  background: 'rgba(255, 255, 255, 0.9)',
  borderRadius: theme.spacing(2),
}));

const About = () => {
  const teamMembers = [
    {
      name: "Team Member 1",
      role: "Role 1",
      image: "/path-to-image-1.jpg", // Add your team member images
      linkedin: "https://linkedin.com/in/member1",
      github: "https://github.com/member1",
      email: "member1@example.com"
    },
    {
      name: "Team Member 2",
      role: "Role 2",
      image: "/path-to-image-2.jpg",
      linkedin: "https://linkedin.com/in/member2",
      github: "https://github.com/member2",
      email: "member2@example.com"
    },
    {
      name: "Team Member 3",
      role: "Role 3",
      image: "/path-to-image-3.jpg",
      linkedin: "https://linkedin.com/in/member3",
      github: "https://github.com/member3",
      email: "member3@example.com"
    }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: 12,
        pb: 6,
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
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
            TEAM VXM
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <StyledCard>
                    <CardMedia
                      component="img"
                      height="300"
                      image={member.image}
                      alt={member.name}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {member.name}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        {member.role}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <IconButton href={member.linkedin} target="_blank" color="primary">
                          <LinkedInIcon />
                        </IconButton>
                        <IconButton href={member.github} target="_blank" color="primary">
                          <GitHubIcon />
                        </IconButton>
                        <IconButton href={`mailto:${member.email}`} color="primary">
                          <EmailIcon />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </StyledCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <ContactSection elevation={3}>
            <Typography variant="h4" gutterBottom align="center">
              Contact Us
            </Typography>
            <Divider sx={{ mb: 4 }} />
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Our Location
                </Typography>
                <Typography paragraph>
                  Your Address Line 1<br />
                  Your Address Line 2<br />
                  City, State, ZIP
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Get in Touch
                </Typography>
                <Typography paragraph>
                  Email: team@vxm.com<br />
                  Phone: +1 234 567 890<br />
                  Working Hours: 9:00 AM - 6:00 PM
                </Typography>
              </Grid>
            </Grid>
          </ContactSection>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 