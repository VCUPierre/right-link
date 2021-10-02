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
        let items = { ...values };
        let item = { ...items[dataGroup][group][position][field].value };
        item[valueField].value = value;
        items[dataGroup][group][position][field].value = item;
        console.log('RLObjstandard items', items);
        setValues({ ...items });
    };

    return (
        <>
            {Object.keys(values[dataGroup][group][position][field].value).map(
                (objectKeys, i) => {
                    return values[dataGroup][group][position][field].value[
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
                    );
                }
            )}
        </>
    );
};

export default RightLinkObjects;
