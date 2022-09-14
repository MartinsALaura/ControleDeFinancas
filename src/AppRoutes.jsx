import {
    BrowserRouter as Router,
    Route,
    Routes, 
    Navigate
} from 'react-router-dom';
import LoginPage from "./components/login";
import HomePage from "./components/home";
import { AuthProvicer, AuthContext } from "./components/context";
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
            <AuthProvicer>
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
            </AuthProvicer>
        </Router>
    )
}

export default AppRoutes;