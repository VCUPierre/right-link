import React from 'react';
import { Image, Icon } from 'semantic-ui-react';
import Logo from '../../assets/TheRightClickTransparent.png';
import { Link } from 'react-router-dom';
// import useAuthUser from '../../../Firebase/useAuthUser';

const LoggedInButtons = () => (
    <Link to="/profile">
        <Icon
            name="user circle"
            inverted
            size="big"
            background="white"
            style={{ color: '#3972f4', margin: '0 1em' }}
        />
    </Link>
);

const LoggedOutButtons = () => (
    <>
        <Link
            to="/login"
            style={{
                margin: '0 0 0 5%',
                padding: '.5em',
                border: '1.5px solid #3972f4',
                color: '#3972f4',
                borderRadius: '6px',
                fontWeight: '600',
                width: '100px',
            }}
        >
            Log In
        </Link>
        <Link
            to="/signup"
            style={{
                margin: '0 0 0 5%',
                padding: '.5em',
                background: '#3972f4',
                color: 'white',
                borderRadius: '6px',
                fontWeight: '600',
                width: '100px',
            }}
        >
            Sign Up
        </Link>
    </>
);

const StickyBar = ({ position }) => {
    // const [authUser, loading] = useAuthUser();

    return (
        <div
            style={{
                justifyContent: 'space-between',
                width: '100%',
                boxShadow: '0 0 1rem 0 rgba(100,110,140,.4)',
                zIndex: '2',
                position: 'fixed',
                top: position === 'top' ? '0' : '',
                bottom: position === 'bottom' ? '0' : '',
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
            >
                {/* This is where we can put buttons for the sticky nav */}
                {/* {loading ? null : !!authUser ? (
          <LoggedInButtons />
        ) : (
          <LoggedOutButtons />
        )} */}
            </div>
        </div>
    );
};

export default StickyBar;
