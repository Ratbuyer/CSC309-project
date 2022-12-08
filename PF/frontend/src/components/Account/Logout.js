import { Navigate } from 'react-router-dom';

export default function Logout() {

    if (localStorage.getItem('token')) {
        localStorage.removeItem('token')
    }

    window.location.reload(false)

    return <Navigate to='/login' />
}