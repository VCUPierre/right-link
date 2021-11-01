/* eslint-disable arrow-body-style */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FirebaseProvider } from './utils/auth/FirebaseContext';
import Home from './components/Home/Home';
import 'semantic-ui-css/semantic.min.css';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Reset from './components/Login/Reset';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const App = () => {
    return (
        <FirebaseProvider>
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <PrivateRoute exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/reset" component={Reset} />
                </Switch>
            </Router>
        </FirebaseProvider>
    );
};

export default App;
