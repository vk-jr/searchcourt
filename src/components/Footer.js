import React from 'react';
import { Box, Container, Typography, Divider, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
      id="footer-section"
    >
      <Container maxWidth="lg">
        <Divider sx={{ mb: 3 }} />
        <Grid container spacing={2} alignItems="center">
          {/* Team Name */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
              TEAM VXM
            </Typography>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', gap: 4, justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon color="primary" fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  Tech Hub, Digital City, IN 400001
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon color="primary" fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  team@vxm.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon color="primary" fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  +91 123 456 7890
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} SearchCourt. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 