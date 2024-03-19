import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GoogleMapReact from 'google-map-react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',  
    textAlign: 'center',
  },
  mapContainer: {
    width: '80%',
    height: '60vh',  
    marginTop: theme.spacing(4),
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[5],

    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const Map = () => {

  const googleMapApiKey = 'YOUR_API_KEY_HERE';
  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleMapApiKey }}
        defaultCenter={center}
        defaultZoom={12}
      ></GoogleMapReact>
    </div>
  );
};

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Bienvenue sur ce checkpoint
        </Typography>
        <div className={classes.mapContainer}>
          <Map />
        </div>
      </Container>
    </div>
  );
};

export default App;
