import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import 'semantic-ui-css/semantic.min.css';

function App() {
    return (
        // <FirebaseContext.Provider value={new Firebase()}>
        <Router>
            <Switch>
                {/* <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route> */}
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
        // </FirebaseContext.Provider>
    );
}

export default App;
