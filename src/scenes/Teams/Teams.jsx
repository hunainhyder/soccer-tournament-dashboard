import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import teamsData from '../../data/teamsData';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: '80%',
  margin: '20px auto',
  padding: theme.spacing(2),
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: 12,
  backgroundColor: '#f9f9f9',
}));

const TeamAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  marginBottom: theme.spacing(2),
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
}));

const StatBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(1),
  minWidth: 80,
  borderRadius: 8,
  backgroundColor: '#ffffff',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
}));

const TeamStatsCard = ({ team }) => {
  return (
    <StyledCard>
      <CardContent style={{ textAlign: 'center' }}>
        <Grid container spacing={2} alignItems="center" direction="row">
          <Grid container sm={5}>
            <Grid item>
              <TeamAvatar alt={team.name} src={team.image} />
            </Grid>
            <br />
            <Grid item>
              <Typography variant="h1" component="div">
                {team.name}
              </Typography>
              <Typography variant="body2" color="primary">
                Matches Played: {team.matches}
              </Typography>
            </Grid>
          </Grid>
          <Grid container sm={7}>
            <Grid item container spacing={2} justifyContent="center">
              <Grid item>
                <StatBox>
                  <Typography variant="h6">{team.won}</Typography>
                  <Typography variant="body2" color="primary">
                    Wins
                  </Typography>
                </StatBox>
              </Grid>
              <Grid item>
                <StatBox>
                  <Typography variant="h6">{team.drawn}</Typography>
                  <Typography variant="body2" color="primary">
                    Draws
                  </Typography>
                </StatBox>
              </Grid>
              <Grid item>
                <StatBox>
                  <Typography variant="h6">{team.lost}</Typography>
                  <Typography variant="body2" color="primary">
                    Losses
                  </Typography>
                </StatBox>
              </Grid>
              <Grid item>
                <StatBox>
                  <Typography variant="h6">{team.won * 2}</Typography>
                  <Typography variant="body2" color="primary">
                    Points
                  </Typography>
                </StatBox>
              </Grid>
            </Grid>
          </Grid>
          
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

const App = () => (
  <Grid container>
    {teamsData.map((team) => {
        return <Grid item sm={12}>
            <TeamStatsCard key={team.id} team={team} />
        </Grid>
    })}
  </Grid>
);

export default App;
