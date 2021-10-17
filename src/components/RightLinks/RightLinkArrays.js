import React from 'react';
import { Segment, Input, TextArea } from 'semantic-ui-react';
import AddLink from '../AddLink/AddLink';

/* eslint no-unused-vars: 0 */
/*  eslint no-nested-ternary: "off" */
export const EditRightLinkArrays = ({
    dataGroup,
    group,
    field,
    values,
    setValues,
    position,
}) => {
    const handleStandardInputChange = ({ value }, valueField, innerArrayPosition) => {
        const items = { ...values };
        const item = { ...items[dataGroup][group][position][field].value[innerArrayPosition] };
        item[valueField] = value;
        items[dataGroup][group][position][field].value[innerArrayPosition] = item;
        setValues({ ...items });
    };

    const handleCollectionChange = ({ value }, innerArrayPosition) => {
        const items = { ...values };
        let item = { ...items[dataGroup][group][position][field].value.collection.value[innerArrayPosition] };
        item = value;
        items[dataGroup][group][position][field].value.collection.value[innerArrayPosition] = item;
        setValues({ ...items });
    };

    const editAdditionalLinks = () => <>
        {Object.keys(values[dataGroup][group][position][field].value).map(
            (arrayItem, i) => (
                <Segment>
                    <pre>
                        <b>Link Name:</b>{' '}
                        <Input 
                            defaultValue={values[dataGroup][group][position][field].value[i].name}
                            onChange={(e, d) =>
                                handleStandardInputChange(d, 'name', i)
                            }
                        />
                    </pre>
                    <pre>
                        <b>Link:</b>{' '}
                        <Input 
                            defaultValue={values[dataGroup][group][position][field].value[i].link}
                            onChange={(e, d) =>
                                handleStandardInputChange(d, 'link', i)
                            }
                        />
                    </pre>
                </Segment>
            )
        )}
        <AddLink collection='addLink' data={values} setData={setValues} linkGroup={position} />
    </>

    const editBioLinks = () => <>
        {Object.keys(values[dataGroup][group][position][field].value).map(
            (arrayItem, i) => (
                <Segment>
                    <pre>
                        <b>Header:</b>{' '}
                        <Input 
                            defaultValue={values[dataGroup][group][position][field].value[i].header}
                            onChange={(e, d) =>
                                handleStandardInputChange(d, 'header', i)
                            }
                        />
                    </pre>
                    <pre>
                        <b>Body:</b>{' '}
                        <TextArea  
                            value={values[dataGroup][group][position][field].value[i].subHeader}
                            onChange={(e, d) =>
                                handleStandardInputChange(d, 'subHeader', i)
                            }
                            rows={4}
                        />
                    </pre>
                </Segment>
            )
        )}
        <AddLink collection='bio' data={values} setData={setValues} linkGroup={position} />
    </>

    const editCollection = () => <>
        {values[dataGroup][group][position][field].value.collection.value.map(
            (arrayItem, i) => (
                <Segment>
                    <pre>
                        <b>{`Image ${i+1}:`}</b>{' '}
                        <Input 
                            defaultValue={values[dataGroup][group][position][field].value.collection.value[i]}
                            onChange={(e, d) =>
                                handleCollectionChange(d, i)
                            }
                        />
                    </pre>
                </Segment>
            )
        )}
        <AddLink collection='collection' data={values} setData={setValues} linkGroup={position} />
    </>

    return values[dataGroup][group][position][field].arrayType === 'addLinks' ? editAdditionalLinks() : values[dataGroup][group][position][field].arrayType === 'bio' ? editBioLinks() : editCollection() 
}

export const RightLinksArrays = ({
    RLArr
}) => {
    const additionalLinks = () => <>
        {RLArr.value.map(
            (link, i) => (
                <Segment key={`RLArray ${i+1}`}>
                    <pre>
                        <b>Link Name:</b> {' '}
                        {link.name !== '' ? 
                        <p>{`${link.name}`}</p> : 'empty'}
                    </pre>
                    <pre>
                        <b>Link:</b> {' '}
                        {link.link !== '' ? 
                        <p>{`${link.link}`}</p> : 'empty'}
                    </pre>
                </Segment>
            )
        )}
    </>

    const bioLinks = () => <>
        {RLArr.value.map(
            (link, i) => (
                <Segment key={`RLBio ${i+1}`}>
                    <pre>
                        <b>Header:</b> {' '}
                        {link.header !== '' ? 
                        <p>{`${link.header}`}</p> : 'empty'}
                    </pre>
                    <pre>
                        <b>Body:</b> {' '}
                        {link.subHeader !== '' ? 
                        <p>{`${link.subHeader}`}</p> : 'empty'}
                    </pre>
                </Segment>
            )
        )}
    </>

    const collectionLinks = () => <>
        {RLArr.value.map(
            (link, i) => (
                <pre key={`RLCollection ${i+1}`}>
                    <b>{`Image ${i+1}:`}</b> {' '}
                    <p>{`${link}`}</p>
                </pre>
            )
        )}
    </>
    
    return RLArr.arrayType === 'addLinks' ? additionalLinks() : RLArr.arrayType === 'bio' ? bioLinks() : collectionLinks()
}

