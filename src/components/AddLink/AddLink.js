import React from 'react';
import { Icon } from 'semantic-ui-react';
import './AddLink.css';

const AddLink = () => {
    return (
        <div>
            <Icon
                color="green"
                name="add square"
                size="big"
                className="custom"
                link
            />
        </div>
    );
};

export default AddLink;
