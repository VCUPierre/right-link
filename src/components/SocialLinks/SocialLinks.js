import React, { useState } from 'react';
import { Segment, Header, Accordion, Icon, Grid } from 'semantic-ui-react';
import {
    SocialLinksStandardInput,
    SocialLinksSelectInput,
    RightLinkSearch,
} from '../CustomInput/CustomInputs';
import { ICONS } from '../../constants/icons';
import AddLink from '../AddLink/AddLink';
import './socialLinks.css';

/*  eslint no-nested-ternary: "off" */
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
    ];

    const presetBool = [
        { key: 'true', text: 'true', value: true },
        { key: 'false', text: 'false', value: false },
    ];

    const handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const newIndex = activeIndex === index ? -1 : index;

        setActiveIndex(newIndex);
    };

    return (
        <Segment className="social links">
            <Header content="Social Links" />
            <Accordion styled>
                {data.socialLinks.group.map((link, i) => (
                    <div key={`social link ${i+1}`}>
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
                                        <Grid centered columns={2}>
                                            <Grid.Row>
                                                <RightLinkSearch
                                                    dataGroup="socialLinks"
                                                    group="group"
                                                    field="name"
                                                    values={data}
                                                    setValues={setData}
                                                    collection={ICONS}
                                                    position={i}
                                                />
                                            </Grid.Row>
                                        </Grid>
                                    ) : link.name ? (
                                        link.name
                                    ) : (
                                        'empty'
                                    )}
                                </pre>
                                <pre>
                                    <b>link:</b>{' '}
                                    {editRightLink ? (
                                        <SocialLinksStandardInput
                                            dataGroup="socialLinks"
                                            group="group"
                                            field="link"
                                            values={data}
                                            setValues={setData}
                                            position={i}
                                        />
                                    ) : link.link ? (
                                        <p>{`${link.link}`}</p>
                                    ) : (
                                        'empty'
                                    )}
                                </pre>
                                <pre>
                                    <b>color:</b>{' '}
                                    {editRightLink ? (
                                        <SocialLinksSelectInput
                                            dataGroup="socialLinks"
                                            group="group"
                                            field="color"
                                            values={data}
                                            setValues={setData}
                                            options={presetColorOptions}
                                            position={i}
                                        />
                                    ) : link.color ? (
                                        link.color
                                    ) : (
                                        'empty'
                                    )}
                                </pre>
                                <pre>
                                    <b>surrounded:</b>{' '}
                                    {editRightLink ? (
                                        <SocialLinksSelectInput
                                            dataGroup="socialLinks"
                                            group="group"
                                            field="surrounded"
                                            values={data}
                                            setValues={setData}
                                            options={presetBool}
                                            position={i}
                                        />
                                    ) : link.surrounded ? (
                                        `${link.surrounded}`
                                    ) : (
                                        'empty'
                                    )}
                                </pre>
                                <pre>
                                    <b>surroundedInColor:</b>{' '}
                                    {editRightLink ? (
                                        <SocialLinksSelectInput
                                            dataGroup="socialLinks"
                                            group="group"
                                            field="surroundedInColor"
                                            values={data}
                                            setValues={setData}
                                            options={presetBool}
                                            position={i}
                                        />
                                    ) : link.surroundedInColor ? (
                                        `${link.surroundedInColor}`
                                    ) : (
                                        'empty'
                                    )}
                                </pre>
                                {link.surroundedInColor ? (
                                    <pre>
                                        <b>secondaryColor:</b>{' '}
                                        {editRightLink ? (
                                            <SocialLinksSelectInput
                                                dataGroup="socialLinks"
                                                group="group"
                                                field="secondaryColor"
                                                values={data}
                                                setValues={setData}
                                                options={presetColorOptions}
                                                position={i}
                                            />
                                        ) : link.secondaryColor ? (
                                            link.secondaryColor
                                        ) : (
                                            'empty'
                                        )}
                                    </pre>
                                ) : (
                                    ''
                                )}
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
