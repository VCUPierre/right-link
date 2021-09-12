import React, { useState } from 'react';
import {
    Segment,
    Header,
    Grid,
    Accordion,
    Icon,
    Search,
} from 'semantic-ui-react';
import { StandardInput, SelectInput } from '../CustomInput/CustomInputs';
import { ICONS } from '../../constants/icons';
import AddLink from '../AddLink/AddLink';
import './socialLinks.css';

const SocialLinks = ({ editRightLink, data, setData }) => {
    const [activeIndex, setActiveIndex] = useState();
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    // const [Loading, setLoading] = useState(false);

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

    // const presetSocials = [
    //     { key: 'instagram', text: 'Instagram', value: 'instagram' },
    //     { key: 'facebook', text: 'Facebook', value: 'facebook' },
    //     { key: 'facebook messenger', text: 'Facebook messenger', value: 'facebook messenger' },
    //     { key: 'amazon', text: 'amazon', value: 'amazon' },
    //     { key: 'amazon pay', text: 'amazon pay', value: 'amazon pay' },
    //     { key: 'android', text: 'android', value: 'android' },
    //     { key: 'apple pay', text: 'apple pay', value: 'apple pay' },
    //     { key: 'bandcamp', text: 'bandcamp', value: 'bandcamp' },
    //     { key: 'bitcoin', text: 'bitcoin', value: 'bitcoin' },
    //     { key: 'blogger', text: 'blogger', value: 'blogger' },
    //     { key: 'discord', text: 'discord', value: 'discord' },
    //     { key: 'dribbble', text: 'dribbble', value: 'dribbble' },
    //     { key: 'dropbox', text: 'dropbox', value: 'dropbox' },
    //     { key: 'etsy', text: 'etsy', value: 'etsy' },
    //     { key: 'foursquare', text: 'foursquare', value: 'foursquare' },
    //     { key: 'github', text: 'github', value: 'github' },
    //     { key: 'gitlab', text: 'gitlab', value: 'gitlab' },
    //     { key: 'google drive', text: 'google drive', value: 'google drive' },
    //     { key: 'google play', text: 'google play', value: 'google play' },
    //     { key: 'google plus square', text: 'google plus', value: 'google plus square' },
    //     { key: 'kickstarter', text: 'kickstarter', value: 'kickstarter' },
    //     { key: 'linkedin', text: 'linkedin', value: 'linkedin' },
    //     { key: 'napster', text: 'napster', value: 'napster' },
    //     { key: 'patreon', text: 'patreon', value: 'patreon' },
    //     { key: 'paypal', text: 'paypal', value: 'paypal' },
    //     { key: 'periscope', text: 'periscope', value: 'periscope' },
    //     { key: 'pinterest', text: 'pinterest', value: 'pinterest' },
    //     { key: 'reddit', text: 'reddit', value: 'reddit' },
    //     { key: 'napster', text: 'napster', value: 'napster' },
    //     { key: 'napster', text: 'napster', value: 'napster' },
    //     { key: 'napster', text: 'napster', value: 'napster' },
    //     { key: 'napster', text: 'napster', value: 'napster' },
    //     { key: 'napster', text: 'napster', value: 'napster' },

    // ]

    const handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const newIndex = activeIndex === index ? -1 : index;

        setActiveIndex(newIndex);
    };

    const handleChange = (e) => {
        // setLoading(true);
        // setTimeout(() => setLoading(false), 400);
        setSearchValue(e.target.value);
    };

    const handleSelect = (e, { result }) => {
        // setLoading(true);
        setSearchValue(result.title);
    };

    return (
        <Segment className="social links">
            {/* {console.log('data', data)} */}
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
                                    <b>search:</b>
                                    <Grid centered columns={2}>
                                        <Grid.Row>
                                            <Search
                                                // loading={Loading}
                                                aligned="left"
                                                onResultSelect={handleSelect}
                                                onSearchChange={handleChange}
                                                results={ICONS.filter((x) =>
                                                    x.title.includes(
                                                        searchValue
                                                    )
                                                )}
                                                value={searchValue}
                                                // placeholder='st'
                                            />
                                        </Grid.Row>
                                    </Grid>
                                </pre>
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
