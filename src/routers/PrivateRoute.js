import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
    isAuthenticated,
    component:Component,
    ...rest
}) => {

    const { location: { pathname = '/', search = '' } } = rest;
    console.log(rest);
    localStorage.setItem('lastPath', `${pathname}${search}`);

    return (
        <Route 
            {...rest}
            component={ (props) =>(
                    (isAuthenticated) ? 
                        <Component {...props} />
                        : 
                        <Redirect to="/login" />
                )
            }
        />
    )
}


PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}