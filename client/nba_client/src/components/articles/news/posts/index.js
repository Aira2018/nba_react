import React, { Component } from 'react';
import axios from 'axios';
import {URL} from '../../../../hoc/config';
import Header from './header';
import Body from './body';

class ArticlesNews extends Component {

    state = {
        article : [],
        team : []
    }

    componentWillMount() {
     
      axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
      .then( response => {
          let article = response.data[0];

          axios.get(`${URL}/teams?id=${article.team}`)
          .then( response => {
              this.setState({
                  article,
                  team : response.data[0],
              })
          })
      })
    }


    render() {
        const article = this.state.article;
        console.log('article',article)
        const team = this.state.team;
        console.log('team',team)
       
        return (
            <div className='artic;e-wrapper'>
                <Header
                    teamData = {team}
                    data = {article.date}
                    author = {article.author}/>
                <Body/>

                
                
            </div>
        );
    }
}

export default ArticlesNews;