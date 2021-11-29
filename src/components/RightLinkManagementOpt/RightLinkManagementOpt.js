import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import ProfileButton from '../ProfileButton/ProfileButton';

const RightLinkManagementOpt = ({
    handleEditClick,
    editRightLink,
    handleSaveClick,
    saveRightLink,
    handlePublishClick,
    publishRightLink,
    handleCancelClick,
    disableToggledBanner,
    disableToggle,
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
        {editRightLink ? (
            <Button
                icon
                labelPosition="left"
                color="red"
                disabled={!editRightLink}
                onClick={handleCancelClick}
            >
                Cancel
                <Icon name="cancel" />
            </Button>
        ) : (
            ''
        )}
        {editRightLink ? (
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
        ) : (
            ''
        )}
        {saveRightLink && !publishRightLink ? (
            <Button
                icon
                labelPosition="right"
                color="violet"
                disabled={publishRightLink}
                onClick={handlePublishClick}
            >
                Publish
                <Icon name="paper plane outline" />
            </Button>
        ) : (
            ''
        )}
        <ProfileButton
            disableToggle={disableToggle}
            disableToggledBanner={disableToggledBanner}
        />
    </>
);

export default RightLinkManagementOpt;
