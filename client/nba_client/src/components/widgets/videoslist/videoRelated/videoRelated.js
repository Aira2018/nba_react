import React from 'react';
import VideosListTemplate from '../videoslisttemplate';
import '../videolist.css'

const videoRelated = (props) => {
    return (
        <div className='related-wrapper'>
            < VideosListTemplate 
            data = {props.data} 
            teams ={props.teams}/>
        </div>
    );
};

export default videoRelated;