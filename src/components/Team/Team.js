import React from 'react';
import { Link } from 'react-router-dom';

const Team = (props) => {
    const{strTeam,strSport,strTeamBadge,idTeam}=props.team;
    const teamStyle={
        float:'left',
        width:'300px',
        border:'10px solid grey',
        padding:'20px',
        margin:'20px'

    }

    return (
        <div style={teamStyle}>
             <div className="team-container">
            <img style={{width:'200px'}} src={strTeamBadge} alt=""></img>
            <p>sport type:{strSport}</p>
            <p>team:{strTeam}</p>
            <button><Link to={`/team/${idTeam}`}>Explore</Link></button>
        </div>
        </div>
       
    );
};

export default Team;