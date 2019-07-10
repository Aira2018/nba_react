import React from 'react';
import VideoList from '../../../widgets/videoslist/videoslist';

const VideosMain = () => {
    return (
        <div>
            <VideoList
            type = 'card'
            title = {true}
            loadmore = {true}
            start = {0}
            amount =  {3}
            />
            
        </div>
    );
};

export default VideosMain;