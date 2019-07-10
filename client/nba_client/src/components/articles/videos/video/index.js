import React, { Component } from 'react';
import axios from 'axios';
import {URL} from '../../../../hoc/config';
import Header from './header'
import VideoRelated from '../../../widgets/videoslist/videoRelated/videoRelated';
import '../../articles.css';

class VideoArticle extends Component {

    state = {
        team : [],
        article : [],
        teams : [],
        releated : [],
    }

    componentWillMount(){
        axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
        .then( response => {
            let article = response.data[0];
  
            axios.get(`${URL}/teams?id=${article.team}`)
            .then( response => {
                this.setState({
                    article,
                    team : response.data[0],
                })
                this.getReleated();
            })
        })
    }
    getReleated = () =>{
       
        axios.get(`${URL}/teams`)
        .then(response => {
           let teams = response.data;

           axios.get(`${URL}/videos?q=${this.state.team.city}&_limit=3`)
           .then( response => {
               this.setState({
                   teams : teams,
                   releated :response.data
               })
           })
        })

    }

    render() {
        let article = this.state.article;
        let team = this.state.team;
        console.log(this.state)
       
        return (
            <div>
                <Header teamData ={team}/>
                <div className='video-wrapper'>
                    <h1>{article.title}</h1>
                    <iframe
                        title='videoplayer'
                        height='300px'
                        width='100%'
                        src={`https://www.youtube.com/embed/${article.url}`}>

                    </iframe>
                </div>
                <VideoRelated 
                    data = {this.state.releated}
                    teams = {this.state.teams} />
            </div>
        );
    }
}

export default VideoArticle;