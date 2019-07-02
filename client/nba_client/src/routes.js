import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';
import ArticlesNews from './components/articles/news/posts/index'

class routes extends Component {
  
    render() {
        return (
            <div>
               <Layout>
                    <Switch>
                            <Route path='/' exact component = {Home}/>
                            <Route path='/articles/:id' exact component={ArticlesNews}/>
                    </Switch>
                    
               </Layout>
            </div>
        );
    }
}

export default routes;