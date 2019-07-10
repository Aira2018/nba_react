import React from 'react';
import './headerteaminfo.css';
import '../articles.css';

const HeaderTeamInfo = (props) => {
   
    return (
        <div className='article-team-header'>
            <div className='left'
                style={{
                    background : `url(/images/teams/${props.team.logo})`
                }}>
            </div>
            <div className='right'>
                <div>
                    <span>{props.team.city} </span>
                </div>
                <div>
                    <strong>
                        {props.team.name}
                    </strong>
                </div>
            </div>
            
            
        </div>
    );
};

export default HeaderTeamInfo;