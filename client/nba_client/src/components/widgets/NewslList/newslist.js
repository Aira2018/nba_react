import React, { Component } from 'react';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { URL } from '../../../hoc/config';

import './newslist.css';
import Button from '../Buttons/buttons';
import CardInfo from '../cardinfo/cardinfo';


class newslist extends Component {
    state = {
        items : [],
        teams : [],
        start : this.props.start,
        end : this.props.end,
        amount : this.props.amount,
    }

    componentWillMount(){ 
        this.request(this.state.start, this.state.end)
        
    }
    request = (start, end) => {

        if(this.state.teams.length < 1){
            axios.get(`${URL}/teams`)
            .then(response => {
                this.setState({teams : response.data})
            })
        }

        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then(response => this.setState({
            items : [...this.state.items,...response.data]
        }))
    }
    loadMore  = () => {
        let end= Number(this.state.end) + Number(this.state.amount);
   
        this.setState({end : end})
         
        this.request(this.state.end, end)
    }


    renderNews = (type) => {
    let template = null
        switch (type) {
            case 'card':
                template = this.state.items.map((item, i) => {
                    return ( <CSSTransition
                                classNames = {{
                                    
                                    enter : 'news-list-wrapper',
                                    enterActive  : 'news-list-wrapper-active'
                                }}
                                key = {i}
                                timeout = {500}
                                >
                                <div key={i}>
                                        <div className='news-list-item'>
                                            <NavLink to={`/articles/${item.id}`}>
                                                <CardInfo teams = {this.state.teams} team = {item.team} date = {item.date}/>
                                                <h2>{item.title}</h2>
                                            </NavLink>

                                        </div>
                                </div>
                            </CSSTransition>
                        )
                })
                break;
            
            case 'cardmain':
                    template = this.state.items.map((item, i) => {
                        return ( <CSSTransition
                                    classNames = {{
                                        
                                        enter : 'news-list-wrapper',
                                        enterActive  : 'news-list-wrapper-active'
                                    }}
                                    key = {i}
                                    timeout = {500}
                                    >
                                    <NavLink to={`/articles/${item.id}`}>
                                       <div className='flex-wrapper'>
                                           <div className='side-image'
                                           style={{
                                               background : `url('../images/articles/${item.image}')`
                                           }}>
                                               <div></div>

                                           </div>
                                           <div className='right'>
                                                <CardInfo teams = {this.state.teams} team = {item.team} date = {item.date}/>
                                                    <h2>{item.title}</h2>


                                           </div>

                                       </div>
                                        </NavLink>
                                </CSSTransition>
                            )
                    })
                break;
            default:
                template =  null
                
        }
        return template;


    }
   
    render() {
       
      
       return(
         <div>
             <TransitionGroup
             component = 'div'
             className = 'list'
             >
                { this.renderNews( this.props.type)}

             </TransitionGroup>
             <Button 
                type = 'loadmore'
                loadMore = { () => this.loadMore()}
                cta = 'Load More News'
             />
             
             

         </div>
       )
    }
}

export default newslist;