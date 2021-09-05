// Custom Colors = [RLGold,RLWhite]
/* social link custom colors {
   circle colors: [RLWhite]
   icon colors: [RLRed]
}*/
export const TITLE = {
    title: 'Pierre Randall',
    color: 'green',
};
export const LOGO = 'colored';
export const PROFILE_PIC =
    'https://res.cloudinary.com/rightlink/image/upload/v1595178893/PierreR/Profile_gjsvbm.jpg';
export const BACKGROUND = {
    image: false,
    imageLink: '',
    color: 'background-image: linear-gradient(to right top, #00ff80, #00ffbb, #d5fbff, #d5fbff, #ffffff, #ffffff, #ffffff, #ffffff, #d5fbff, #d5fbff, #00ffbb, #00ff80)',
};
export const SOCIAL_LINKS = {
    group: [
        {
            name: 'Instagram',
            iconName: 'instagram',
            link: 'https://www.instagram.com/__pierre9',
            color: 'purple',
            secondaryColor: '',
            surrounded: '',
            surroundedInColor: false,
        },
        {
            name: 'Twitter',
            iconName: 'twitter',
            link: 'https://twitter.com/__pierre9',
            color: 'blue',
            secondaryColor: '',
            surrounded: '',
            surroundedInColor: false,
        },
        {
            name: 'LinkedIn',
            iconName: 'linkedin',
            link: 'https://www.linkedin.com/in/pierre-randall-9a1517134',
            color: 'blue',
            secondaryColor: '',
            surrounded: '',
            surroundedInColor: false,
        },
        {
            name: 'Github',
            iconName: 'github',
            link: 'https://github.com/VCUPierre',
            color: 'black',
            secondaryColor: '',
            surrounded: '',
            surroundedInColor: false,
        },
    ],
};

// featuredTimerDate formats inclued '2020-02-01T01:02:03' or milliseconds e.g 1580518923000 - documentation here https://github.com/ndresx/react-countdown
export const LINK_GROUP_1 = {
    groupName: 'Personal Links',
    groupColor: 'orange',
    group: [
        {
            name: {
                type: 'text',
                value: 'My Business',
            },
            link: {
                type: 'text',
                value: 'https://www.rightclickrva.com/business',
            },
            linkSpaced: {
                type: 'bool',
                value: true,
            },
            type: {
                type: 'typeSelect',
                value: 'external',
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
                value: true,
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
                value: 'green',
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
                value: 'left',
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
        },
        {
            name: {
                type: 'text',
                value: 'My Portfolio',
            },
            link: {
                type: 'text',
                value: 'https://www.rightclickrva.com',
            },
            linkSpaced: {
                type: 'bool',
                value: true,
            },
            type: {
                type: 'typeSelect',
                value: 'external',
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
                value: 'blue',
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
                value: 'left',
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
        },
        {
            name: {
                type: 'text',
                value: 'View My Resume',
            },
            link: {
                type: 'text',
                value: 'https://drive.google.com/file/d/1dMXecxJVIeuqIdfaalDJtlW8hbd_y9I-/view?usp=sharing',
            },
            linkSpaced: {
                type: 'bool',
                value: true,
            },
            type: {
                type: 'typeSelect',
                value: 'external',
            },
            typeAction: {
                type: 'text',
                value: 'download',
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
                value: 'red',
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
                value: 'left',
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
        },
        {
            name: {
                type: 'text',
                value: 'Patreon',
            },
            link: {
                type: 'text',
                value: 'https://www.patreon.com/user?u=53853478',
            },
            linkSpaced: {
                type: 'bool',
                value: true,
            },
            type: {
                type: 'typeSelect',
                value: 'external',
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
                value: 'black',
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
                value: 'left',
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
        },
        // {
        //     name: 'My Portfolio',
        //     link: 'https://www.rightclickrva.com',
        //     linkSpaced: true,
        //     type: 'external',
        //     typeAction: '',
        //     internal: false,
        //     featured: false,
        //     featuredText: '',
        //     featuredTimerDate: '',
        //     featuredTimerText: '',
        //     featuredColor: '',
        //     featuredAltStyle: '',
        //     pinned: false,
        //     mainMedia: {},
        //     additionalLinks: [],
        //     color: 'blue',
        //     colorOveride: '',
        //     fontColor: '',
        //     colored: false,
        //     buttonColor: '',
        //     bannerSide: 'left',
        //     additionalStyle: 'longText',
        //     modalAlternativeText: {
        //         removed: false,
        //         text: '',
        //     },
        //     bioContent: [],
        // },
        // {
        //     name: 'View My Resume',
        //     link: 'https://drive.google.com/file/d/1dMXecxJVIeuqIdfaalDJtlW8hbd_y9I-/view?usp=sharing',
        //     linkSpaced: true,
        //     type: 'external',
        //     typeAction: 'download',
        //     internal: false,
        //     featured: false,
        //     featuredText: '',
        //     featuredTimerDate: '',
        //     featuredTimerText: '',
        //     featuredColor: '',
        //     featuredAltStyle: '',
        //     pinned: false,
        //     mainMedia: {},
        //     additionalLinks: [],
        //     color: 'red',
        //     colorOveride: '',
        //     fontColor: '',
        //     colored: false,
        //     buttonColor: '',
        //     bannerSide: 'left',
        //     additionalStyle: 'longText',
        //     modalAlternativeText: {
        //         removed: false,
        //         text: '',
        //     },
        //     bioContent: [],
        // },
        // {
        //     name: 'Patreon',
        //     link: 'https://www.patreon.com/user?u=53853478',
        //     linkSpaced: true,
        //     type: 'external',
        //     typeAction: '',
        //     internal: false,
        //     featured: false,
        //     featuredText: '',
        //     featuredTimerDate: '',
        //     featuredTimerText: '',
        //     featuredColor: '',
        //     featuredAltStyle: '',
        //     pinned: false,
        //     mainMedia: {},
        //     additionalLinks: [],
        //     color: 'black',
        //     colorOveride: '',
        //     fontColor: '',
        //     colored: false,
        //     buttonColor: '',
        //     bannerSide: 'left',
        //     additionalStyle: 'longText',
        //     modalAlternativeText: {
        //         removed: false,
        //         text: '',
        //     },
        //     bioContent: [],
        // },
    ],
};

// export const LINK_GROUP_2 = {
//     groupName: 'Demo Links',
//     groupColor: 'red',
//     group: [
//         {
//             name: {
//                 type: 'text',
//                 value: 'Internal Link',
//             },
//             link: {
//                 type: 'text',
//                 value: '',
//             },
//             linkSpaced: {
//                 type: 'bool',
//                 value: true,
//             },
//             type: {
//                 type: 'typeSelect',
//                 value: 'internal',
//             },
//             typeAction: {
//                 type: 'text',
//                 value: '',
//             },
//             internal: {
//                 type: 'bool',
//                 value: true,
//             },
//             featured: {
//                 type: 'bool',
//                 value: false,
//             },
//             featuredText: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredTimerDate: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredTimerText: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredColor: {
//                 type: 'colorSelect',
//                 value: '',
//             },
//             featuredAltStyle: {
//                 type: 'text',
//                 value: '',
//             },
//             pinned: {
//                 type: 'bool',
//                 value: false,
//             },
//             mainMedia: {
//                 type: 'obj',
//                 value: {
//                     type: 'media',
//                     link: 'https://www.youtube.com/watch?v=UfQHEpf2q8k',
//                     mediaText: 'Great Cover ^^',
//                 },
//             },
//             additionalLinks: {
//                 type: 'array',
//                 value: [
//                     {
//                         name: 'Tidal',
//                         link: 'https://tidal.com',
//                     },
//                     {
//                         name: 'Spotify',
//                         link: 'https://open.spotify.com',
//                     },
//                     {
//                         name: 'Apple Music',
//                         link: 'https://music.apple.com',
//                     },
//                 ],
//             },
//             color: {
//                 type: 'colorSelect',
//                 value: 'black',
//             },
//             colorOveride: {
//                 type: 'text',
//                 value: '',
//             },
//             fontColor: {
//                 type: 'colorSelect',
//                 value: '',
//             },
//             colored: {
//                 type: 'bool',
//                 value: false,
//             },
//             buttonColor: {
//                 type: 'colorSelect',
//                 value: '',
//             },
//             bannerSide: {
//                 type: 'sideSelect',
//                 value: 'left',
//             },
//             additionalStyle: {
//                 type: 'text',
//                 value: 'longText',
//             },
//             modalAlternativeText: {
//                 type: 'obj',
//                 value: {
//                     removed: false,
//                     text: '',
//                 },
//             },
//             bioContent: {
//                 type: 'array',
//                 value: [],
//             },
//         },
//         {
//             name: {
//                 type: 'text',
//                 value: 'Basic Banner Link',
//             },
//             link: {
//                 type: 'text',
//                 value: '',
//             },
//             linkSpaced: {
//                 type: 'bool',
//                 value: true,
//             },
//             type: {
//                 type: 'typeSelect',
//                 value: 'internal',
//             },
//             typeAction: {
//                 type: 'text',
//                 value: '',
//             },
//             internal: {
//                 type: 'bool',
//                 value: true,
//             },
//             featured: {
//                 type: 'bool',
//                 value: true,
//             },
//             featuredText: {
//                 type: 'text',
//                 value: 'New Banner',
//             },
//             featuredTimerDate: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredTimerText: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredColor: {
//                 type: 'colorSelect',
//                 value: 'red',
//             },
//             featuredAltStyle: {
//                 type: 'text',
//                 value: '',
//             },
//             pinned: {
//                 type: 'bool',
//                 value: false,
//             },
//             mainMedia: {
//                 type: 'obj',
//                 value: {
//                     type: 'still',
//                     link: 'https://res.cloudinary.com/rightlink/image/upload/v1595189055/PierreR/image_ard339.png',
//                     mediaText: 'Additional Links Below',
//                 },
//             },
//             additionalLinks: {
//                 type: 'array',
//                 value: [
//                     {
//                         name: 'Tidal',
//                         link: 'https://tidal.com',
//                     },
//                     {
//                         name: 'Spotify',
//                         link: 'https://spotify.com',
//                     },
//                     {
//                         name: 'Apple Music',
//                         link: 'https://music.apple.com',
//                     },
//                     {
//                         name: 'Sound Cloud',
//                         link: 'https://soundcloud.com',
//                     },
//                     {
//                         name: 'Youtube',
//                         link: 'https://youtube.com',
//                     },
//                 ],
//             },
//             color: {
//                 type: 'colorSelect',
//                 value: 'red',
//             },
//             colorOveride: {
//                 type: 'text',
//                 value: '',
//             },
//             fontColor: {
//                 type: 'colorSelect',
//                 value: '',
//             },
//             colored: {
//                 type: 'bool',
//                 value: false,
//             },
//             buttonColor: {
//                 type: 'colorSelect',
//                 value: '',
//             },
//             bannerSide: {
//                 type: 'sideSelect',
//                 value: 'left',
//             },
//             additionalStyle: {
//                 type: 'text',
//                 value: 'longText',
//             },
//             modalAlternativeText: {
//                 type: 'obj',
//                 value: {
//                     removed: false,
//                     text: '',
//                 },
//             },
//             bioContent: {
//                 type: 'array',
//                 value: [],
//             },
//         },
//         {
//             name: {
//                 type: 'text',
//                 value: 'Countdown Banner Link',
//             },
//             link: {
//                 type: 'text',
//                 value: 'https://unitedmasters.com/m/5e99d519a2ca6d196513ca76',
//             },
//             linkSpaced: {
//                 type: 'bool',
//                 value: true,
//             },
//             type: {
//                 type: 'typeSelect',
//                 value: 'internal',
//             },
//             typeAction: {
//                 type: 'text',
//                 value: '',
//             },
//             internal: {
//                 type: 'bool',
//                 value: true,
//             },
//             featured: {
//                 type: 'bool',
//                 value: true,
//             },
//             featuredText: {
//                 type: 'text',
//                 value: 'New Content in ',
//             },
//             featuredTimerDate: {
//                 type: 'text',
//                 value: '2021-12-31T00:00:00',
//             },
//             featuredTimerText: {
//                 type: 'text',
//                 value: 'Live Now',
//             },
//             featuredColor: {
//                 type: 'colorSelect',
//                 value: 'green',
//             },
//             featuredAltStyle: {
//                 type: 'text',
//                 value: '',
//             },
//             pinned: {
//                 type: 'bool',
//                 value: false,
//             },
//             mainMedia: {
//                 type: 'obj',
//                 value: {
//                     type: 'still',
//                     link: 'https://res.cloudinary.com/rightlink/image/upload/v1595189055/PierreR/image_ard339.png',
//                     mediaText: 'Stream Now',
//                     videoPoster: '',
//                 },
//             },
//             additionalLinks: {
//                 type: 'array',
//                 value: [],
//             },
//             color: {
//                 type: 'colorSelect',
//                 value: 'green',
//             },
//             colorOveride: {
//                 type: 'text',
//                 value: '',
//             },
//             fontColor: {
//                 type: 'colorSelect',
//                 value: '',
//             },
//             colored: {
//                 type: 'bool',
//                 value: false,
//             },
//             buttonColor: {
//                 type: 'colorSelect',
//                 value: '',
//             },
//             bannerSide: {
//                 type: 'sideSelect',
//                 value: 'left',
//             },
//             additionalStyle: {
//                 type: 'text',
//                 value: 'longText',
//             },
//             modalAlternativeText: {
//                 type: 'obj',
//                 value: {
//                     removed: false,
//                     text: '',
//                 },
//             },
//             bioContent: {
//                 type: 'array',
//                 value: [],
//             },
//         },
//         {
//             name: {
//                 type: 'text',
//                 value: 'Attached Links 1 of 2',
//             },
//             link: {
//                 type: 'text',
//                 value: '',
//             },
//             linkSpaced: {
//                 type: 'bool',
//                 value: false,
//             },
//             type: {
//                 type: 'typeSelect',
//                 value: 'internal',
//             },
//             typeAction: {
//                 type: 'text',
//                 value: '',
//             },
//             internal: {
//                 type: 'bool',
//                 value: true,
//             },
//             featured: {
//                 type: 'bool',
//                 value: false,
//             },
//             featuredText: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredTimerDate: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredTimerText: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredColor: {
//                 type: 'colorSelect',
//                 value: '',
//             },
//             featuredAltStyle: {
//                 type: 'text',
//                 value: '',
//             },
//             pinned: {
//                 type: 'bool',
//                 value: false,
//             },
//             mainMedia: {
//                 type: 'obj',
//                 value: {},
//             },
//             additionalLinks: {
//                 type: 'array',
//                 value: [
//                     {
//                         name: 'Tidal',
//                         link: 'https://tidal.com',
//                     },
//                     {
//                         name: 'Spotify',
//                         link: 'https://spotify.com',
//                     },
//                     {
//                         name: 'Apple Music',
//                         link: 'https://applemusic.com',
//                     },
//                     {
//                         name: 'Sound Cloud',
//                         link: 'https://soundcloud.com',
//                     },
//                     {
//                         name: 'Youtube',
//                         link: 'https://youtube.com',
//                     },
//                 ],
//             },
//             color: {
//                 type: 'colorSelect',
//                 value: 'blue',
//             },
//             colorOveride: {
//                 type: 'text',
//                 value: '',
//             },
//             fontColor: {
//                 type: 'colorSelect',
//                 value: '',
//             },
//             colored: {
//                 type: 'bool',
//                 value: false,
//             },
//             buttonColor: {
//                 type: 'colorSelect',
//                 value: '',
//             },
//             bannerSide: {
//                 type: 'sideSelect',
//                 value: 'left',
//             },
//             additionalStyle: {
//                 type: 'text',
//                 value: 'longText',
//             },
//             modalAlternativeText: {
//                 type: 'obj',
//                 value: {
//                     removed: false,
//                     text: '',
//                 },
//             },
//             bioContent: {
//                 type: 'array',
//                 value: [],
//             },
//         },
//         {
//             name: {
//                 type: 'text',
//                 value: 'Attached Links 2 of 2',
//             },
//             link: {
//                 type: 'text',
//                 value: '',
//             },
//             linkSpaced: {
//                 type: 'bool',
//                 value: true,
//             },
//             type: {
//                 type: 'typeSelect',
//                 value: 'internal',
//             },
//             typeAction: {
//                 type: 'text',
//                 value: '',
//             },
//             internal: {
//                 type: 'bool',
//                 value: true,
//             },
//             featured: {
//                 type: 'bool',
//                 value: false,
//             },
//             featuredText: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredTimerDate: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredTimerText: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredColor: {
//                 type: 'colorSelect',
//                 value: '',
//             },
//             featuredAltStyle: {
//                 type: 'text',
//                 value: '',
//             },
//             pinned: {
//                 type: 'bool',
//                 value: false,
//             },
//             mainMedia: {
//                 type: 'obj',
//                 value: {},
//             },
//             additionalLinks: {
//                 type: 'array',
//                 value: [
//                     {
//                         name: 'Tidal',
//                         link: 'https://tidal.com',
//                     },
//                     {
//                         name: 'Spotify',
//                         link: 'https://spotify.com',
//                     },
//                     {
//                         name: 'Apple Music',
//                         link: 'https://applemusic.com',
//                     },
//                     {
//                         name: 'Sound Cloud',
//                         link: 'https://soundcloud.com',
//                     },
//                     {
//                         name: 'Youtube',
//                         link: 'https://youtube.com',
//                     },
//                 ],
//             },
//             color: {
//                 type: 'colorSelect',
//                 value: 'blue',
//             },
//             colorOveride: {
//                 type: 'text',
//                 value: '',
//             },
//             fontColor: {
//                 type: 'colorSelect',
//                 value: '',
//             },
//             colored: {
//                 type: 'bool',
//                 value: false,
//             },
//             buttonColor: {
//                 type: 'colorSelect',
//                 value: '',
//             },
//             bannerSide: {
//                 type: 'sideSelect',
//                 value: 'left',
//             },
//             additionalStyle: {
//                 type: 'text',
//                 value: 'longText',
//             },
//             modalAlternativeText: {
//                 type: 'obj',
//                 value: {
//                     removed: false,
//                     text: '',
//                 },
//             },
//             bioContent: {
//                 type: 'array',
//                 value: [],
//             },
//         },
//         {
//             name: {
//                 type: 'text',
//                 value: 'Colored Link',
//             },
//             link: {
//                 type: 'text',
//                 value: '',
//             },
//             linkSpaced: {
//                 type: 'bool',
//                 value: true,
//             },
//             type: {
//                 type: 'typeSelect',
//                 value: 'internal',
//             },
//             typeAction: {
//                 type: 'text',
//                 value: '',
//             },
//             internal: {
//                 type: 'bool',
//                 value: true,
//             },
//             featured: {
//                 type: 'bool',
//                 value: false,
//             },
//             featuredText: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredTimerDate: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredTimerText: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredColor: {
//                 type: 'colorSelect',
//                 value: '',
//             },
//             featuredAltStyle: {
//                 type: 'text',
//                 value: '',
//             },
//             pinned: {
//                 type: 'bool',
//                 value: false,
//             },
//             mainMedia: {
//                 type: 'obj',
//                 value: {},
//             },
//             additionalLinks: {
//                 type: 'array',
//                 value: [
//                     {
//                         name: 'Tidal',
//                         link: 'https://tidal.com',
//                     },
//                     {
//                         name: 'Spotify',
//                         link: 'https://spotify.com',
//                     },
//                     {
//                         name: 'Apple Music',
//                         link: 'https://applemusic.com',
//                     },
//                     {
//                         name: 'Sound Cloud',
//                         link: 'https://soundcloud.com',
//                     },
//                     {
//                         name: 'Youtube',
//                         link: 'https://youtube.com',
//                     },
//                 ],
//             },
//             color: {
//                 type: 'colorSelect',
//                 value: 'green',
//             },
//             colorOveride: {
//                 type: 'text',
//                 value: '',
//             },
//             fontColor: {
//                 type: 'colorSelect',
//                 value: 'RLWhite',
//             },
//             colored: {
//                 type: 'bool',
//                 value: true,
//             },
//             buttonColor: {
//                 type: 'colorSelect',
//                 value: 'green',
//             },
//             bannerSide: {
//                 type: 'sideSelect',
//                 value: 'left',
//             },
//             additionalStyle: {
//                 type: 'text',
//                 value: 'longText',
//             },
//             modalAlternativeText: {
//                 type: 'obj',
//                 value: {
//                     removed: false,
//                     text: '',
//                 },
//             },
//             bioContent: {
//                 type: 'array',
//                 value: [],
//             },
//         },
//         {
//             name: {
//                 type: 'text',
//                 value: 'Text Only Link',
//             },
//             link: {
//                 type: 'text',
//                 value: '',
//             },
//             linkSpaced: {
//                 type: 'bool',
//                 value: true,
//             },
//             type: {
//                 type: 'typeSelect',
//                 value: 'bio',
//             },
//             typeAction: {
//                 type: 'text',
//                 value: '',
//             },
//             internal: {
//                 type: 'bool',
//                 value: false,
//             },
//             featured: {
//                 type: 'bool',
//                 value: false,
//             },
//             featuredText: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredTimerDate: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredTimerText: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredColor: {
//                 type: 'colorSelect',
//                 value: '',
//             },
//             featuredAltStyle: {
//                 type: 'text',
//                 value: '',
//             },
//             pinned: {
//                 type: 'bool',
//                 value: false,
//             },
//             mainMedia: {
//                 type: 'obj',
//                 value: {},
//             },
//             additionalLinks: {
//                 type: 'array',
//                 value: [],
//             },
//             color: {
//                 type: 'colorSelect',
//                 value: 'blue',
//             },
//             colorOveride: {
//                 type: 'text',
//                 value: '',
//             },
//             fontColor: {
//                 type: 'colorSelect',
//                 value: '',
//             },
//             colored: {
//                 type: 'bool',
//                 value: false,
//             },
//             buttonColor: {
//                 type: 'colorSelect',
//                 value: '',
//             },
//             bannerSide: {
//                 type: 'sideSelect',
//                 value: 'left',
//             },
//             additionalStyle: {
//                 type: 'text',
//                 value: 'longText',
//             },
//             modalAlternativeText: {
//                 type: 'obj',
//                 value: {
//                     removed: false,
//                     text: '',
//                 },
//             },
//             bioContent: {
//                 type: 'array',
//                 value: [
//                     {
//                         header: '',
//                         subHeader:
//                             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur ullamcorper felis, quis rhoncus erat efficitur in. Nam commodo ac mauris porttitor dignissim.',
//                     },
//                     {
//                         header: 'Lorem ipsum:',
//                         subHeader:
//                             'Morbi sem justo, cursus non sollicitudin et, semper eu sapien.',
//                     },
//                 ],
//             },
//         },
//         {
//             name: {
//                 type: 'text',
//                 value: 'Image Link',
//             },
//             link: {
//                 type: 'text',
//                 value: 'https://right-link.com',
//             },
//             linkSpaced: {
//                 type: 'bool',
//                 value: true,
//             },
//             type: {
//                 type: 'typeSelect',
//                 value: 'still/external',
//             },
//             typeAction: {
//                 type: 'text',
//                 value: '',
//             },
//             internal: {
//                 type: 'bool',
//                 value: false,
//             },
//             featured: {
//                 type: 'bool',
//                 value: false,
//             },
//             featuredText: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredTimerDate: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredTimerText: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredColor: {
//                 type: 'colorSelect',
//                 value: 'red',
//             },
//             featuredAltStyle: {
//                 type: 'text',
//                 value: '',
//             },
//             pinned: {
//                 type: 'bool',
//                 value: false,
//             },
//             mainMedia: {
//                 type: 'obj',
//                 value: {
//                     type: 'still/external',
//                     link: 'https://res.cloudinary.com/rightlink/image/upload/v1611010706/PierreR/IMG_4057_uidqko.jpg',
//                     mediaText: 'Image Link',
//                     videoPoster: '',
//                 },
//             },
//             additionalLinks: {
//                 type: 'array',
//                 value: [],
//             },
//             color: {
//                 type: 'colorSelect',
//                 value: 'red',
//             },
//             colorOveride: {
//                 type: 'text',
//                 value: '',
//             },
//             fontColor: {
//                 type: 'colorSelect',
//                 value: '',
//             },
//             colored: {
//                 type: 'bool',
//                 value: false,
//             },
//             buttonColor: {
//                 type: 'colorSelect',
//                 value: '',
//             },
//             bannerSide: {
//                 type: 'sideSelect',
//                 value: 'left',
//             },
//             additionalStyle: {
//                 type: 'text',
//                 value: 'longText',
//             },
//             modalAlternativeText: {
//                 type: 'obj',
//                 value: {
//                     removed: false,
//                     text: '',
//                 },
//             },
//             bioContent: {
//                 type: 'array',
//                 value: [],
//             },
//         },
//         {
//             name: {
//                 type: 'text',
//                 value: 'Video Link',
//             },
//             link: {
//                 type: 'text',
//                 value: '',
//             },
//             linkSpaced: {
//                 type: 'bool',
//                 value: true,
//             },
//             type: {
//                 type: 'typeSelect',
//                 value: 'item',
//             },
//             typeAction: {
//                 type: 'text',
//                 value: '',
//             },
//             internal: {
//                 type: 'bool',
//                 value: false,
//             },
//             featured: {
//                 type: 'bool',
//                 value: false,
//             },
//             featuredText: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredTimerDate: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredTimerText: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredColor: {
//                 type: 'colorSelect',
//                 value: 'red',
//             },
//             featuredAltStyle: {
//                 type: 'text',
//                 value: '',
//             },
//             pinned: {
//                 type: 'bool',
//                 value: false,
//             },
//             mainMedia: {
//                 type: 'obj',
//                 value: {
//                     type: 'video',
//                     link: 'https://www.youtube.com/watch?v=UfQHEpf2q8k',
//                     mediaText: 'Video Link',
//                     videoPoster: '',
//                 },
//             },
//             additionalLinks: {
//                 type: 'array',
//                 value: [],
//             },
//             color: {
//                 type: 'colorSelect',
//                 value: 'green',
//             },
//             colorOveride: {
//                 type: 'text',
//                 value: '',
//             },
//             fontColor: {
//                 type: 'colorSelect',
//                 value: '',
//             },
//             colored: {
//                 type: 'bool',
//                 value: false,
//             },
//             buttonColor: {
//                 type: 'colorSelect',
//                 value: '',
//             },
//             bannerSide: {
//                 type: 'sideSelect',
//                 value: 'left',
//             },
//             additionalStyle: {
//                 type: 'text',
//                 value: 'longText',
//             },
//             modalAlternativeText: {
//                 type: 'obj',
//                 value: {
//                     removed: false,
//                     text: '',
//                 },
//             },
//             bioContent: {
//                 type: 'array',
//                 value: [],
//             },
//         },
//         {
//             name: {
//                 type: 'text',
//                 value: 'Slideshow Link',
//             },
//             link: {
//                 type: 'text',
//                 value: '',
//             },
//             linkSpaced: {
//                 type: 'bool',
//                 value: true,
//             },
//             type: {
//                 type: 'typeSelect',
//                 value: 'slideshow',
//             },
//             typeAction: {
//                 type: 'text',
//                 value: '',
//             },
//             internal: {
//                 type: 'bool',
//                 value: false,
//             },
//             featured: {
//                 type: 'bool',
//                 value: false,
//             },
//             featuredText: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredTimerDate: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredTimerText: {
//                 type: 'text',
//                 value: '',
//             },
//             featuredColor: {
//                 type: 'colorSelect',
//                 value: 'red',
//             },
//             featuredAltStyle: {
//                 type: 'text',
//                 value: '',
//             },
//             pinned: {
//                 type: 'bool',
//                 value: false,
//             },
//             mainMedia: {
//                 type: 'obj',
//                 value: {
//                     type: 'slideshow',
//                     mediaText: 'Slideshow Link',
//                     speed: 1000,
//                     collection: [
//                         'https://res.cloudinary.com/rightlink/image/upload/v1595189055/PierreR/image_ard339.png',
//                         'https://res.cloudinary.com/rightlink/image/upload/v1595189055/PierreR/image_ard339.png',
//                         'https://res.cloudinary.com/rightlink/image/upload/v1595189055/PierreR/image_ard339.png',
//                     ],
//                 },
//             },
//             additionalLinks: {
//                 type: 'array',
//                 value: [],
//             },
//             color: {
//                 type: 'colorSelect',
//                 value: 'blue',
//             },
//             colorOveride: {
//                 type: 'text',
//                 value: '',
//             },
//             fontColor: {
//                 type: 'colorSelect',
//                 value: '',
//             },
//             colored: {
//                 type: 'bool',
//                 value: false,
//             },
//             buttonColor: {
//                 type: 'colorSelect',
//                 value: '',
//             },
//             bannerSide: {
//                 type: 'sideSelect',
//                 value: 'left',
//             },
//             additionalStyle: {
//                 type: 'text',
//                 value: 'longText',
//             },
//             modalAlternativeText: {
//                 type: 'obj',
//                 value: {
//                     removed: false,
//                     text: '',
//                 },
//             },
//             bioContent: {
//                 type: 'array',
//                 value: [],
//             },
//         },
//     ],
// };

// export const LINK_GROUP_3 = {};

// export const ARCHIVED = {
//     groupName: '',
//     groupColor: 'green',
//     group: [
//         {
//             name: 'Get your Right-Link',
//             link: 'https://form.jotform.com/202203893841049',
//             linkSpaced: true,
//             type: 'external',
//             typeAction: '',
//             internal: false,
//             featured: false,
//             featuredText: '',
//             featuredTimerDate: '',
//             featuredTimerText: '',
//             featuredColor: '',
//             featuredAltStyle: '',
//             pinned: true,
//             mainMedia: {},
//             additionalLinks: [],
//             color: 'green',
//             colorOveride: '',
//             fontColor: '',
//             colored: false,
//             buttonColor: '',
//             bannerSide: 'left',
//             additionalStyle: 'longText',
//             modalAlternativeText: {
//                 removed: false,
//                 text: '',
//             },
//             bioContent: [],
//         },
//         {
//             name: 'Update existing Right-link',
//             link: 'https://form.jotform.com/202205276100135',
//             linkSpaced: true,
//             type: 'external',
//             typeAction: '',
//             internal: false,
//             featured: false,
//             featuredText: '',
//             featuredTimerDate: '',
//             featuredTimerText: '',
//             featuredColor: '',
//             featuredAltStyle: '',
//             pinned: false,
//             mainMedia: {},
//             additionalLinks: [],
//             color: 'blue',
//             colorOveride: '',
//             fontColor: '',
//             colored: false,
//             buttonColor: '',
//             bannerSide: 'left',
//             additionalStyle: '',
//             modalAlternativeText: {
//                 removed: false,
//                 text: '',
//             },
//             bioContent: [],
//         },
// {
//     name: 'Internal Link',
//     link: '',
//     linkSpaced: true,
//     type: 'internal',
//     typeAction: '',
//     internal: true,
//     featured: false,
//     featuredText: '',
//     featuredTimerDate: '',
//     featuredTimerText: '',
//     featuredColor: '',
//     featuredAltStyle: '',
//     pinned: true,
//     mainMedia: {
//         type: 'media',
//         link: 'https://www.youtube.com/watch?v=UfQHEpf2q8k',
//         mediaText: 'Great Cover ^^',
//     },
//     additionalLinks: [
//         {
//             name: 'Tidal',
//             link: 'https://tidal.com',
//         },
//         {
//             name: 'Spotify',
//             link: 'https://open.spotify.com',
//         },
//         {
//             name: 'Apple Music',
//             link: 'https://music.apple.com',
//         },
//     ],
//     color: 'black',
//     colorOveride: '',
//     fontColor: '',
//     colored: false,
//     buttonColor: '',
//     bannerSide: 'left',
//     additionalStyle: 'longText',
//     modalAlternativeText: {
//         removed: false,
//         text: '',
//     },
//     bioContent: [],
// },
// {
//     name: 'Basic Banner Link',
//     link: '',
//     linkSpaced: true,
//     type: 'internal',
//     typeAction: '',
//     internal: true,
//     featured: true,
//     featuredText: 'New Banner',
//     featuredTimerDate: '',
//     featuredTimerText: '',
//     featuredColor: 'red',
//     featuredAltStyle: '',
//     pinned: false,
//     mainMedia: {
//         type: 'still',
//         link: 'https://res.cloudinary.com/rightlink/image/upload/v1595189055/PierreR/image_ard339.png',
//         mediaText: 'Additional Links Below',
//     },
//     additionalLinks: [
//         {
//             name: 'Tidal',
//             link: 'https://tidal.com',
//         },
//         {
//             name: 'Spotify',
//             link: 'https://spotify.com',
//         },
//         {
//             name: 'Apple Music',
//             link: 'https://music.apple.com',
//         },
//         {
//             name: 'Sound Cloud',
//             link: 'https://soundcloud.com',
//         },
//         {
//             name: 'Youtube',
//             link: 'https://youtube.com',
//         },
//     ],
//     color: 'red',
//     colorOveride: '',
//     fontColor: '',
//     colored: false,
//     buttonColor: '',
//     bannerSide: 'left',
//     additionalStyle: 'longText',
//     modalAlternativeText: {
//         removed: false,
//         text: '',
//     },
//     bioContent: [],
// },
// {
//     name: 'Countdown Banner Link',
//     link: 'https://unitedmasters.com/m/5e99d519a2ca6d196513ca76',
//     linkSpaced: true,
//     type: 'internal',
//     typeAction: '',
//     internal: true,
//     featured: true,
//     featuredText: 'New Content in ',
//     featuredTimerDate: '2021-12-31T00:00:00',
//     featuredTimerText: 'Live now',
//     featuredColor: 'green',
//     featuredAltStyle: '',
//     pinned: false,
//     mainMedia: {
//         type: 'still',
//         link: 'https://res.cloudinary.com/rightlink/image/upload/v1595189055/PierreR/image_ard339.png',
//         mediaText: 'Stream Now',
//         videoPoster: '',
//     },
//     additionalLinks: [],
//     color: 'green',
//     colorOveride: '',
//     fontColor: '',
//     colored: false,
//     buttonColor: '',
//     bannerSide: 'left',
//     additionalStyle: 'longText',
//     modalAlternativeText: {
//         removed: false,
//         text: '',
//     },
//     bioContent: [],
// },
// {
//     name: 'Attached Links 1 of 2',
//     link: '',
//     linkSpaced: false,
//     type: 'internal',
//     typeAction: '',
//     internal: true,
//     featured: false,
//     featuredText: '',
//     featuredTimerDate: '',
//     featuredTimerText: '',
//     featuredColor: '',
//     featuredAltStyle: '',
//     pinned: false,
//     mainMedia: {},
//     additionalLinks: [
//         {
//             name: 'Tidal',
//             link: 'https://tidal.com',
//         },
//         {
//             name: 'Spotify',
//             link: 'https://spotify.com',
//         },
//         {
//             name: 'Apple Music',
//             link: 'https://applemusic.com',
//         },
//         {
//             name: 'Sound Cloud',
//             link: 'https://soundcloud.com',
//         },
//         {
//             name: 'Youtube',
//             link: 'https://youtube.com',
//         },
//     ],
//     color: 'blue',
//     colorOveride: '',
//     fontColor: '',
//     colored: false,
//     buttonColor: '',
//     bannerSide: 'left',
//     additionalStyle: 'longText',
//     modalAlternativeText: {
//         removed: false,
//         text: '',
//     },
//     bioContent: [],
// },
// {
//     name: 'Attached Links 2 of 2',
//     link: '',
//     linkSpaced: true,
//     type: 'internal',
//     typeAction: '',
//     internal: true,
//     featured: false,
//     featuredText: '',
//     featuredTimerDate: '',
//     featuredTimerText: '',
//     featuredColor: '',
//     featuredAltStyle: '',
//     pinned: false,
//     mainMedia: {},
//     additionalLinks: [
//         {
//             name: 'Tidal',
//             link: 'https://tidal.com',
//         },
//         {
//             name: 'Spotify',
//             link: 'https://spotify.com',
//         },
//         {
//             name: 'Apple Music',
//             link: 'https://applemusic.com',
//         },
//         {
//             name: 'Sound Cloud',
//             link: 'https://soundcloud.com',
//         },
//         {
//             name: 'Youtube',
//             link: 'https://youtube.com',
//         },
//     ],
//     color: 'blue',
//     colorOveride: '',
//     fontColor: '',
//     colored: false,
//     buttonColor: '',
//     bannerSide: 'left',
//     additionalStyle: 'longText',
//     modalAlternativeText: {
//         removed: false,
//         text: '',
//     },
//     bioContent: [],
// },
// {
//     name: 'Colored Link',
//     link: '',
//     linkSpaced: true,
//     type: 'internal',
//     typeAction: '',
//     internal: true,
//     featured: false,
//     featuredText: '',
//     featuredTimerDate: '',
//     featuredTimerText: '',
//     featuredColor: '',
//     featuredAltStyle: '',
//     pinned: false,
//     mainMedia: {},
//     additionalLinks: [
//         {
//             name: 'Tidal',
//             link: 'https://tidal.com',
//         },
//         {
//             name: 'Spotify',
//             link: 'https://spotify.com',
//         },
//         {
//             name: 'Apple Music',
//             link: 'https://applemusic.com',
//         },
//         {
//             name: 'Sound Cloud',
//             link: 'https://soundcloud.com',
//         },
//         {
//             name: 'Youtube',
//             link: 'https://youtube.com',
//         },
//     ],
//     color: 'green',
//     colorOveride: '',
//     fontColor: 'RLWhite',
//     colored: true,
//     buttonColor: 'green',
//     bannerSide: 'left',
//     additionalStyle: 'longText',
//     modalAlternativeText: {
//         removed: false,
//         text: '',
//     },
//     bioContent: [],
// },
// {
//     name: 'Text Only Link',
//     link: '',
//     linkSpaced: true,
//     type: 'bio',
//     typeAction: '',
//     internal: false,
//     featured: false,
//     featuredText: '',
//     featuredTimerDate: '',
//     featuredTimerText: '',
//     featuredColor: '',
//     featuredAltStyle: '',
//     pinned: true,
//     mainMedia: {},
//     additionalLinks: [],
//     color: 'blue',
//     colorOveride: '',
//     fontColor: '',
//     colored: false,
//     buttonColor: '',
//     bannerSide: 'left',
//     additionalStyle: 'longText',
//     modalAlternativeText: {
//         removed: false,
//         text: '',
//     },
//     bioContent: [
//         {
//             header: '',
//             subHeader:
//                 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur ullamcorper felis, quis rhoncus erat efficitur in. Nam commodo ac mauris porttitor dignissim.',
//         },
//         {
//             header: 'Lorem ipsum:',
//             subHeader:
//                 'Morbi sem justo, cursus non sollicitudin et, semper eu sapien.',
//         },
//     ],
// },
// {
//     name: 'Image Link',
//     link: 'https://right-link.com',
//     linkSpaced: true,
//     type: 'still/external',
//     typeAction: '',
//     internal: false,
//     featured: false,
//     featuredText: '',
//     featuredTimerDate: '',
//     featuredTimerText: '',
//     featuredColor: 'red',
//     featuredAltStyle: '',
//     pinned: true,
//     mainMedia: {
//         type: 'still/external',
//         link: 'https://res.cloudinary.com/rightlink/image/upload/v1611010706/PierreR/IMG_4057_uidqko.jpg',
//         mediaText: 'Image Link',
//         videoPoster: '',
//     },
//     additionalLinks: [],
//     color: 'red',
//     colorOveride: '',
//     fontColor: '',
//     colored: false,
//     buttonColor: '',
//     bannerSide: 'left',
//     additionalStyle: '',
//     modalAlternativeText: {
//         removed: false,
//         text: '',
//     },
//     bioContent: [],
// },
// {
//     name: 'Video Link',
//     link: '',
//     linkSpaced: true,
//     type: 'item',
//     typeAction: '',
//     internal: false,
//     featured: false,
//     featuredText: '',
//     featuredTimerDate: '',
//     featuredTimerText: '',
//     featuredColor: 'red',
//     featuredAltStyle: '',
//     pinned: true,
//     mainMedia: {
//         type: 'video',
//         link: 'https://www.youtube.com/watch?v=UfQHEpf2q8k',
//         mediaText: 'Video Link',
//         videoPoster: '',
//     },
//     additionalLinks: [],
//     color: 'green',
//     colorOveride: '',
//     fontColor: '',
//     colored: false,
//     buttonColor: '',
//     bannerSide: 'left',
//     additionalStyle: '',
//     modalAlternativeText: {
//         removed: false,
//         text: '',
//     },
//     bioContent: [],
// },
// {
//     name: 'Slideshow Link',
//     link: '',
//     linkSpaced: true,
//     type: 'slideshow',
//     typeAction: '',
//     internal: false,
//     featured: false,
//     featuredText: '',
//     featuredTimerDate: '',
//     featuredTimerText: '',
//     featuredColor: '',
//     featuredAltStyle: '',
//     pinned: true,
//     mainMedia: {
//         type: 'slideshow',
//         mediaText: 'Slideshow Link',
//         speed: 1000,
//         collection: [
//             'https://res.cloudinary.com/rightlink/image/upload/v1595189055/PierreR/image_ard339.png',
//             'https://res.cloudinary.com/rightlink/image/upload/v1595189055/PierreR/image_ard339.png',
//             'https://res.cloudinary.com/rightlink/image/upload/v1595189055/PierreR/image_ard339.png',
//         ],
//     },
//     additionalLinks: [],
//     color: 'blue',
//     colorOveride: '',
//     fontColor: '',
//     colored: false,
//     buttonColor: '',
//     bannerSide: 'left',
//     additionalStyle: 'longText',
//     modalAlternativeText: {
//         removed: false,
//         text: '',
//     },
//     bioContent: [],
// },
//     ],
// };
