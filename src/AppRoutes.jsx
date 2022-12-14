import {
    BrowserRouter as Router,
    Route,
    Routes, 
    Navigate
} from 'react-router-dom';
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import { AuthProvider, AuthContext } from "./context";
import React, { useContext} from 'react';

const AppRoutes = () =>{
    const Private = ({children}) => {
        const {authenticated, loading} = useContext(AuthContext)

        if(loading){
            return <div className="loading">Carregando...</div>
        }

        if(!authenticated){
            return <Navigate to="/login"/>
        }

        return children
    }
     
    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route 
                        exact path='/login' 
                        element={<LoginPage/>}>
                    </Route>
                    <Route 
                        exact path='/' 
                        element={
                            <Private>
                                <HomePage/>
                            </Private>
                        }
                    ></Route>
                </Routes> 
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;