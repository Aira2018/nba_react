import React, { Component } from 'react';
import axios from 'axios';
import {URL} from '../../../../hoc/config';
import Header from './header';
import '../../articles.css'


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
        const team = this.state.team;
       
        return (
            <div className='article-wrapper'>
                <Header
                    teamData = {team}
                    date = {article.date}
                    author = {article.author}/>
                    
                <div className='article-body'>
                    <div className='article-body-title'>
                        <h2>{article.title}</h2>
                    </div>
                    <div className='article-body-image'
                    style={{
                        background : `url('/images/articles/${article.image}')`
                    }
                    }>

                    </div>
                    <div className='article-body-text'>
                        <p>{article.body}</p>

                    </div>


                </div>

                
                
            </div>
        );
    }
}

export default ArticlesNews;