import React from 'react';
import './buttons.css';


const Buttons = (props) => {
   let template = null;
   
   switch (props.type) {
       case 'loadmore':
           template = (
               <div className = 'btn-blue'
               onClick = {props.loadMore}>
                   {props.cta}
               </div>
           )
           
           break;
       default:
           template = null;
           
   }
   return template;
};

export default Buttons;

