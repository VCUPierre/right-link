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
    RLGroupInput,
    RLGroupSelectInput,
    RightLinkStandardInput,
    RightLinkSelectInput,
} from '../CustomInput/CustomInputs';
import AddLink from '../AddLink/AddLink';
import RightLinkObjectPreview from './RightLinkObjectPreview';
import RightLinkObjects from './RightLinkObjects';
import './rightLinks.css';

/*  eslint no-nested-ternary: "off" */
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
    ];

    const presetBoolOptions = [
        { key: 'true', text: 'true', value: true },
        { key: 'false', text: 'false', value: false },
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

    const presetAdditionalStyles = [
        { key: 'longText', text: 'longText', value: 'longText' },
    ];
    const handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const newIndex = activeIndex === index ? -1 : index;

        setActiveIndex(newIndex);
    };

    const handleGroupClick = (e, groupData) => {
        setShowGroup(true);
        setRightLinksFilters(`${groupData.children[1]}`);
    };

    return (
        <Segment className="LinkGroup 1">
            <div>
                {data.rightLinks.groups.map((group, i) => <Label
                            key={`group label ${i+1}`}
                            as="a"
                            image
                            className="linkLabels"
                            color={group.color}
                            onClick={handleGroupClick}
                        >
                            <Icon name="linkify" />
                            {group.name}
                        </Label>
                )}
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
                                <RLGroupInput
                                    dataGroup="rightLinks"
                                    group="groups"
                                    field="name"
                                    values={data.rightLinks.groups.filter(
                                        (group) =>
                                            group.name === rightLinksFilter
                                    )}
                                    data={data}
                                    setData={setData}
                                    setFilter={setRightLinksFilters}
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
                            <b>Group Color:</b>{' '}
                            {editRightLink ? (
                                <RLGroupSelectInput
                                    dataGroup="rightLinks"
                                    group="groups"
                                    field="color"
                                    values={data.rightLinks.groups.filter(
                                        (group) =>
                                            group.name === rightLinksFilter
                                    )}
                                    options={presetColorOptions}
                                    data={data}
                                    setData={setData}
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
                        {data.rightLinks.links.map((link, i) => 
                            link.group.value === rightLinksFilter ? (
                                <div key={`RightLink-${i+1}`}>
                                    <Accordion.Title
                                        active={activeIndex === i}
                                        index={i}
                                        onClick={handleClick}
                                    >
                                        <Icon name="dropdown" />
                                        {`${link.name.value}`}
                                    </Accordion.Title>
                                    {Object.keys(link).map((key, j) => 
                                        ['group', 'internal'].includes(
                                            key
                                        ) ? (
                                            ''
                                        ) : (
                                            <Accordion.Content
                                                active={activeIndex === i}
                                                key={`RightLink-content-${j+1}`}
                                            >
                                                <Segment>
                                                    <pre>
                                                        <b>{`${key}:`}</b>{' '}
                                                        {editRightLink ? (
                                                            link[key].type ===
                                                            'text' ? (
                                                                <RightLinkStandardInput
                                                                    dataGroup="rightLinks"
                                                                    group="links"
                                                                    field={`${key}`}
                                                                    values={
                                                                        data
                                                                    }
                                                                    setValues={
                                                                        setData
                                                                    }
                                                                    position={i}
                                                                />
                                                            ) : link[key]
                                                                  .type ===
                                                              'bool' ? (
                                                                <RightLinkSelectInput
                                                                    dataGroup="rightLinks"
                                                                    group="links"
                                                                    field={`${key}`}
                                                                    values={
                                                                        data
                                                                    }
                                                                    setValues={
                                                                        setData
                                                                    }
                                                                    options={
                                                                        presetBoolOptions
                                                                    }
                                                                    position={i}
                                                                />
                                                            ) : link[key]
                                                                  .type ===
                                                              'typeSelect' ? (
                                                                <RightLinkSelectInput
                                                                    dataGroup="rightLinks"
                                                                    group="links"
                                                                    field={`${key}`}
                                                                    values={
                                                                        data
                                                                    }
                                                                    setValues={
                                                                        setData
                                                                    }
                                                                    options={
                                                                        presetTypeOptions
                                                                    }
                                                                    position={i}
                                                                />
                                                            ) : link[key]
                                                                  .type ===
                                                              'colorSelect' ? (
                                                                <RightLinkSelectInput
                                                                    dataGroup="rightLinks"
                                                                    group="links"
                                                                    field={`${key}`}
                                                                    values={
                                                                        data
                                                                    }
                                                                    setValues={
                                                                        setData
                                                                    }
                                                                    options={
                                                                        presetColorOptions
                                                                    }
                                                                    position={i}
                                                                />
                                                            ) : link[key]
                                                                  .type ===
                                                              'sideSelect' ? (
                                                                <RightLinkSelectInput
                                                                    dataGroup="rightLinks"
                                                                    group="links"
                                                                    field={`${key}`}
                                                                    values={
                                                                        data
                                                                    }
                                                                    setValues={
                                                                        setData
                                                                    }
                                                                    options={
                                                                        presetSideOptions
                                                                    }
                                                                    position={i}
                                                                />
                                                            ) : link[key]
                                                                  .type ===
                                                              'stylesSelect' ? (
                                                                <RightLinkSelectInput
                                                                    dataGroup="rightLinks"
                                                                    group="links"
                                                                    field={`${key}`}
                                                                    values={
                                                                        data
                                                                    }
                                                                    setValues={
                                                                        setData
                                                                    }
                                                                    options={
                                                                        presetAdditionalStyles
                                                                    }
                                                                    position={i}
                                                                />
                                                            ) : link[key]
                                                                  .type ===
                                                              'obj' ? (
                                                                <RightLinkObjects
                                                                    dataGroup="rightLinks"
                                                                    group="links"
                                                                    field={`${key}`}
                                                                    values={
                                                                        data
                                                                    }
                                                                    setValues={
                                                                        setData
                                                                    }
                                                                    position={i}
                                                                />
                                                            ) : link[key]
                                                                  .type ===
                                                              'array' ? (
                                                                'arrayComming soon'
                                                            ) : (
                                                                'field not valid'
                                                            )
                                                        ) : ['array'].includes(
                                                              link[key].type
                                                          ) ? (
                                                            'array'
                                                        ) : link[key].type ===
                                                          'bool' ? (
                                                            `${link[key].value}`
                                                        ) : link[key].type ===
                                                          'obj' ? (
                                                            // 'object edit to view'
                                                            <RightLinkObjectPreview RLObj={link[key]} />
                                                        ) : link[key].value ? (
                                                            link[key].value
                                                        ) : (
                                                            'empty'
                                                        )}
                                                    </pre>
                                                </Segment>
                                            </Accordion.Content>
                                        )
                                    )}
                                </div>
                            ) : (
                                ''
                            )
                        )}
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
