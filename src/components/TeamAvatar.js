import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

import team from '../data/team.json'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: 'auto',
  },
  container: {
    maxWidth: 240,
    textAlign: 'center',
  },
  grid: {
    padding: theme.spacing(1),
    textAlign: 'center',
  },
  typography: {
    fontSize: '1.25rem',
    fontWeight: 600,
  },
  userGrid: {
    padding: 0,
    textAlign: 'center',
  },
  username: {
    fontSize: '1rem',
  },
}));

export default () => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      {team && team.map((x, i) =>
        <Grid key={i} className={classes.container} container>
          <Grid item xs={12} className={classes.grid}>
            <Container maxWidth="sm">
              <Avatar alt={x.name} className={classes.avatar} src={x.avatar} />
            </Container>        
          </Grid>           
          <Grid item xs={12} className={classes.userGrid}>
            <Container maxWidth="sm">
              <Typography className={classes.typography} variant="subtitle2" align="center">
                {x.name}
              </Typography>         
            </Container>        
          </Grid>           
          <Grid item xs={12}>
            <Container maxWidth="sm">
              <MuiLink color="inherit" href={x.social_url} target="_blank">
                <Typography className={classes.typography, classes.username} variant="subtitle2" align="center">
                  @{x.username}
                </Typography>         
              </MuiLink>
            </Container>        
          </Grid>           
        </Grid>           
      )}
    </div>
  )
}