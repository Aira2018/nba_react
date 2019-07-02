import React from 'react';
import HeaderTeamInfo from '../../elements/headerteaminfo'

const Header = (props) => {
    const teamInfo = (team) =>{
        return team ?  
                    <HeaderTeamInfo team={team}/>
                    : null

    }

    

    return (
        <div>
          { teamInfo(props.teamData) }
            
        </div>
    );
};

export default Header;