import React from 'react';
import { Icon } from 'semantic-ui-react';

const Delete = ({
    // collection,
    data,
    setData,
    selected,
    handleClick,
}) => {
    // eslint-disable-next-line no-unused-vars
    const handleDeleteClick = () => {
        console.log('data', data, 'selected', selected);
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure you want to delete?')) {
            const userData = [...data];
            const rightLinkDataCopy = userData.data;
            const dataWithoutSelected = rightLinkDataCopy.filter(
                (dataCopy) => dataCopy.uuid !== selected.uuid
            );
            userData.data = dataWithoutSelected;
            console.log('removed selected', userData);
            setData(userData);
        }
    };

    return (
        <Icon
            color="red"
            name="trash alternate"
            size="large"
            link
            onClick={() => handleClick(selected, 'delete click')}
        />
    );
};

export default Delete;
