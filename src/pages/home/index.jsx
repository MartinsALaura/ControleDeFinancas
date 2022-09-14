import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context';

const HomePage = () => {
    const { authenticated,logout } = useContext(AuthContext);
    
    const handleLogout = () => {
        logout();
    }

    return (
        <>
            <h1>HomePage</h1>
            <p>{String(authenticated)}</p>
            <button onClick={handleLogout}>logout</button>
        </>
    )}
export default HomePage;