

import React, {useState, useEffect} from "react";

const Studios = () => {
    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [studios, setStudios] = useState([]);

    const updateLongitude = value => {
        setLongitude(value);
    }

    const updateLatitude = value => {
        setLatitude(value);
    }

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/studios/all/?longitude=${longitude}&latitude=${latitude}`)
            .then(res => res.json())
            .then(json => {
                setStudios(json.data);
            })
    })

    return (
        <>
           
        
            <h2>Studios</h2>
            <label for="longitude"> Longitude </label>
            <input id="longitude" type="text" onChange={updateLongitude(event => event.target.value)} />

            <label for="latitude"> Latitude </label>
            <input id="latitude" type="text" onChange={updateLatitude(event => event.target.value)} />
            
                
            

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Height</th>
                        <th>Position</th>
                        <th>Team</th>
                    </tr>
                </thead>
                <tbody>
               
                </tbody>
            </table>
            
        </>
        )
};

export default Studios;