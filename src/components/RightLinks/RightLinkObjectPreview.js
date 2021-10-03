
import React from 'react';
import { Segment } from 'semantic-ui-react';

const RightLinkObjectPreview = ({
    RLObj
}) =>   <>
        {Object.keys(RLObj.value).map(
            (objectKey, i) => (
                <Segment key={`RLObjectPreview ${objectKey} ${i+1}`}>
                    <pre>
                        <b>{`${objectKey}:`}</b> {' '}
                        {RLObj.value[objectKey].value !== '' ? 
                        `${RLObj.value[objectKey].value}` : 'empty'}
                    </pre>
                </Segment>
            )
        )}
        </>

export default RightLinkObjectPreview;
