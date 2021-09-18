import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import Header from '../Header/Header';
import RightLinkManagementOpt from '../RightLinkManagementOpt/RightLinkManagementOpt';
import Main from '../Main/Main';
import userData from '../../assets/data.json';
import './Home.css';

const Home = () => {
    const [editRightLink, setEditRightLink] = useState(false);
    const [saveRightLink, setSaveRightLink] = useState(true);
    const [data, setData] = useState(userData);

    const handleEditClick = () => {
        console.log('edit click');
        setEditRightLink((previous) => !previous);
        setSaveRightLink((previous) => !previous);
    };

    const saveData = () => {
        // setEditRightLink((previous) => !previous);
        // setSaveRightLink((previous) => !previous);
        console.log('save Data', data);
    };
    const handleSaveClick = () => {
        console.log('save click');
        setEditRightLink((previous) => !previous);
        setSaveRightLink((previous) => !previous);
        saveData();
    };

    return (
        <Grid columns={2}>
            <Grid.Row centered>
                <Header />
            </Grid.Row>
            <Grid.Row className="RLContentRight">
                <RightLinkManagementOpt
                    handleEditClick={handleEditClick}
                    editRightLink={editRightLink}
                    handleSaveClick={handleSaveClick}
                    saveRightLink={saveRightLink}
                />
            </Grid.Row>
            <Grid.Row centered>
                <Main
                    editRightLink={editRightLink}
                    data={data}
                    setData={setData}
                />
            </Grid.Row>
        </Grid>
    );
};

export default Home;
