import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import playerData from '../../data/playersData';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: '20px auto',
  padding: theme.spacing(2),
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
}));

const PlayerAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
  marginBottom: theme.spacing(2),
}));

const StatBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(1),
}));

const PlayerStatsCard = ({ player }) => {
  return (
    <StyledCard>
      <CardContent style={{textAlign: 'center'}}>
        <Grid container spacing={2} alignItems="center" direction="column">
          <Grid item>
            <PlayerAvatar alt={player.name} src={player.img} />
          </Grid>
          <Grid item>
            <Typography variant="h1" component="div">
              {player.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {player.position}
            </Typography>
          </Grid>
          <Grid item container spacing={2} justifyContent="center">
            <Grid item>
              <StatBox>
                <Typography variant="h6">{player.goals}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {player.position === 'Goalkeeper' ? 'Goals saved' : 'Goals'}
                </Typography>
              </StatBox>
            </Grid>
            <Grid item>
              <StatBox>
                <Typography variant="h6">{player.assists}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {player.position === 'Defender' ? 'Tackles' : 'Assists'}
                </Typography>
              </StatBox>
            </Grid>
            <Grid item>
              <StatBox>
                <Typography variant="h6">{player.matches}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Matches
                </Typography>
              </StatBox>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

export const Players = () => (
  <Grid container>
    {playerData.map((player) => {
        return <Grid item sm={4}>
            <PlayerStatsCard key={player.playerId} player={player} />
        </Grid>
    })}
  </Grid>
);

