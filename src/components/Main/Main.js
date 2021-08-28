import React from 'react';
import { Segment, Header, Tab } from 'semantic-ui-react';
import {
    // LOGO,
    LINK_GROUP_1,
} from '../../assets/data';
import ProfileSection from '../Profile/Profile';
import SocialLinks from '../SocialLinks/SocialLinks';
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
                    <Segment className="LinkGroup 1">
                        <Header content="Link Group" />
                        <Segment>
                            <pre>
                                <b>Group Name:</b>
                                {LINK_GROUP_1.groupName}
                            </pre>
                        </Segment>
                        <Segment>
                            <pre>
                                <b>Group Color:</b>
                                {LINK_GROUP_1.groupColor}
                            </pre>
                        </Segment>
                        {LINK_GROUP_1.group.map((linkX, i) => {
                            // console.log(linkX);\
                            return (
                                <Segment>
                                    <Header content={`Link ${i + 1}`} />
                                    {Object.keys(linkX).map((key) => {
                                        return (
                                            <Segment>
                                                <pre>
                                                    <b>{`${key}:`}</b>
                                                    {`${linkX[key]}`}
                                                </pre>
                                            </Segment>
                                        );
                                    })}
                                </Segment>
                            );
                        })}
                    </Segment>
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
