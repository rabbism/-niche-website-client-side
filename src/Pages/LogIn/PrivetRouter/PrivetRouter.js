import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from './../../../Hook/useAuth';

const PrivetRouter = ({ children, ...rest }) => {
    const {user} =useAuth
    return (
        <Route
            {...rest}
                render={({ location }) =>user.email || user.displayName ? children
                :
                <Redirect 
                to={{
                    pathname: "/login",
                    state: { from: location }
                  }}
                /> 
                }
            >
                
            </Route>
    );
};

export default PrivetRouter;