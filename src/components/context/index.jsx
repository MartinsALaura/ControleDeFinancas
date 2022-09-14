import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession} from '../../service/api';
//Auths :)

export const AuthContext = createContext();

export const AuthProvicer = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    //HOOK
    useEffect(() => {
        const recoveredUser = localStorage.getItem('user')

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser))
        }

        setLoading(false)
    }, [])

    const login = async (email, password) => {
        console.log('login auth', {email, password})
        
        const response = await createSession(email, password)

        console.log('login', response.data)

        const LoggedUser = response.data.user
        const token = response.data.token;
    
        localStorage.setItem("user", JSON.stringify(LoggedUser))
        localStorage.setItem("token", token)

        api.defaults.headers.Autorization = `Bearer ${token}`

        setUser(LoggedUser)
        navigate('/')
    }
    const logout = () => {
        console.log("logout")
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        api.defaults.headers.Autorization = null
        setUser(null)
        navigate('login')
    }
    
    return (
        <AuthContext.Provider value={{authenticated: !!user, user,loading, login, logout}}>
            {children}
        </AuthContext.Provider>//Provider => Prover
    )
}