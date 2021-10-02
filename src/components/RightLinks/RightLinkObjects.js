
import React from 'react';
import { Input } from 'semantic-ui-react';

const RightLinkObjects = ({
    dataGroup,
    group,
    field,
    values,
    setValues,
    position,
}) => {
    const handleStandardInputChange = ({ value }, valueField) => {
        const items = { ...values };
        const item = { ...items[dataGroup][group][position][field].value };
        item[valueField].value = value;
        items[dataGroup][group][position][field].value = item;
        setValues({ ...items });
    };

    return (
        <>
            {Object.keys(values[dataGroup][group][position][field].value).map(
                (objectKeys) => values[dataGroup][group][position][field].value[
                        objectKeys
                    ].type === 'text' ? (
                        <Input
                            defaultValue={
                                values[dataGroup][group][position][field].value[
                                    objectKeys
                                ].value || ''
                            }
                            onChange={(e, d) =>
                                handleStandardInputChange(d, objectKeys)
                            }
                        />
                    ) : (
                        'object selectField'
                    )
            )}
        </>
    );
};

export default RightLinkObjects;
