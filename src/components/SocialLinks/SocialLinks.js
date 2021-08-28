import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { StandardInput, SelectInput } from '../CustomInput/CustomInputs';
import {
    // LOGO,
    SOCIAL_LINKS,
} from '../../assets/data';
// import './main.css';

const SocialLinks = ({ editRightLink }) => {
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
        { key: 'true', text: 'true', value: 'true' },
        { key: 'false', text: 'false', value: 'false' },
    ];

    return (
        <Segment className="social links">
            <Header content="Social Links" />
            {SOCIAL_LINKS.group.map((link) => (
                <Segment>
                    <pre>
                        <b>name:</b>{' '}
                        {editRightLink ? (
                            <StandardInput
                                field="name"
                                values={link}
                                // setValues={setValues}
                            />
                        ) : link.name ? (
                            link.name
                        ) : (
                            'empty'
                        )}
                    </pre>
                    <pre>
                        <b>icon:</b>{' '}
                        {editRightLink ? (
                            <StandardInput
                                field="iconName"
                                values={link}
                                // setValues={setValues}
                            />
                        ) : link.iconName ? (
                            link.iconName
                        ) : (
                            'empty'
                        )}
                    </pre>
                    <pre>
                        <b>link:</b>{' '}
                        {editRightLink ? (
                            <StandardInput
                                field="link"
                                values={link}
                                // setValues={setValues}
                            />
                        ) : link.link ? (
                            link.link
                        ) : (
                            'empty'
                        )}
                    </pre>
                    <pre>
                        <b>color:</b>{' '}
                        {editRightLink ? (
                            <SelectInput
                                field="color"
                                values={link}
                                // setValues={setValues}
                                options={presetColorOptions}
                            />
                        ) : link.color ? (
                            link.color
                        ) : (
                            'empty'
                        )}
                    </pre>
                    <pre>
                        <b>secondaryColor:</b>{' '}
                        {editRightLink ? (
                            <SelectInput
                                field="secondaryColor"
                                values={link}
                                // setValues={setValues}
                                options={presetColorOptions}
                            />
                        ) : link.secondaryColor ? (
                            link.secondaryColor
                        ) : (
                            'empty'
                        )}
                    </pre>
                    <pre>
                        <b>surrounded:</b>{' '}
                        {editRightLink ? (
                            <SelectInput
                                field="surrounded"
                                values={link}
                                // setValues={setValues}
                                options={presetBool}
                            />
                        ) : link.surrounded ? (
                            link.surrounded
                        ) : (
                            'empty'
                        )}
                    </pre>
                    <pre>
                        <b>surroundedInColor:</b>{' '}
                        {editRightLink ? (
                            <SelectInput
                                field="surroundedInColor"
                                values={link}
                                // setValues={setValues}
                                options={presetBool}
                            />
                        ) : link.surroundedInColor ? (
                            link.surroundedInColor
                        ) : (
                            'empty'
                        )}
                    </pre>
                </Segment>
            ))}
        </Segment>
    );
};

export default SocialLinks;
