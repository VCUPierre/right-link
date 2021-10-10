
import React from 'react';
import { Segment } from 'semantic-ui-react';
import { RightLinksArrays } from './RightLinkArrays';

const RightLinkObjectPreview = ({
    RLObj
}) => <>
    {Object.keys(RLObj.value).map(
        (objectKey, i) => (
            <Segment key={`RLObjectPreview ${objectKey} ${i+1}`}>
                {RLObj.value[objectKey].arrayType ? (
                    <RightLinksArrays RLArr={RLObj.value[objectKey]} />
                ) : (
                <pre>
                    <b>{`${objectKey}:`}</b> {' '}
                    {RLObj.value[objectKey].value !== '' ? 
                    <p>{`${RLObj.value[objectKey].value}`}</p> : 'empty'}
                </pre>
                )}
            </Segment>
        )
    )}
</>

export default RightLinkObjectPreview;
