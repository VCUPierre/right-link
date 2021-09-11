import React, { useState } from 'react';
import { Segment, Header, Input } from 'semantic-ui-react';
// import { SwatchesPicker } from 'react-color';
import { StandardInput, SelectInput } from '../CustomInput/CustomInputs';

const Profile = ({ editRightLink, data, setData }) => {
    const initialVals = {
        title: data.title.title,
        titleColor: data.title.color,
        backgroundImage: data.background.image,
        backgroundImageLink: data.background.imageLink,
        backgroudColor: data.background.color,
        backgroundCustomColor: data.background.customColor,
        profilePicture: data.profilePicture,
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

    const presetBool = [
        { key: 'true', text: 'true', value: true },
        { key: 'false', text: 'false', value: false },
    ];

    const [values, setValues] = useState(initialVals);

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
                    ) : values.title ? (
                        values.title
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
                    ) : values.titleColor ? (
                        values.titleColor
                    ) : (
                        'empty'
                    )}
                </pre>
            </Segment>
            <Segment>
                <pre>
                    <b>Background Color:</b>{' '}
                    {editRightLink ? (
                        <SelectInput
                            field="backgroudColor"
                            values={values}
                            setValues={setValues}
                            options={presetColorOptions}
                        />
                    ) : values.backgroudColor ? (
                        <p>{`${values.backgroudColor}`}</p>
                    ) : (
                        'empty'
                    )}
                </pre>
                {values.backgroudColor === 'custom' ? (
                    <pre>
                        <p>
                            <b>Custom Background Color:</b>
                            <br />
                            <a href="https://mycolor.space/gradient3">
                                Try a Gradiant?
                                {/* add a hover text (tooltip) to say 'use this link and copy and paste exactly "css code" box' */}
                            </a>
                            :
                        </p>
                        {editRightLink ? (
                            <StandardInput
                                field="backgroundCustomColor"
                                values={values}
                                setValues={setValues}
                            />
                        ) : values.backgroundCustomColor ? (
                            <p>{`${values.backgroundCustomColor}`}</p>
                        ) : (
                            'empty'
                        )}
                    </pre>
                ) : (
                    ''
                )}
                <pre>
                    <b>Background Image:</b>{' '}
                    {editRightLink ? (
                        <SelectInput
                            field="backgroundImage"
                            values={values}
                            setValues={setValues}
                            options={presetBool}
                        />
                    ) : (
                        `${values.backgroundImage}`
                    )}
                </pre>
                {values.backgroundImage ? (
                    <pre>
                        <b>Background Image Link:</b>{' '}
                        {editRightLink ? (
                            <StandardInput
                                field="backgroundImageLink"
                                values={values}
                                setValues={setValues}
                            />
                        ) : values.backgroundImageLink ? (
                            <p>{`${values.backgroundImageLink}`}</p>
                        ) : (
                            'empty'
                        )}
                    </pre>
                ) : (
                    ''
                )}
            </Segment>
            <Segment>
                <pre>
                    <b>Profile Picture:</b>{' '}
                    {editRightLink ? (
                        <StandardInput
                            field="profilePicture"
                            values={values}
                            setValues={setValues}
                        />
                    ) : values.profilePicture ? (
                        <p>{`${values.profilePicture}`}</p>
                    ) : (
                        'empty'
                    )}
                </pre>
            </Segment>
        </Segment>
    );
};

export default Profile;
