import Button from '@mui/material/Button';
import { AuthContext } from '../../context';
import './home.css';
import React, { useContext } from 'react';

const HomePage = () => {
    const { authenticated,logout } = useContext(AuthContext);
    
    const handleLogout = () => {
        logout();
    }

    return (
        <div className='home-page'>
            <h1>HomePage</h1>
            <p>{String(authenticated)}</p>
            <Button variant="outlined" onClick={handleLogout}>logout</Button>
        </div>
    )}
export default HomePage;