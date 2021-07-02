import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import {
 // LOGO,
 // BACKGROUND,
 SOCIAL_LINKS,
 // LINK_GROUP_1,
 TITLE,
 // PROFILE_PIC,
} from '../../assets/data';
import './main.css'

const Main = (props) => {

  return (
   <>
   <Segment className="m0">
    <Header content="Main" />
     <Segment>
       <pre>Title: {TITLE.title}</pre>
     </Segment>
   </Segment>
   <Segment>
     <Header content="Social Links" />
     {SOCIAL_LINKS.group.map((link) => (
       <Segment>
        <pre>name: {link.name}</pre>
        <pre>icon: {link.iconName}</pre>
        <pre>link: {link.link}</pre>
        <pre>color: {link.color}</pre>
        <pre>secondaryColor: {link.secondaryColor ? link.secondaryColor : 'empty'}</pre>
        <pre>surrounded: {link.surrounded ? link.surrounded : 'empty'}</pre>
        <pre>surroundedInColor: {link.surroundedInColor}</pre>
       </Segment>
      )
     )}
   </Segment>
   </>
  )
}

export default Main;
