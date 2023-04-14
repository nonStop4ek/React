import React from 'react';
import launches from "./Launches";

const Launch = ({launch}) => {
    const {flight_number,mission_name,launch_year}= launch
    return (
        <div>
       <p>     flight number: {flight_number}</p>
            <p>mission_name: {mission_name}</p>
            <p>launch_year: {launch_year}</p>
        <hr/> </div>
    );
};

export default Launch;