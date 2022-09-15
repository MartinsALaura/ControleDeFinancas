import Button from '@mui/material/Button';
import { AuthContext } from '../../context';
import './home.css';
import React, { useContext } from 'react';
import Header from '../../components/Header'
import Resume from '../../components/Resume';

const HomePage = () => {
    const { authenticated,logout } = useContext(AuthContext);
    
    const handleLogout = () => {
        logout();
    }

    return (
        <div className='home-page'>
            <Header/>
            <Resume/>
            <p>{String(authenticated)}</p>
            <Button variant="outlined" onClick={handleLogout}>logout</Button>
        </div>
    )
}
export default HomePage;