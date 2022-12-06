import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Details.css';

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

export default function Details() {

    const studioId = useParams().studioId;
    const [info, setInfo] = useState();

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/studios/${studioId}/details`)
       .then(res => res.json())
       .then(json => {setInfo(json)})
   }, [studioId])





  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <main>


          
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
              {info && info.name}
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Details about {info && info.name}
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Class Schedule</Button>
          
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}


          <table>
        <thead>
            <tr>
                <th>Studio name</th>
                <th>Address</th>
                <th>Postal Code</th>
                <th>Phone Number</th>
                <th>Distance (km)</th>
                      
            </tr>
        </thead>
        <tbody>
            {info &&
                <>
                <tr>
                   
                    <td style={{margin: 14}}>{ info.name }</td>
                    <td>{ info.address }</td>
                    <td>{ info['postal code'] }</td>
                    <td>{ info['phone number'] }</td>
                    <td>{ Math.round(info['distance (km)']) }</td>
                         
                   
                </tr>
                </>
            }
        </tbody>
    </table> <br />


    <table>
        <thead>
            <tr>
                <th id="title">Amenities</th>
            </tr>
            <tr>
                <th>Type</th>
                <th>Quantity</th>
            </tr>
        </thead>

        <tbody>
            {info && info.amenities.map((x, index) => (
                <tr key={index}>
                    <td>{x.type}</td>
                    <td>{x.quantity}</td>
                </tr>
            
            )) 
            }
        </tbody>
    </table>

    {info && (info.images !== []) && info.images.map((x, index) => (
                
            <img class="center" src={ x }  alt="" width="500" height="600"/>
            )) 
        
    }

          
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