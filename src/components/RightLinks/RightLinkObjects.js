
import React from 'react';
import { Input, Segment, Select } from 'semantic-ui-react';

/*  eslint no-nested-ternary: "off" */
const RightLinkObjects = ({
    dataGroup,
    group,
    field,
    values,
    setValues,
    position,
}) => {

    const presetMediaOptions = [
        { key: 'still', text: 'still', value: 'still' },
        { key: 'mp4', text: 'mp4', value: 'mp4' },
        { key: 'video', text: 'video', value: 'video' },
    ];

    const presetBoolOptions = [
        { key: 'true', text: 'true', value: true },
        { key: 'false', text: 'false', value: false },
    ];

    const handleStandardInputChange = ({ value }, valueField) => {
        const items = { ...values };
        const item = { ...items[dataGroup][group][position][field].value };
        item[valueField].value = value;
        items[dataGroup][group][position][field].value = item;
        setValues({ ...items });
    };

    const handleSelectChange = ({ value }, valueField) => {
        const items = { ...values };
        const item = { ...items[dataGroup][group][position][field].value };
        item[valueField].value = value;
        // if (field === 'type') {
        //     if (value === 'internal') {
        //         item.internal.value = true;
        //     } else {
        //         item.internal.value = false;
        //     }
        // }
        items[dataGroup][group][position][field].value = item;
        setValues({ ...items });
    };

    return (
        <>
            {Object.keys(values[dataGroup][group][position][field].value).map(
                (objectKey, i) => values[dataGroup][group][position][field].value[
                        objectKey
                    ].type === 'text' ? (
                        <Segment key={`RLObjectEdit ${objectKey} ${i+1}`}>
                            <pre>
                                <b>{`${objectKey}:`}</b> {' '}
                                <Input
                                    defaultValue={
                                        values[dataGroup][group][position][field].value[
                                            objectKey
                                        ].value || ''
                                    }
                                    onChange={(e, d) =>
                                        handleStandardInputChange(d, objectKey)
                                    }
                                />
                            </pre>
                        </Segment>
                    ) : (
                        values[dataGroup][group][position][field].value[
                            objectKey
                        ].type === 'bool' ? (
                        <Segment key={`RLObjectEdit ${objectKey} ${i+1}`}>
                            <pre>
                                <b>{`${objectKey}:`}</b> {' '}
                                <Select
                                    defaultValue={
                                        values[dataGroup][group][position][field].value[
                                            objectKey
                                        ].value
                                    }
                                    options={presetBoolOptions}
                                    onChange={(e, d) =>
                                        handleSelectChange(d, objectKey)
                                    }
                                />
                            </pre>
                        </Segment>
                    ) : (
                        values[dataGroup][group][position][field].value[
                            objectKey
                        ].type === 'mediaSelect' ? (
                        <Segment key={`RLObjectEdit ${objectKey} ${i+1}`}>
                            <pre>
                                <b>{`${objectKey}:`}</b> {' '}
                                <Select
                                    defaultValue={
                                        values[dataGroup][group][position][field].value[
                                            objectKey
                                        ].value || ''
                                    }
                                    options={presetMediaOptions}
                                    onChange={(e, d) =>
                                        handleSelectChange(d, objectKey)
                                    }
                                />
                            </pre>
                        </Segment>
                    ) : (
                        'Other Not Yet Implented'
                    )
            )))}
        </>
    );
};

export default RightLinkObjects;
