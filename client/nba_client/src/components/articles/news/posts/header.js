import React from 'react';
import HeaderTeamInfo from '../../elements/headerteaminfo';
import PostData from '../../elements/postdata';


const Header = (props) => {
    const teamInfo = (team) =>{
        return team ?  
                    <HeaderTeamInfo team={team}/>
                    : null
    }
    const postData = (date, author) =>{
        return <PostData data= {{date,author}}/>
    }
    return (
        <div>
          { teamInfo(props.teamData) }
          {postData(props.date, props.author)}
            
        </div>
    );
};

export default Header;