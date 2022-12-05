import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

const Studios = () => {
    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [studios, setStudios] = useState();

    const updateLongitude = value => {
        if (value) {
            setLongitude(value);
        }  
    }

    const updateLatitude = value => {
        if (value) {
            setLatitude(value);
        } 
    }

    useEffect(() => {
         fetch(`http://127.0.0.1:8000/studios/all/?longitude=${longitude}&latitude=${latitude}`)
        .then(res => res.json())
        .then(json => {setStudios(json.results)})
      
          
    }, [longitude, latitude])


   // if (studios === undefined) {
     //   return null
    //}

    return (
        <>
            <h2>Studios</h2>
            <label for="longitude"> Longitude </label>
            <input id="longitude" type="text" onChange={(event) => {
                 updateLongitude(event.target.value)
                }
            } />

            <label for="latitude"> Latitude </label>
            <input id="latitude" type="text" onChange={(event) => {
                 updateLatitude(event.target.value)
                }
            } />
            <table>
                <thead>
                    <tr>
                        <th>Studio name</th>
                        <th>Address</th>
                        <th>Distance (km)</th>
                      
                    </tr>
                </thead>

                <tbody>
                    {studios && studios.map((studio, index) => (
                        <>
                        <tr key={index}>
                           
                            <td>{ studio.name }</td>
                            <td>{ studio.address }</td>
                            <td>{ studio.distance }</td>
                            
                        </tr>
                        <Link to={`${studio.id}/details`}>View more details</Link>
                        </>
                    ))}

                </tbody>
                
            </table>

            
            
        </>
        )
};

export default Studios;