import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import ProfileButton from '../ProfileButton/ProfileButton';

const RightLinkManagementOpt = ({
    handleEditClick,
    editRightLink,
    handleSaveClick,
    saveRightLink,
}) => (
    <>
        <Button
            icon
            labelPosition="left"
            color="blue"
            disabled={editRightLink}
            onClick={handleEditClick}
        >
            <Icon name="edit outline" />
            Edit
        </Button>
        <Button
            icon
            labelPosition="right"
            color="green"
            disabled={saveRightLink}
            onClick={handleSaveClick}
        >
            Save
            <Icon name="save outline" />
        </Button>
        <ProfileButton />
    </>
);

export default RightLinkManagementOpt;