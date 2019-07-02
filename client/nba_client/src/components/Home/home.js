import React from 'react';
import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewslList/newslist';
import VideoList from '../widgets/videoslist/videoslist'


const home = () => { 
    return (
        <div>
            <NewsSlider
                start = '0'
                end = '3'
            />

            <NewsList
            type = 'card'
            loadmore = {true}
            start = '0'
            end = '3'
            amount = '3'/>

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

export default home;