import React from 'react';
import './sidenav.css';
import {NavLink} from 'react-router-dom';





const sidenavitems = () => {

    const items = [
        {
            type : 'style',
            icon : 'home.png',
            text : 'Home',
            link : '/'
        },
        {
            type : 'style',
            icon : 'news.png',
            text : 'News',
            link : '/news'
        },
        {
            type : 'style',
            icon : 'play.png',
            text : 'Videos',
            link : '/videos'
        },
        
        {
            type : 'style',
            icon : 'signout.png',
            text : 'Signout',
            link : '/signout'
        }
    ]
    const showitem = () =>{
        return ( items.map( (item, i)=>{
            return(
                
                <div className='option' key = {i}>
                    <NavLink to={item.link}>
                        <img alt="" src={`images/${item.icon}`} />
                    
                        {item.text}
                    </NavLink>
                </div>
            )
        }))

    }
    
    return (
        <div>
            { showitem() }            
        </div>
    );
};

export default sidenavitems;