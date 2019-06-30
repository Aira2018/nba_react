import React from 'react';
import { NavLink } from 'react-router-dom'
import './header.css';
import SideNav from './SideNav/sideNav'




const header = (props) => {
    const logo = () =>{
        return(
            <NavLink to='/'>
               <img alt="logo" src='/images/nba_logo.png' className='logo'
               
                onClick = {props.onShowNav}/>
                
            </NavLink>
        )
    }
    
    return (
        <header className='header'>
            <SideNav {...props}/>
            <div className='headeropt'>
               
               {logo()}
            
             </div>  
        </header>
    );
};   

export default header;