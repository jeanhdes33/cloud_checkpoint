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
    height: '100vh',  // Hauteur de 100% de la vue
    textAlign: 'center',
  },
  mapContainer: {
    width: '80%',
    height: '60vh',  // Hauteur de 60% de la vue
    marginTop: theme.spacing(4),
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[5],
    // Centrage horizontal
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const Map = () => {
  // Change these values with your own Google Maps API key and location
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
          Bienvenue sur notre page d'atterrissage
        </Typography>
        <div className={classes.mapContainer}>
          <Map />
        </div>
      </Container>
    </div>
  );
};

export default App;
