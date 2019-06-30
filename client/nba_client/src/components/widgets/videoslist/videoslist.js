import React, { Component } from 'react';
import Button from '../Buttons/buttons';

import './videolist.css'
class videoslist extends Component {
    state = {
        teams : [],
        videos : [],
        start : this.props.start,
        end : Number(this.props.start) + Number(this.props.amount),
        amount : this.props.amount

    }
    renderTitle = (title) => {
        return title ? <h3><strong>NBA</strong>Videos</h3> : null
    }
    render() {

        return (
            <div className='video-list-wrapper'>
                { this.renderTitle(this.props.title)}
                
            </div>
        );
    }
}

export default videoslist;