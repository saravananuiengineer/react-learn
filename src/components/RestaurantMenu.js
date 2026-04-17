import { useState, useEffect } from "react";
import { REST_INFO_API } from '../utils/constant';
import { useParams } from 'react-router';
import SimmerCards from "../components/SimmerCards";
import useFetchRestaurantInfo from '../utils/useFetchRestaurantInfo';

const RestaurantMenu = ()=>{
    //const [restData, setRestData ]=useState([]);
    const params=useParams();
    console.log(params);
    
    const restData = useFetchRestaurantInfo(params.id);
    if(restData.length===0) return <SimmerCards />

    const  {image, name, rating, cuisine, locality, timing } = restData?.info;

    return (
        <>
       <div className="cards">
            <img src={image.url} />
            <div className="row-card">
                <span className="name">{name}</span>
                <span className="rating">{rating.aggregate_rating} <i className="sc-rbbb40-1 iFnyeo" color="#FFFFFF"><svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="0.8rem" height="0.8rem" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 fauQLv"><title>star-fill</title><path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path></svg></i></span>
            </div>
            <div className="row-card">
                <span className="threedot" width="99%">{cuisine.map(data=>data.name).join(', ')}</span>
            </div>
            <div className="row-card">
                <span>{locality.name}</span>
                <span>{rating.aggregate_rating}</span>
            </div>
            <div className="row-card">
                <span>{timing.text}</span>
                <span>{restData.distance}</span>
            </div>
        </div>
        
        </>
    )

}

export default RestaurantMenu