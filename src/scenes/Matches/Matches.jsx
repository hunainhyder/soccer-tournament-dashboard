import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import teamsData from '../../data/teamsData';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: '80%',
  margin: '20px auto',
  padding: theme.spacing(2),
  boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
  borderRadius: 16,
  backgroundColor: 'primary',
}));

const TeamBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  borderRadius: 8,
  backgroundColor: 'blueAccent',
}));

const ScoreBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(1),
  borderRadius: 8,
  backgroundColor: 'grey',
  margin: theme.spacing(2, 0),
}));

const MatchCard = ({ match }) => {
  return (
    <StyledCard>
      <CardContent>
        <Grid container spacing={2} alignItems="center" direction="column">
          <Grid item container spacing={2} justifyContent="center">
            <Grid item xs={5}>
              <TeamBox>
                <Typography variant="h6">{match.team1.name}</Typography>
                <img src={match.team1.image} alt={match.team1.name} style={{ width: 50 }} />
              </TeamBox>
            </Grid>
            <Grid item xs={2}>
              <ScoreBox>
                <Typography variant="h4">{match.score}</Typography>
              </ScoreBox>
            </Grid>
            <Grid item xs={5}>
              <TeamBox>
                <Typography variant="h6">{match.team2.name}</Typography>
                <img src={match.team2.image} alt={match.team2.name} style={{ width: 50 }} />
              </TeamBox>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              {match.date} - {match.venue}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

// Sample usage
const matches = [
    {
        id: 1,
        team1: teamsData[0],
        team2: teamsData[1],
        score: '2 - 1',
        date: '12 June 2024',
        venue: 'Camp Nou',
    },
    {
        id: 1,
        team1: teamsData[2],
        team2: teamsData[0],
        score: 'Soon',
        date: '13 June 2024',
        venue: 'Camp Nou',
    },
    {
        id: 1,
        team1: teamsData[1],
        team2: teamsData[2],
        score: 'Soon',
        date: '14 June 2024',
        venue: 'Camp Nou',
    },
    {
        id: 1,
        team1: teamsData[0],
        team2: { name: 'TBD', logo: 'https://via.placeholder.com/250' },
        score: 'Final',
        date: '16 June 2024',
        venue: 'Argentina',
    },
];

export const Matches = () => (
    <Grid container>
      {matches.map((match) => {
          return <Grid item sm={12}>
              <MatchCard key={match.id} match={match} />
          </Grid>
      })}
    </Grid>
  );