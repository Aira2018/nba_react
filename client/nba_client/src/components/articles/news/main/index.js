import React, { Component } from 'react';
import NewsSlider from '../../../widgets/NewsSlider/slider';
import NewsList from '../../../widgets/NewslList/newslist';


class NewsMain extends Component {
    render() {
        return (
            <div>
                <NewsSlider
                start = '0'
                end = '3'
                />

                <NewsList
                type = 'cardmain'
                loadmore = {true}
                start = '0'
                end = '3'
                amount = '5'/>


            </div>
        );
    }
}

export default NewsMain;