import React from 'react';
import './buttons.css';
import { NavLink } from 'react-router-dom';


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

        case 'linkTo':
            template = (
                <NavLink to={props.linkTo}
                className='btn-blue'>
                    {props.cta}
                    </NavLink> 
            )
            break;
       default:
           template = null;
           
   }
   return template;
};

export default Buttons;

