import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function Profile() {

    const [data, setData] = useState()
    const [redirect, setRedirect] = useState(false)

    const token = localStorage.getItem('token')

    useEffect(() => {
        fetch('http://localhost:8000/accounts/profile/', {
         method: 'GET', headers: {'Authorization': `Bearer ${token}`}
        })
        .then(response => {
            if (response.status == 200) return response.json()
            else setRedirect(true)
        })
        .then(json => setData(json))

    }, [])

    if (redirect) return <Navigate to='/login' />

    if (!data) {
        return
    }

    return 
}
