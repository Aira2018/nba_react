import React from 'react';
import './videolist.css';
import { NavLink } from 'react-router-dom';
import CardInfo from '../cardinfo/cardinfo';


const VideosListTemplate = (props) => {
    return(
        props.data.map( (item, i) => {
            return (
                        <NavLink to={`/videos/${item.id}`} key = {i}>
                            <div className='video-list-item-wrapper'>
                                <div className='left' style={{
                                                        background : `url(images/videos/${item.image})`
                                                        }}>
                                        <div></div>
                                    

                                </div>
                                <div className='right'>
                                    <CardInfo teams={props.teams} team={item.team} date = {item.date}/>
                                    <h2>{item.title}</h2>
                                </div>

                            </div>

                        </NavLink>
                    )
                }
        )
    )
}

export default VideosListTemplate;