import React, { useState } from 'react';
import { Segment, Header, Accordion, Icon } from 'semantic-ui-react';
import { StandardInput, SelectInput } from '../CustomInput/CustomInputs';
import AddLink from '../AddLink/AddLink';
// import {
//     // LOGO,
//     SOCIAL_LINKS,
// } from '../../assets/data';
import './socialLinks.css';

const SocialLinks = ({ editRightLink, data, setData }) => {
    const [activeIndex, setActiveIndex] = useState();

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

    const handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const newIndex = activeIndex === index ? -1 : index;

        setActiveIndex(newIndex);
    };

    return (
        <Segment className="social links">
            {console.log('data', data)}
            <Header content="Social Links" />
            <Accordion styled>
                {data.socialLinks.group.map((link, i) => (
                    <div key={`social link ${i}`}>
                        <Accordion.Title
                            active={activeIndex === i}
                            index={i}
                            onClick={handleClick}
                        >
                            <Icon name="dropdown" />
                            {`Social Link ${i}`}
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === i}>
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
                        </Accordion.Content>
                    </div>
                ))}
            </Accordion>
            <AddLink
                collection="socialLinks"
                data={data}
                setData={setData}
                linkGroup=""
            />
        </Segment>
    );
};

export default SocialLinks;
