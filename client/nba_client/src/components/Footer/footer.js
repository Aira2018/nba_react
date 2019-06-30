import React, { Component } from 'react';
import './footer.css'
import {CURRENT_DATE }from '../../hoc/config';

class footer extends Component {
    render() {
        return (
            <div className='footer'>
               <small>© {CURRENT_DATE} <b>SOME COMPANY Inc</b>., All Rights Reserved</small>
               <div>
               <p>Venice 23st</p>
               </div>
               <div className ='last'>
                  <p> Language</p>
                   <p>Terms of use</p>
                  <p> Privacy</p>
               </div>

            </div>
        );
    }
}

export default footer;