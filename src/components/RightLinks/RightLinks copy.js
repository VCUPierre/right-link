import React, { useState } from 'react';
import { Segment, Header, Accordion, Icon, Label } from 'semantic-ui-react';
import {
    StandardInput,
    SelectInput,
    RightLinkStandardInput,
    RightLinkSelectInput,
} from '../CustomInput/CustomInputs';
import AddLink from '../AddLink/AddLink';
import { LINK_GROUP_1 } from '../../assets/data';
import './rightLinks.css';

const RightLinks = ({ editRightLink, data, setData }) => {
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

    const presetBoolOptions = [
        { key: 'true', text: 'true', value: 'true' },
        { key: 'false', text: 'false', value: 'false' },
    ];

    const presetSideOptions = [
        { key: 'none', text: 'none', value: 'none' },
        { key: 'left', text: 'left', value: 'left' },
        { key: 'right', text: 'right', value: 'right' },
    ];

    const presetTypeOptions = [
        { key: 'internal', text: 'internal', value: 'internal' },
        { key: 'external', text: 'external', value: 'external' },
        { key: 'item', text: 'item', value: 'item' },
        {
            key: 'still/external',
            text: 'still/external',
            value: 'still/external',
        },
        { key: 'slideshow', text: 'slideshow', value: 'slideshow' },
        { key: 'bio', text: 'bio', value: 'bio' },
    ];

    const handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const newIndex = activeIndex === index ? -1 : index;

        setActiveIndex(newIndex);
    };

    return (
        <Segment className="LinkGroup 1">
            <Header content="Link Group" />
            <Segment>
                <pre>
                    <b>Group Name:</b>{' '}
                    {editRightLink ? (
                        <StandardInput
                            field="groupName"
                            values={LINK_GROUP_1}
                            // setValues={setValues}
                        />
                    ) : LINK_GROUP_1.groupName ? (
                        LINK_GROUP_1.groupName
                    ) : (
                        'empty'
                    )}
                </pre>
            </Segment>
            <Segment>
                <pre>
                    <b>Group Color:</b>
                    {editRightLink ? (
                        <SelectInput
                            field="groupColor"
                            values={LINK_GROUP_1}
                            // setValues={setValues}
                            options={presetColorOptions}
                        />
                    ) : LINK_GROUP_1.groupColor ? (
                        LINK_GROUP_1.groupColor
                    ) : (
                        'empty'
                    )}
                </pre>
            </Segment>
            <Accordion styled>
                {LINK_GROUP_1.group.map((link, i) => {
                    return (
                        <div key={`RightLink-${i}`}>
                            {/* <Header content={`Link ${i + 1}`} /> */}
                            <Accordion.Title
                                active={activeIndex === i}
                                index={i}
                                onClick={handleClick}
                            >
                                <Icon name="dropdown" />
                                {`Right Link ${i}`}
                            </Accordion.Title>
                            {Object.keys(link).map((key) => {
                                // console.log('link', link, 'key', key);
                                return (
                                    <Accordion.Content
                                        active={activeIndex === i}
                                    >
                                        <Segment>
                                            <pre>
                                                <b>{`${key}:`}</b>{' '}
                                                {editRightLink ? (
                                                    link[key].type ===
                                                    'text' ? (
                                                        <RightLinkStandardInput
                                                            field={`${key}`}
                                                            values={link}
                                                        />
                                                    ) : link[key].type ===
                                                      'bool' ? (
                                                        <RightLinkStandardInput
                                                            field={`${key}`}
                                                            values={link}
                                                            options={
                                                                presetBoolOptions
                                                            }
                                                        />
                                                    ) : link[key].type ===
                                                      'typeSelect' ? (
                                                        <RightLinkStandardInput
                                                            field={`${key}`}
                                                            values={link}
                                                            options={
                                                                presetTypeOptions
                                                            }
                                                        />
                                                    ) : link[key].type ===
                                                      'colorSelect' ? (
                                                        <RightLinkSelectInput
                                                            field={`${key}`}
                                                            values={link}
                                                            options={
                                                                presetColorOptions
                                                            }
                                                        />
                                                    ) : link[key].type ===
                                                      'sideSelect' ? (
                                                        <RightLinkSelectInput
                                                            field={`${key}`}
                                                            values={link}
                                                            options={
                                                                presetSideOptions
                                                            }
                                                        />
                                                    ) : link[key].type ===
                                                      'obj' ? (
                                                        'objectComing soon'
                                                    ) : link[key].type ===
                                                      'array' ? (
                                                        'arrayComming soon'
                                                    ) : (
                                                        'field not valid'
                                                    )
                                                ) : ['array', 'obj'].includes(
                                                      link[key].type
                                                  ) ? (
                                                    'obj or array'
                                                ) : link[key].value ? (
                                                    link[key].value
                                                ) : (
                                                    'empty'
                                                )}
                                            </pre>
                                        </Segment>
                                    </Accordion.Content>
                                );
                            })}
                        </div>
                    );
                })}
            </Accordion>
            <AddLink collection="rightLinks" data={data} setData={setData} />
        </Segment>
    );
};

export default RightLinks;
