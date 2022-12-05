import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useState, useEffect } from "react";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Login() {

    const [error, setError] = useState([]);

    useEffect(() => {

    }, [error])

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    
                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            size = 'small'
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="username"
                            name="username"
                        />
                        <TextField
                            size = 'small'
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                        />
                        <TextField
                            size = 'small'
                            margin="normal"
                            required
                            fullWidth
                            name="password1"
                            label="Repeat password"
                            type="password"
                            id="password1"
                        />

                        <TextField
                            size = 'small'
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="email"
                            type="email"
                            id="email"
                        />

                        <TextField
                            size = 'small'
                            margin="normal"
                            required
                            fullWidth
                            id="first_name"
                            label="first name"
                            name="first_name"
                        />

                        <TextField
                            size = 'small'
                            margin="normal"
                            required
                            fullWidth
                            id="last_name"
                            label="last name"
                            name="last_name"
                        />
                        
                        <TextField
                            size = 'small'
                            margin="normal"
                            required
                            fullWidth
                            id="phone"
                            label="phone number"
                            name="phone"
                        />
                        
                        <label>Avatar</label>
                        <input type="file" id="avatar" name="avatar"></input>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    {"Already have account? Login here"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    <div style={{ color: 'red', margin: 50 }}> {error} </div>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}