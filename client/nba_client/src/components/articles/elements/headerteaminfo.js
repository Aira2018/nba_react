import React from 'react';
import './headerteaminfo.css'

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
                    <span>{props.team.city} {props.team.name}</span>
                </div>
                <div>
                   
               
                </div>

            </div>
            
            
        </div>
    );
};

export default HeaderTeamInfo;