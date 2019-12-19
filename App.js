import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Gallery, GalleryImage } from 'react-gesture-gallery';
import { createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const events = [
  {
    value: '1',
    label: 'EVENT 1',
  },
  {
    value: '2',
    label: 'EVENT 2',
  },
  {
    value: '3',
    label: 'EVENT 1',
  },
  {
    value: '4',
    label: 'EVENT 1',
  },
];

const images = [
  'http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png',
  'http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png',
  'http://www.icons101.com/icon_png/size_256/id_79394/youtube.png',
];

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#D98825',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#F2B84B',
      main: '#D98825',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  card: {
    minWidth: 275,
  },
  cardbullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  cardtitle: {
    fontSize: 14,
  },
  cardpos: {
    marginBottom: 12,
  },
  gridroot: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 700,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  registerpaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  eventroot: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function ButtonAppBar() {
  const[index,setIndex] = React.useState(0)
  const classes = useStyles();
  const [events, setEvents] = React.useState('1');  

  const handleChange = event => {
    setEvents(events.target.value);
  };


  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 2) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <ThemeProvider>
    <div className={classes.root}>
      <AppBar position="sticky" color='secondary'>
        <Toolbar>
          <Typography variant="h5" className={classes.title} align='center'>
            AAHVAAN
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    <Paper>
      <Gallery
        style={{
          background: "grey",
          height: "90vh",
          width: '100%'
        }}
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {images.map(image => (
          <GalleryImage objectFit="contain" key={image} src={image} />
        ))}
      </Gallery>
    </Paper>
    <div className={classes.root}>
      <AppBar position="sticky" color='secondary'>
        <Toolbar>
          <Typography variant="h5" className={classes.title} align='center'>
            REGISTER
          </Typography>
        </Toolbar>
      </AppBar>
    </div>

    <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.registerpaper}>
          <div className={classes.root}>
            <AppBar position="relative" color='secondary'>
              <Toolbar>
                <Typography variant="h5" className={classes.title} align='center'>
                  SINGLE
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
          
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.registerpaper}>
          <div className={classes.root}>
              <AppBar position="relative" color='secondary'>
                <Toolbar>
                  <Typography variant="h5" className={classes.title} align='center'>
                    TEAM
                  </Typography>
                </Toolbar>
              </AppBar>
            </div>
          </Paper>
        </Grid>
    </Grid>

    <Paper>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Delhi Technological University
          </Typography>
          <Typography variant="h5" component="h2" color="textSecondary">
            AAHVAAN
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            @aahvaan
          </Typography>
          <Typography variant="body2" component="p" color="textSecondary">
            THIS IS FOOTER
            <br />
            {'"sports spirit"'}
          </Typography>
        </CardContent>
        </Card>   
      </Paper>
    </ThemeProvider>
  );
}

