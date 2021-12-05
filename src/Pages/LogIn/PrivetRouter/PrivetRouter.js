import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivetRouter = ({ children, ...rest }) => {
    const {user,loading} =useAuth()
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