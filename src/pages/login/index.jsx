import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

//CSS
import './login.css';

const LoginPage = (props) => {
    const { login } = useContext(AuthContext);
    
    //hooks
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password)//integração com o contexto / api
    }
    
    return (
        <div id='login'>
            <h1 className='title'>Login</h1>
            <form className='form'onSubmit={handleSubmit}>
                <div className='field'>
                    <TextField 
                        label="Email" 
                        variant="standard"
                        type='email' 
                        name='email' 
                        id='email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Digite seu email'
                    />
                </div>
                <div className='field'>
                    <TextField
                        label='Password'
                        variant="standard"
                        type='password'
                        name='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        
                    />
                </div>
                <div className='actions'>
                    <Button variant="outlined" type='submit'>Enter</Button>
                </div>

            </form>
        </div>
    )
}
export default LoginPage;