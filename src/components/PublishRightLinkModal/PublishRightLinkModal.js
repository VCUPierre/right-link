/* eslint-disable arrow-body-style */
import React from 'react';
import { Modal, Icon, Button } from 'semantic-ui-react';
import './Style.css';

const PublishRightLinkModal = ({
    isModalOpen,
    setIsModalOpen,
    handlePublishClick,
}) => {
    const handleNopeClick = () => {
        setIsModalOpen((previous) => !previous);
    };

    const handlePublishModalClick = () => {
        handlePublishClick();
        setIsModalOpen((previous) => !previous);
    };

    return (
        <Modal centered size="small" open={isModalOpen}>
            <Modal.Header>Should we update your Right-link?</Modal.Header>
            <Modal.Actions>
                <Button color="red" onClick={handleNopeClick}>
                    Nope
                </Button>
                <Button
                    icon
                    labelPosition="right"
                    color="violet"
                    onClick={handlePublishModalClick}
                >
                    Yes, Publish Now
                    <Icon name="paper plane outline" />
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

export default PublishRightLinkModal;
