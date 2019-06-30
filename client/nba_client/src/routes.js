import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './hoc/Layout/layout'

class routes extends Component {
  
    render() {
        return (
            <div>
               <Layout>
                    <Switch>
                            <Route path='/' exact component = {Home}/>
                    </Switch>
                    
               </Layout>
            </div>
        );
    }
}

export default routes;