import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CloudinaryContext } from 'cloudinary-react';
import { FirebaseProvider } from './utils/auth/FirebaseContext';
import Home from './components/Home/Home';
import 'semantic-ui-css/semantic.min.css';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Reset from './components/Login/Reset';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { CLOUD_NAME, UPLOAD_PRESET } from './config/config';

const App = () => {
    return (
        <FirebaseProvider>
            <CloudinaryContext
                cloudName={CLOUD_NAME}
                uploadPreset={UPLOAD_PRESET}
            >
                <Router basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <PrivateRoute exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/reset" component={Reset} />
                    </Switch>
                </Router>
            </CloudinaryContext>
        </FirebaseProvider>
    );
};

export default App;
