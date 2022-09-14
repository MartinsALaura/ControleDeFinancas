import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Auths :)
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
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

        console.log('login', { email, password})

        const LoggedUser = {
            id: '123', 
            email,
        }
    
        localStorage.setItem("user", JSON.stringify(LoggedUser))

        if(password === 'secret') {
            setUser(LoggedUser)
            navigate('/')
        }
    }
    const logout = () => {
        console.log("logout")
        localStorage.removeItem('user')
        setUser(null)
        navigate('login')
    }
    
    return (
        <AuthContext.Provider value={{authenticated: !!user, user,loading, login, logout}}>
            {children}
        </AuthContext.Provider>//Provider => Prover
    )
}