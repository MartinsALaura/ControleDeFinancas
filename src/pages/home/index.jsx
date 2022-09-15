import * as React from 'react';
import {useContext} from 'react'
import Button from '@mui/material/Button';
import { AuthContext } from '../../context';
import './home.css';

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