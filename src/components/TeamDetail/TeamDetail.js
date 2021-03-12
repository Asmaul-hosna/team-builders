import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import maleimage from"../../image/male.png";
import femaleimage from"../../image/female.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol,faSearchPlus,faFlag,faVenus } from '@fortawesome/free-solid-svg-icons';


const TeamDetail = () => {
    const{idTeam} = useParams();
    const[team,setTeam]=useState([])
    useEffect(()=>{
      const url =`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`; 
      fetch(url)
      .then(res=>res.json())
      .then(data =>setTeam(data.teams[0]));
    },[])
     
    const{
        strTeamBanner,
        strSport,
        intFormedYear,
        strCountry,
        strGender,
        strDescriptionES
        }= team;

    let image;
    if(strGender === 'Male'){
        image = maleimage
    }
    else{
        image = femaleimage
    }


    return (
        <div className="container">
            <img src={strTeamBanner} alt=""></img>
            <br/>
            <div className="team-detail-container">
             <img style={{width:'600px'}}src={image} alt="Gender Based image"></img>
             <h5><FontAwesomeIcon icon={faFutbol} />sport type: {strSport}</h5>
             <p><FontAwesomeIcon icon={faSearchPlus} />founded:{intFormedYear}</p>
             <p><FontAwesomeIcon icon={faFlag} />country:{strCountry}</p>
             <p><FontAwesomeIcon icon={faVenus} />gender:{strGender}</p>
             <br/>
             <p>description:{strDescriptionES}</p>
        </div>
        

           
        </div>
    );
};

export default TeamDetail;