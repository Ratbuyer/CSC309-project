
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, {useState, useEffect, useMemo} from "react";
import { Link } from 'react-router-dom';
import './Album.css';
import {GoogleMap, useLoadScript, MarkerF} from '@react-google-maps/api';
//import Map from './Map';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();



export default function Album() {
    
    const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyA7SCCkx8BeyK13Jo-NDiGPkCDqxjpGt14"});

    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [studios, setStudios] = useState();

    const [markers, setMarkers] = useState()

    //const markerTest = useMemo(() => ({ lat: 44, lng: 80 }), []); 

    
    useEffect(() => {
      if (studios) {
       
        <GoogleMap zoom={10} center={{lat: 44, lng: -80}} mapContainerClassName="map-container">
            {
            studios.map((studio, index) => {
            <MarkerF key={index} name={studio.name} position={{lat: studio.latitude, lng: studio.longitude}} />
            })}
        </GoogleMap>
       
      }
    }, [isLoaded, studios]);
  

    
    const getMarkers = () => {
      return (
          studios.map((studio, index) => {
          <MarkerF key={Math.random()} name={studio.name} position={{lat: studio.latitude, lng: studio.longitude}} />
     
          }));
    }


    const updateLongitude = value => {
        if (value) {
            setLongitude(value);
        }  
    }

    const updateLatitude = value => {
        if (value) {
            setLatitude(value);
        } 
    }

    

    getLocation();
    
    useEffect(() => {
         fetch(`http://127.0.0.1:8000/studios/all/?longitude=${longitude}&latitude=${latitude}`)
        .then(res => res.json())
        .then(json => {setStudios(json.results)})
      
        
    }, [longitude, latitude])


    var x = document.getElementById("demo");

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
        
      } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }

    function showPosition(position) {
      
      if (x) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        
        x.innerHTML = "Your location:" + "<br>Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;
      }
      
    }

    function showError(error) {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          x.innerHTML = "User denied the request for Geolocation." + " <a href='https://support.google.com/chrome/answer/142065?hl=en'>Please enable this feature in setting.</a>"
          break;
        case error.POSITION_UNAVAILABLE:
          x.innerHTML = "Location information is unavailable."
          break;
        case error.TIMEOUT:
          x.innerHTML = "The request to get user location timed out."
          break;
        case error.UNKNOWN_ERROR:
          x.innerHTML = "An unknown error occurred."
          break;
      }
    }

  if (!studios) return;

  return (
    <>
    
    <ThemeProvider theme={theme}> 
    
      <CssBaseline />
      
      <main>

        <p id="demo"></p>

        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Studios
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              All studios of Toronto Fitness Club
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
             
            </Stack>
                          
          </Container>
        

        </Box>
        
      
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}

        
        
        {isLoaded && studios &&
            <GoogleMap zoom={10} center={{lat: 44, lng: -80}} mapContainerClassName="map-container">
              <MarkerF key={1} position={{lat: 35, lng:53}}></MarkerF>
              {
              studios.map((studio, index) => {
              console.log(studio.latitude,  studio.longitude);
                
              
              <MarkerF key={Math.random()} name={studio.name} position={{lat: studio.latitude, lng: studio.longitude}} />
              
              })}
            </GoogleMap>  
        }  
        
          

          

          <Grid container spacing={4}>

            
            {studios && studios.map((card, index) => (
              
              <Grid item key={index} xs={12} sm={6} md={4}>

                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      
                      Address: {card.address} <br/>
                      Distance from you: {Math.round(card.distance)}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`${card.id}/details`} size="small">View</Link>
                  </CardActions>
                </Card>


              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      

    </ThemeProvider>
    
    </>
  );
}

