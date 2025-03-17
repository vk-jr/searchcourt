import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Card,
  CardContent,
  IconButton,
  useMediaQuery,
  useTheme,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';

const FilterPanel = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '100%',
  position: 'sticky',
  top: theme.spacing(10),
}));

const SearchResultCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const FilterSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(3),
  background: 'rgba(255,255,255,0.95)',
}));

const ResultCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  transition: 'transform 0.2s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const Search = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [showFilters, setShowFilters] = useState(!isMobile);
  const [filters, setFilters] = useState({
    court: 'all',
    year: 'all',
    category: 'all',
  });

  // Mock search results
  const searchResults = [
    {
      id: 1,
      title: 'Smith vs State of California',
      court: 'Supreme Court',
      date: '2023-05-15',
      summary: 'Landmark case regarding environmental regulations...',
      tags: ['Environmental Law', 'Regulations'],
    },
    {
      id: 2,
      title: 'Johnson & Co. vs Department of Labor',
      court: 'Federal Court',
      date: '2023-04-22',
      summary: 'Employment law case concerning worker rights...',
      tags: ['Labor Law', 'Employment'],
    },
  ];

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 10, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Search Results
      </Typography>

      <FilterSection elevation={1}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Court</InputLabel>
              <Select
                name="court"
                value={filters.court}
                label="Court"
                onChange={handleFilterChange}
              >
                <MenuItem value="all">All Courts</MenuItem>
                <MenuItem value="supreme">Supreme Court</MenuItem>
                <MenuItem value="high">High Court</MenuItem>
                <MenuItem value="district">District Court</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Year</InputLabel>
              <Select
                name="year"
                value={filters.year}
                label="Year"
                onChange={handleFilterChange}
              >
                <MenuItem value="all">All Years</MenuItem>
                <MenuItem value="2023">2023</MenuItem>
                <MenuItem value="2022">2022</MenuItem>
                <MenuItem value="2021">2021</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={filters.category}
                label="Category"
                onChange={handleFilterChange}
              >
                <MenuItem value="all">All Categories</MenuItem>
                <MenuItem value="civil">Civil Law</MenuItem>
                <MenuItem value="criminal">Criminal Law</MenuItem>
                <MenuItem value="constitutional">Constitutional Law</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </FilterSection>

      <Box>
        {searchResults.map((result) => (
          <ResultCard key={result.id} elevation={2}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {result.title}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                {result.court} • {result.date}
              </Typography>
              <Typography variant="body2" paragraph>
                {result.summary}
              </Typography>
              <Box>
                {result.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{ mr: 1 }}
                  />
                ))}
              </Box>
            </CardContent>
          </ResultCard>
        ))}
      </Box>
    </Container>
  );
};

export default Search; 