import React from 'react';
import SideNav from 'react-simple-sidenav';
import SIdeNavItems from './sidenavitems'

const sideNavigation = (props) => {
    
    
    return (
        <div>
            
            <SideNav 
                showNav = {props.showNav}
                onHideNav = {props.onHideNav}
                navStyle={{background : '#f2f4f6'}}>
                <h3 style ={{color : 'black', margin : '20px'}}>Get Ready</h3>
                    
                <SIdeNavItems/>
            </SideNav>
            
        </div>
    );
};

export default sideNavigation;