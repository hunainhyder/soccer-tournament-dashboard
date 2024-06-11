// import { Box, Typography, useTheme } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { tokens } from '../../theme'
// import { teamsData } from '../../data/teamsData'

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 400,
    margin: 'auto',
    marginBottom: 20,
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  },
  gradientBackground: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pos: {
    marginBottom: 12,
  },
});

const PlayerCard = ({ player }) => {
  const classes = useStyles();
  const { name, position, nationality, goals, assists } = player;

  return (
    <Card className={`${classes.card} ${classes.gradientBackground}`}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {name}
        </Typography>
        <Typography className={classes.pos} color="inherit">
          {position} | {nationality}
        </Typography>
        <Typography variant="body2" component="p" color="inherit">
          Goals: {goals}
        </Typography>
        <Typography variant="body2" component="p" color="inherit">
          Assists: {assists}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
