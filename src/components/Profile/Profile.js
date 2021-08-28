import React, { useState } from 'react';
import { Segment, Header, Input } from 'semantic-ui-react';
// import { SwatchesPicker } from 'react-color';
import { StandardInput, SelectInput } from '../CustomInput/CustomInputs';
import { BACKGROUND, TITLE, PROFILE_PIC } from '../../assets/data';
// import './main.css';

const Profile = ({ editRightLink }) => {
    const initalVals = {
        title: TITLE.title,
        titleColor: TITLE.color,
        backgroundImage: BACKGROUND.image,
        backgroundImageLink: BACKGROUND.imageLink,
        backgroudColor: BACKGROUND.color,
        profilePicture: PROFILE_PIC,
    };

    const presetColorOptions = [
        { key: 'red', text: 'red', value: 'red' },
        { key: 'orange', text: 'orange', value: 'orange' },
        { key: 'yellow', text: 'yellow', value: 'yellow' },
        { key: 'olive', text: 'olive', value: 'olive' },
        { key: 'green', text: 'green', value: 'green' },
        { key: 'teal', text: 'teal', value: 'teal' },
        { key: 'blue', text: 'blue', value: 'blue' },
        { key: 'violet', text: 'violet', value: 'violet' },
        { key: 'purple', text: 'purple', value: 'purple' },
        { key: 'pink', text: 'pink', value: 'pink' },
        { key: 'brown', text: 'brown', value: 'brown' },
        { key: 'grey', text: 'grey', value: 'grey' },
        { key: 'black', text: 'black', value: 'black' },
        { key: 'custom', text: 'custom', value: 'custom' },
    ];

    const [values, setValues] = useState(initalVals);

    return (
        <Segment className="Profile">
            <Header content="Profile" />
            <Segment>
                <pre>
                    <b>Title:</b>{' '}
                    {editRightLink ? (
                        <StandardInput
                            field="title"
                            values={values}
                            setValues={setValues}
                        />
                    ) : initalVals.title ? (
                        initalVals.title
                    ) : (
                        'empty'
                    )}
                </pre>
                <pre>
                    <b>Title Color:</b>{' '}
                    {editRightLink ? (
                        <SelectInput
                            field="titleColor"
                            values={values}
                            setValues={setValues}
                            options={presetColorOptions}
                        />
                    ) : initalVals.titleColor ? (
                        initalVals.titleColor
                    ) : (
                        'empty'
                    )}
                </pre>
            </Segment>
            <Segment>
                <pre>
                    <b>Background Color:</b>{' '}
                    {editRightLink ? (
                        <StandardInput
                            field="backgroudColor"
                            values={values}
                            setValues={setValues}
                        />
                    ) : initalVals.backgroudColor ? (
                        initalVals.backgroudColor
                    ) : (
                        'empty'
                    )}
                </pre>
                <pre>
                    <b>Background Image:</b>{' '}
                    {editRightLink ? (
                        <StandardInput
                            field="backgroundImage"
                            values={values}
                            setValues={setValues}
                        />
                    ) : initalVals.backgroundImage ? (
                        initalVals.backgroundImage
                    ) : (
                        'empty'
                    )}
                </pre>
                <pre>
                    <b>BG image link:</b>{' '}
                    {editRightLink ? (
                        <StandardInput
                            field="backgroundImageLink"
                            values={values}
                            setValues={setValues}
                        />
                    ) : initalVals.backgroundImageLink ? (
                        initalVals.backgroundImageLink
                    ) : (
                        'empty'
                    )}
                </pre>
            </Segment>
            <Segment>
                <pre>
                    <b>Profile Pic:</b>{' '}
                    {editRightLink ? (
                        <StandardInput
                            field="profilePicture"
                            values={values}
                            setValues={setValues}
                        />
                    ) : initalVals.profilePicture ? (
                        initalVals.profilePicture
                    ) : (
                        'empty'
                    )}
                </pre>
            </Segment>
        </Segment>
    );
};

export default Profile;
