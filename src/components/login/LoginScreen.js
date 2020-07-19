import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ( { history }) => {


    const { dispatch } = useContext( AuthContext );

    // console.log(context);

    const lastPath = localStorage.getItem('lastPath') || '/';

    const handleLogin = () => {
        // history.push('/');
        
        dispatch({
            type: types.LOGIN,
            payload: {
                name: 'Alexis'
            }
        });

        history.replace(lastPath);
    }

    return (
        <div className="container mt-5">
            <h1 className="h1">Login</h1>
            <hr className="hr" />
            <button
             className="btn btn-primary"
             onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
