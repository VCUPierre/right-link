import React, { useState } from 'react';
import {
    Segment,
    Header,
    Accordion,
    Icon,
    Label,
    Divider,
} from 'semantic-ui-react';
import {
    StandardInput,
    SelectInput,
    RightLinkStandardInput,
    RightLinkSelectInput,
} from '../CustomInput/CustomInputs';
import AddLink from '../AddLink/AddLink';
// import { LINK_GROUP_1 } from '../../assets/data';
import './rightLinks.css';

const RightLinks = ({ editRightLink, data, setData }) => {
    const [activeIndex, setActiveIndex] = useState();
    const [showgroup, setShowGroup] = useState(false);
    const [rightLinksFilter, setRightLinksFilters] = useState('');

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

    const handleGroupClick = (e, data) => {
        // console.log('groupState', rightLinksFilter);
        // console.log('groupClick', data);
        setShowGroup(true);
        setRightLinksFilters(`${data.children[1]}`);
    };

    return (
        <Segment className="LinkGroup 1">
            {console.log('data', data)}
            <div>
                {data.rightLinks.groups.map((group, i) => {
                    return (
                        <Label
                            key={`group label ${i}`}
                            as="a"
                            image
                            className="linkLabels"
                            color={group.color}
                            onClick={handleGroupClick}
                        >
                            <Icon name="linkify" />
                            {group.name}
                        </Label>
                    );
                })}
                <AddLink
                    collection="rightLinksGroups"
                    data={data}
                    setData={setData}
                    linkGroup=""
                />
            </div>
            <Divider />
            <Header content="Link Group" />
            {showgroup ? (
                <>
                    <Segment>
                        <pre>
                            <b>Group Name:</b>{' '}
                            {editRightLink ? (
                                <StandardInput
                                    field="groupName"
                                    values={data.rightLinks.groups.filter(
                                        (group) =>
                                            group.name === rightLinksFilter
                                    )}
                                    // setValues={setValues}
                                />
                            ) : data.rightLinks.groups.filter(
                                  (group) => group.name === rightLinksFilter
                              )[0].name ? (
                                data.rightLinks.groups.filter(
                                    (group) => group.name === rightLinksFilter
                                )[0].name
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
                                    values={data.rightLinks.groups.filter(
                                        (group) =>
                                            group.name === rightLinksFilter
                                    )}
                                    // setValues={setValues}
                                    options={presetColorOptions}
                                />
                            ) : data.rightLinks.groups.filter(
                                  (group) => group.name === rightLinksFilter
                              )[0].color ? (
                                data.rightLinks.groups.filter(
                                    (group) => group.name === rightLinksFilter
                                )[0].color
                            ) : (
                                'empty'
                            )}
                        </pre>
                    </Segment>
                    <Accordion styled>
                        {data.rightLinks.links.map((link, i) => {
                            return link.group === rightLinksFilter ? (
                                <div key={`RightLink-${i}`}>
                                    {/* <Header content={`Link ${i + 1}`} /> */}
                                    <Accordion.Title
                                        active={activeIndex === i}
                                        index={i}
                                        onClick={handleClick}
                                    >
                                        <Icon name="dropdown" />
                                        {`${link.name.value}`}
                                    </Accordion.Title>
                                    {Object.keys(link).map((key, j) => {
                                        // console.log('link', link, 'key', key);
                                        return (
                                            <Accordion.Content
                                                active={activeIndex === i}
                                                key={`RightLink-content-${j}`}
                                            >
                                                <Segment>
                                                    <pre>
                                                        <b>{`${key}:`}</b>{' '}
                                                        {editRightLink ? (
                                                            link[key].type ===
                                                            'text' ? (
                                                                <RightLinkStandardInput
                                                                    field={`${key}`}
                                                                    values={
                                                                        link
                                                                    }
                                                                />
                                                            ) : link[key]
                                                                  .type ===
                                                              'bool' ? (
                                                                <RightLinkStandardInput
                                                                    field={`${key}`}
                                                                    values={
                                                                        link
                                                                    }
                                                                    options={
                                                                        presetBoolOptions
                                                                    }
                                                                />
                                                            ) : link[key]
                                                                  .type ===
                                                              'typeSelect' ? (
                                                                <RightLinkStandardInput
                                                                    field={`${key}`}
                                                                    values={
                                                                        link
                                                                    }
                                                                    options={
                                                                        presetTypeOptions
                                                                    }
                                                                />
                                                            ) : link[key]
                                                                  .type ===
                                                              'colorSelect' ? (
                                                                <RightLinkSelectInput
                                                                    field={`${key}`}
                                                                    values={
                                                                        link
                                                                    }
                                                                    options={
                                                                        presetColorOptions
                                                                    }
                                                                />
                                                            ) : link[key]
                                                                  .type ===
                                                              'sideSelect' ? (
                                                                <RightLinkSelectInput
                                                                    field={`${key}`}
                                                                    values={
                                                                        link
                                                                    }
                                                                    options={
                                                                        presetSideOptions
                                                                    }
                                                                />
                                                            ) : link[key]
                                                                  .type ===
                                                              'obj' ? (
                                                                'objectComing soon'
                                                            ) : link[key]
                                                                  .type ===
                                                              'array' ? (
                                                                'arrayComming soon'
                                                            ) : (
                                                                'field not valid'
                                                            )
                                                        ) : [
                                                              'array',
                                                              'obj',
                                                          ].includes(
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
                            ) : (
                                ''
                            );
                        })}
                    </Accordion>
                </>
            ) : (
                'Please select one from above or add a new group for your Right-Links'
            )}
            <div>
                <AddLink
                    collection="rightLinks"
                    data={data}
                    setData={setData}
                    linkGroup={rightLinksFilter}
                />
            </div>
        </Segment>
    );
};

export default RightLinks;
