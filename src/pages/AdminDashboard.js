import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import SearchIcon from '@mui/icons-material/Search';

const StatsCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const AdminDashboard = () => {
  // Mock data
  const stats = [
    {
      title: 'Total Users',
      value: '1,234',
      icon: <PersonIcon fontSize="large" color="primary" />,
    },
    {
      title: 'Total Judgments',
      value: '5,678',
      icon: <ArticleIcon fontSize="large" color="primary" />,
    },
    {
      title: 'Total Searches',
      value: '10,567',
      icon: <SearchIcon fontSize="large" color="primary" />,
    },
    {
      title: 'Active Users',
      value: '456',
      icon: <TrendingUpIcon fontSize="large" color="primary" />,
    },
  ];

  const recentJudgments = [
    {
      id: 1,
      title: 'Smith vs State of California',
      date: '2024-03-15',
      status: 'Pending',
      author: 'John Doe',
    },
    {
      id: 2,
      title: 'Johnson & Co. vs Department of Labor',
      date: '2024-03-14',
      status: 'Published',
      author: 'Jane Smith',
    },
    {
      id: 3,
      title: 'Environmental Protection Case',
      date: '2024-03-13',
      status: 'Under Review',
      author: 'Mike Johnson',
    },
  ];

  return (
    <Container>
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Admin Dashboard
        </Typography>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <StatsCard elevation={2}>
                <CardContent>
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    {stat.icon}
                    <Typography variant="h4" component="div">
                      {stat.value}
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" color="text.secondary">
                    {stat.title}
                  </Typography>
                </CardContent>
              </StatsCard>
            </Grid>
          ))}
        </Grid>

        {/* Recent Judgments Table */}
        <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Recent Judgments
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentJudgments.map((judgment) => (
                  <TableRow key={judgment.id}>
                    <TableCell>{judgment.title}</TableCell>
                    <TableCell>{judgment.date}</TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        variant="outlined"
                        color={
                          judgment.status === 'Published'
                            ? 'success'
                            : judgment.status === 'Pending'
                            ? 'warning'
                            : 'info'
                        }
                      >
                        {judgment.status}
                      </Button>
                    </TableCell>
                    <TableCell>{judgment.author}</TableCell>
                    <TableCell align="right">
                      <IconButton size="small" color="primary">
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton size="small" color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton size="small" color="error">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {/* Activity Log */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Recent Activity
          </Typography>
          <Box>
            {/* Add activity log content here */}
            <Typography color="text.secondary">
              Activity log will be displayed here...
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default AdminDashboard; 