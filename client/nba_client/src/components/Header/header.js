import React from 'react';
import { NavLink } from 'react-router-dom'
import './header.css';
import SideNav from './SideNav/sideNav'




const header = (props) => {

    const menu = () => {
        return(
            <NavLink to = '/'>
                <div className='hamburger'
                onClick = {props.onShowNav}>
                    <img  alt ='menu' src='/images/ham.png' height='45px' width='45px'/> 
                </div>
            </NavLink>
        )
    }
    const logo = () =>{
        return(
            <NavLink to='/'>
               <img alt="logo" src='/images/nba_logo.png' className='logo'
                />
            </NavLink>
        )
    }
    
    return (
        <header className='header'>
            <SideNav {...props}/>
            <div className='headeropt'>
                { menu() }
                { logo() }
            
             </div>  
        </header>
    );
};   

export default header;