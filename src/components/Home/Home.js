import React from 'react';
import { Grid } from 'semantic-ui-react';
import Header from '../Header/Header';
import Main from '../Main/Main';

const Home = () => {
    return (
        <Grid centered columns={2}>
            <Grid.Row>
                <Header />
            </Grid.Row>
            <Grid.Row >
                <Main />
            </Grid.Row>
        </Grid>
    );
};

export default Home;
