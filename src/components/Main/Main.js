import React from 'react';
import { Tab } from 'semantic-ui-react';
import ProfileSection from '../Profile/Profile';
import SocialLinks from '../SocialLinks/SocialLinks';
import RightLinks from '../RightLinks/RightLinks';
import './main.css';

const Main = ({ editRightLink }) => {
    const panes = [
        {
            menuItem: 'Profile',
            render: () => (
                <Tab.Pane>
                    <ProfileSection editRightLink={editRightLink} />
                </Tab.Pane>
            ),
        },
        {
            menuItem: 'Social Links',
            render: () => (
                <Tab.Pane>
                    <SocialLinks editRightLink={editRightLink} />
                </Tab.Pane>
            ),
        },
        {
            menuItem: 'Links',
            render: () => (
                <Tab.Pane>
                    <RightLinks editRightLink={editRightLink} />
                </Tab.Pane>
            ),
        },
        {
            menuItem: 'Preview',
            render: () => <Tab.Pane>{/* <Preview /> */}</Tab.Pane>,
        },
    ];

    return (
        <div className="containerSize mainContainer">
            <Tab
                menu={{ fluid: true, vertical: true, tabular: true }}
                panes={panes}
            />
        </div>
    );
};

export default Main;
