/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { FirebaseContext } from '../../utils/auth/FirebaseContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { currentUser } = useContext(FirebaseContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                currentUser ? (
                    <Component {...rest} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
