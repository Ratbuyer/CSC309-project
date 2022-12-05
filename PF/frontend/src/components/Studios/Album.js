
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
import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {

    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [studios, setStudios] = useState();

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

    useEffect(() => {
         fetch(`http://127.0.0.1:8000/studios/all/?longitude=${longitude}&latitude=${latitude}`)
        .then(res => res.json())
        .then(json => {setStudios(json.results)})
      
          
    }, [longitude, latitude])




  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <main>


            <label for="longitude"> Longitude </label>
            <input id="longitude" type="text" onChange={(event) => {
                 updateLongitude(event.target.value)
                }
            } />

            <label for="latitude"> Latitude </label>
            <input id="latitude" type="text" onChange={(event) => {
                 updateLatitude(event.target.value)
                }
            } />
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
             <Button variant="contained">Select your location</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}


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
                      Distance from you: {card.distance}
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
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}