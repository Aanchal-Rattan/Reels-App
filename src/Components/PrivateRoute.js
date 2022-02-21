import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

function PrivateRoute({ component: Component, ...rest }) {
    const { user } = useContext(AuthContext)
    return (
        <Routes>
            <Route {...rest} render={props => {
                return user ? <Component {...props} /> : <Navigate to="login" />
            }} />
        </Routes>

    )
}

export default PrivateRoute 