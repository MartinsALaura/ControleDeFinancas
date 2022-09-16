import Button from '@mui/material/Button';
import { AuthContext } from '../../context';
import './home.css';
import React, { useContext } from 'react';
import Header from '../../components/Header'
import Resume from '../../components/Resume';

const HomePage = () => {
    const { logout } = useContext(AuthContext);
    
    const handleLogout = () => {
        logout();
    }

    return (
        <div className='home-page'>
            <Header/>
            <Resume/><br/>
            <Button variant="outlined" onClick={handleLogout}>logout</Button>
        </div>
    )
}
export default HomePage;