
import React from 'react';
import { Segment } from 'semantic-ui-react';
import { RightLinksArrays } from './RightLinkArrays';

/*  eslint no-nested-ternary: "off" */
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
                    {   objectKey === 'speed' ? 
                        <p>{`${RLObj.value[objectKey].value.toString().slice(0, -3)} sec`}</p>:
                        RLObj.value[objectKey].value !== '' ? 
                        <p>{`${RLObj.value[objectKey].value}`}</p> : 'empty'
                    }
                </pre>
                )}
            </Segment>
        )
    )}
</>

export default RightLinkObjectPreview;
