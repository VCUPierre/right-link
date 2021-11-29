/* eslint-disable arrow-body-style */
import React, { useContext } from 'react';
import { Dropdown, Checkbox } from 'semantic-ui-react';
import firebaseApp from '../../utils/auth/firebase';
import { FirebaseContext } from '../../utils/auth/FirebaseContext';

const ProfileButton = ({ disableToggle, disableToggledBanner }) => {
    const { currentUser } = useContext(FirebaseContext);

    const signOut = () => {
        firebaseApp.auth().signOut();
    };

    return (
        <Dropdown button icon="user" direction="left" className="icon">
            <Dropdown.Menu>
                <Dropdown.Item disabled>
                    <span>
                        <strong>{currentUser.email}</strong>
                        {/* <strong>{currentUser.displayName.split(' ')[0]}</strong> */}
                    </span>
                </Dropdown.Item>
                <Dropdown.Item onClick={disableToggle}>
                    <Checkbox
                        onChange={disableToggle}
                        checked={disableToggledBanner}
                    />{' '}
                    Disable right-link
                </Dropdown.Item>
                <Dropdown.Item text="Sign Out" onClick={signOut} />
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default ProfileButton;
