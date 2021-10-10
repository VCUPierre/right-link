import React from 'react';
import { Segment } from 'semantic-ui-react';

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

