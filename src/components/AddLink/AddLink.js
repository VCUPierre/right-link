import React from 'react';
import { Icon } from 'semantic-ui-react';
import './AddLink.css';

const AddLink = ({ collection, data, setData, linkGroup }) => {
    const addSocialLink = {
        name: '',
        iconName: '',
        link: '',
        color: '',
        secondaryColor: '',
        surrounded: '',
        surroundedInColor: '',
    };

    const addRightLinkGroup = {
        name: 'New Group',
        color: 'green',
    };

    const addRightLink = {
        group: linkGroup,
        name: {
            type: 'text',
            value: 'New Right Link',
        },
        link: {
            type: 'text',
            value: '',
        },
        linkSpaced: {
            type: 'bool',
            value: false,
        },
        type: {
            type: 'typeSelect',
            value: '',
        },
        typeAction: {
            type: 'text',
            value: '',
        },
        internal: {
            type: 'bool',
            value: false,
        },
        featured: {
            type: 'bool',
            value: false,
        },
        featuredText: {
            type: 'text',
            value: '',
        },
        featuredTimerDate: {
            type: 'text',
            value: '',
        },
        featuredTimerText: {
            type: 'text',
            value: '',
        },
        featuredColor: {
            type: 'colorSelect',
            value: '',
        },
        featuredAltStyle: {
            type: 'text',
            value: '',
        },
        pinned: {
            type: 'bool',
            value: false,
        },
        mainMedia: {
            type: 'obj',
            value: {},
        },
        additionalLinks: {
            type: 'array',
            value: [],
        },
        color: {
            type: 'colorSelect',
            value: '',
        },
        colorOveride: {
            type: 'text',
            value: '',
        },
        fontColor: {
            type: 'colorSelect',
            value: '',
        },
        colored: {
            type: 'bool',
            value: false,
        },
        buttonColor: {
            type: 'colorSelect',
            value: '',
        },
        bannerSide: {
            type: 'sideSelect',
            value: '',
        },
        additionalStyle: {
            type: 'text',
            value: 'longText',
        },
        modalAlternativeText: {
            type: 'obj',
            value: {
                removed: false,
                text: '',
            },
        },
        bioContent: {
            type: 'array',
            value: [],
        },
    };

    const addAdditionalLinks = {
        name: '',
        link: ''
    }

    const addBio = {
        header: '',
        subHeader: ''
    }

    // need to return empty, if edit mode return 
    const addCollection = '';

    const handleClick = () => {
        if (collection === 'socialLinks') {
            const socialLinksCopy = data.socialLinks.group;
            socialLinksCopy.push(addSocialLink);
            setData({ ...data, [data.socialLinks.group]: [socialLinksCopy] });
        }
        if (collection === 'rightLinks') {
            const rightLinksCopy = data.rightLinks.links;
            rightLinksCopy.push(addRightLink);
            setData({
                ...data,
                [data.rightLinks.links]: rightLinksCopy,
            });
        }
        if (collection === 'rightLinksGroups') {
            const rightLinkGroupsCopy = data.rightLinks.groups;
            rightLinkGroupsCopy.push(addRightLinkGroup);
            setData({ ...data, [data.rightLinks.groups]: rightLinkGroupsCopy });
        }
        if (collection === 'addLink') {
            const linksCopy = data.rightLinks.links[linkGroup].additionalLinks.value;
            linksCopy.push(addAdditionalLinks);
            setData({ ...data, [data.rightLinks.links[linkGroup].additionalLinks.value]: linksCopy})
        }
        if (collection === 'bio') {
            const bioCopy = data.rightLinks.links[linkGroup].bioContent.value;
            bioCopy.push(addBio);
            setData({ ...data, [data.rightLinks.links[linkGroup].bioContent.value]: bioCopy})
        }
        if (collection === 'collection') {
            const collectionCopy = data.rightLinks.links[linkGroup].mainMedia.value.collection.value;
            collectionCopy.push(addCollection);
            setData({ ...data, [data.rightLinks.links[linkGroup].mainMedia.value.collection.value]: collectionCopy})
        }
    };

    return (
        <Icon
            color="green"
            name="add square"
            size="big"
            className="custom"
            link
            onClick={handleClick}
        />
    );
};

export default AddLink;
