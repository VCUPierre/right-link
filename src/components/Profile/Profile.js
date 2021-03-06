import React from 'react';
import { Segment, Header, Image } from 'semantic-ui-react';
import { StandardInput, SelectInput } from '../CustomInput/CustomInputs';

/*  eslint no-nested-ternary: "off" */
const Profile = ({ editRightLink, data, setData }) => {
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

    return (
        <Segment className="Profile">
            <Header content="Profile" />
            <Segment>
                <pre>
                    <b>Title:</b>{' '}
                    {editRightLink ? (
                        <StandardInput
                            dataGroup="profile"
                            field="title"
                            values={data}
                            setValues={setData}
                        />
                    ) : data.profile.title ? (
                        <p>{`${data.profile.title}`}</p>
                    ) : (
                        'empty'
                    )}
                </pre>
                <pre>
                    <b>Title Color:</b>{' '}
                    {editRightLink ? (
                        <SelectInput
                            dataGroup="profile"
                            field="titleColor"
                            values={data}
                            setValues={setData}
                            options={presetColorOptions}
                        />
                    ) : data.profile.titleColor ? (
                        data.profile.titleColor
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
                            dataGroup="profile"
                            field="bgColor"
                            values={data}
                            setValues={setData}
                            options={presetColorOptions}
                        />
                    ) : data.profile.bgColor ? (
                        <p>{`${data.profile.bgColor}`}</p>
                    ) : (
                        'empty'
                    )}
                </pre>
                {data.profile.bgColor === 'custom' ? (
                    <pre>
                        <p>
                            <b>Custom Background Color:</b>
                            <br />
                            <a
                                href="https://mycolor.space/gradient3"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Try a Gradiant?
                                {/* add a hover text (tooltip) to say 'use this link and copy and paste exactly "css code" box' */}
                            </a>
                        </p>
                        {editRightLink ? (
                            <StandardInput
                                dataGroup="profile"
                                field="bgCustomColor"
                                values={data}
                                setValues={setData}
                            />
                        ) : data.profile.bgCustomColor ? (
                            <p>{`${data.profile.bgCustomColor}`}</p>
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
                            dataGroup="profile"
                            field="bgImage"
                            values={data}
                            setValues={setData}
                            options={presetBool}
                        />
                    ) : data.profile.bgImage ? (
                        <p>{`${data.profile.bgImage}`}</p>
                    ) : (
                        'empty'
                    )}
                </pre>
                {data.profile.bgImage ? (
                    <pre>
                        <b>Background Image Link:</b>{' '}
                        {editRightLink ? (
                            <StandardInput
                                dataGroup="profile"
                                field="bgImageLink"
                                values={data}
                                setValues={setData}
                            />
                        ) : data.profile.bgImageLink ? (
                            <Image
                                src={data.profile.bgImageLink}
                                size="small"
                                inline
                            />
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
                            dataGroup="profile"
                            field="profilePicture"
                            values={data}
                            setValues={setData}
                        />
                    ) : data.profile.profilePicture ? (
                        <Image
                            src={data.profile.profilePicture}
                            size="small"
                            inline
                        />
                    ) : (
                        'empty'
                    )}
                </pre>
            </Segment>
        </Segment>
    );
};

export default Profile;
