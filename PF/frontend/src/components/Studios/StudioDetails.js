
import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';




const StudioDetails = () => {
    const studioId = useParams().studioId;
    const [info, setInfo] = useState();

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/studios/${studioId}/details`)
       .then(res => res.json())
       .then(json => {setInfo(json)})
   }, [studioId])


    return (<>
    <h2>{studioId}</h2>
    <h2>{info && info.name}</h2>
    <table>
        <thead>
            <tr>
                <th>Studio name</th>
                <th>Address</th>
                
                <th>Longitude</th>
                <th>Latitude</th>
                <th>Postal Code</th>
                <th>Phone Number</th>
                <th>Distance (km)</th>
                      
            </tr>
        </thead>
        <tbody>
            {info &&
                <>
                <tr>
                   
                    <td>{ info.name }</td>
                    <td>{ info.address }</td>
                    <td>{ info.longitude }</td>
                    <td>{ info.latitude }</td>
                    <td>{ info['postal code'] }</td>
                    <td>{ info['phone number'] }</td>
                    <td>{ info['distance (km)'] }</td>
                         
                   
                </tr>
                </>
            }
        </tbody>
    </table>


    <table>
        <thead>
            <tr>
                <th>Amenities</th>
            </tr>
            <tr>
                <th>Type</th>
                <th>Quantity</th>
            </tr>
        </thead>

        <tbody>
            {info && info.amenities.map((x, index) => (
                <tr key={index}>
                    <td>{x.type}</td>
                    <td>{x.quantity}</td>
                </tr>
            
            )) 
            }
        </tbody>
    </table>

    {info && (info.images !== []) && 
        <img id="image" src={ info.images }  alt="" width="500" height="600"/>
    }
    
    <button>Class Schedule</button>


    
    </>)
}

export default StudioDetails