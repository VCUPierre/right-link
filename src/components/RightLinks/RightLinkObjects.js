
import React from 'react';
import { Input, Segment, Select } from 'semantic-ui-react';
import { EditRightLinkArrays } from './RightLinkArrays';

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
        { key: 'video', text: 'video', value: 'video' },
        { key: 'slideshow', text: 'slideshow', value: 'slideshow' },
    ];

    const presetBoolOptions = [
        { key: 'true', text: 'true', value: true },
        { key: 'false', text: 'false', value: false },
    ];

    const presetSpeedOptions = [
        { key: '1', text: '1 sec', value: 1000 },
        { key: '2', text: '2 sec', value: 2000 },
        { key: '3', text: '3 sec', value: 3000 },
        { key: '4', text: '4 sec', value: 4000 },
        { key: '5', text: '5 sec', value: 5000 },
        { key: '6', text: '6 sec', value: 6000 },
        { key: '7', text: '7 sec', value: 7000 },
        { key: '8', text: '8 sec', value: 8000 },
        { key: '9', text: '9 sec', value: 9000 },
        { key: '10', text: '10 sec', value: 10000 },
    ]

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
                        values[dataGroup][group][position][field].value[
                            objectKey
                        ].type === 'array' ? (
                            <Segment key={`RLObjectEdit ${objectKey} ${i+1}`}>
                               <pre>
                                <b>Collection:</b> {' '}
                                <EditRightLinkArrays 
                                    dataGroup={dataGroup}
                                    group={group}
                                    field={field}
                                    values={values}
                                    setValues={setValues}
                                    position={position}
                                />
                               </pre> 
                            </Segment>
                    ) : (
                        values[dataGroup][group][position][field].value[
                        objectKey
                        ].type === 'number' ? (
                            <Segment key={`RLObjectEdit ${objectKey} ${i+1}`}>
                            <pre>
                                <b>{`${objectKey}:`}</b> {' '}
                                <Select
                                    defaultValue={
                                        values[dataGroup][group][position][field].value[
                                            objectKey
                                        ].value || ''
                                    }
                                    options={presetSpeedOptions}
                                    onChange={(e, d) =>
                                        handleSelectChange(d, objectKey)
                                    }
                                />
                            </pre>
                        </Segment>
                    ) :
                    (
                        'Other Not Yet Implented'
                    )
            )))))}
        </>
    ); 
};

export default RightLinkObjects;
