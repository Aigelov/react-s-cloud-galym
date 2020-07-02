import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} lg={3} xl={3}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h6">
              Мои камеры
            </Typography>
            <Typography variant="h5" component="h2">
              20
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4} lg={3} xl={3}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h6">
              Мои события
            </Typography>
            <Typography variant="h5" component="h2">
              2000
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4} lg={3} xl={3}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h6">
              Доступных камер
            </Typography>
            <Typography variant="h5" component="h2">
              15
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4} lg={3} xl={3}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h6">
              Недоступных камер
            </Typography>
            <Typography variant="h5" component="h2">
              5
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
