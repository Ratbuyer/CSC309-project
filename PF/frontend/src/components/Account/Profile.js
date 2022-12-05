import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function Profile() {

    const [data, setData] = useState()

    const token = localStorage.getItem('token')
    
    useEffect(() => {
        fetch('http://localhost:8000/accounts/profile/', {
         method: 'GET', headers: {'Authorization': `Bearer ${token}`}
        })
        .then(response => response.json())
        .then(json => setData(json))

    }, [])

    if (!data) {
        return <h1>null</h1>
    }
    console.log(1)
    console.log(data)
    return <h1>{data.username}</h1>
}
