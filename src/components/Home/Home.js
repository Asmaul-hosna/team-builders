import React from 'react';
import { useEffect, useState } from 'react';
import Team from '../Team/Team';
import image from'../../image/image/image/bg.jpg';


const Home = () => {
    const[teams,setTeams]=useState([]);

    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res =>res.json())
        .then(data=>setTeams(data.teams))

    },[])
    return (
        <div classname="bg-container">
            <img src={image} alt=""></img>
            
      {
        teams.map(team=><Team team={team}></Team>)
      } 
        </div>
    );
};

export default Home;