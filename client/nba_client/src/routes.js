import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';
import ArticlesNews from './components/articles/news/posts/index';
import VideoArticle from './components/articles/videos/video/index';
import NewsMain from './components/articles/news/main/index';
import VideosMain from'./components/articles/videos/main/index';
import Signout from './components/signout/signout';


class routes extends Component {
  
    render() {
        return (
            <div>
               <Layout>
                    <Switch>
                            <Route path='/' exact component = {Home}/>
                            <Route path='/news' exact component = {NewsMain}/>
                            <Route path='/videos' exact component ={VideosMain}/>
                            <Route path='/articles/:id' exact component={ArticlesNews}/>
                            <Route path='/videos/:id' exact component={VideoArticle}/>
                            <Route path='/signout' exact component={Signout}/>
                    </Switch>
                    
               </Layout>
            </div>
        );
    }
}

export default routes;