import React from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  Button,
  Chip,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import VerifiedIcon from '@mui/icons-material/Verified';
import { motion } from 'framer-motion';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import GetAppIcon from '@mui/icons-material/GetApp';

const DetailContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(2),
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
}));

const MetadataItem = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const BlockchainVerification = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.success.light,
  color: theme.palette.success.contrastText,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
}));

const HighlightedText = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.main,
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.spacing(0.5),
  display: 'inline-block',
  margin: theme.spacing(0.5),
}));

const ActionButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const DetailPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  background: 'rgba(255,255,255,0.95)',
}));

const JudgmentDetail = () => {
  // Mock data - replace with actual data from your backend
  const judgment = {
    title: 'Smith vs State of California',
    court: 'Supreme Court',
    date: '2023-05-15',
    judge: 'Hon. Justice Williams',
    citation: '[2023] SC 123',
    tags: ['Environmental Law', 'Regulations', 'Public Interest'],
    summary: 'This landmark case addresses critical environmental regulations...',
    facts: 'The case arose from a dispute between Smith Industries and the State of California regarding compliance with environmental protection measures...',
    judgment: 'The Supreme Court, in a unanimous decision, upheld the State\'s authority to impose stricter environmental regulations...',
    implications: 'This judgment sets a precedent for environmental regulation enforcement across all states...',
    blockchainId: '0x1234...5678',
    keyPoints: [
      'Digital privacy rights',
      'Constitutional interpretation',
      'Law enforcement guidelines',
    ],
    relatedCases: [
      'Privacy vs State (2022)',
      'Digital Rights Foundation Case (2021)',
      'Constitutional Privacy Matter (2020)',
    ],
  };

  return (
    <Container>
      <DetailPaper elevation={3}>
        <Box mb={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            {judgment.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {judgment.court} • {judgment.date} • {judgment.citation}
          </Typography>
          <Box mt={2}>
            {judgment.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                sx={{ mr: 1, mb: 1 }}
              />
            ))}
          </Box>
        </Box>

        <Box mb={3} display="flex" justifyContent="flex-end">
          <ActionButton
            variant="outlined"
            startIcon={<ShareIcon />}
          >
            Share
          </ActionButton>
          <ActionButton
            variant="outlined"
            startIcon={<BookmarkBorderIcon />}
          >
            Save
          </ActionButton>
          <ActionButton
            variant="contained"
            startIcon={<GetAppIcon />}
          >
            Download PDF
          </ActionButton>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Summary
            </Typography>
            <Typography paragraph>
              {judgment.summary}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Facts of the Case
            </Typography>
            <Typography paragraph>
              {judgment.facts}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Judgment
            </Typography>
            <Typography paragraph>
              {judgment.judgment}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Implications
            </Typography>
            <Typography paragraph>
              {judgment.implications}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Bench
            </Typography>
            <Typography>
              {judgment.judge}
            </Typography>
          </Grid>
        </Grid>
      </DetailPaper>
    </Container>
  );
};

export default JudgmentDetail; 