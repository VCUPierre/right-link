import React from 'react';
import { Image } from 'semantic-ui-react';
import Logo from '../../assets/TheRightClickTransparent.png';

const StickyBar = () => (
    <div
        style={{
            justifyContent: 'space-between',
            width: '100%',
            boxShadow: '0 0 1rem 0 rgba(100,110,140,.4)',
            zIndex: '2',
            padding: '1em',
            alignItems: 'center',
            background: 'white',
            textAlign: 'center',
        }}
    >
        <a href="/">
            <Image src={Logo} size="medium" centered />
        </a>
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '60%',
            }}
        />
    </div>
);

export default StickyBar;
