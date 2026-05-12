import { useState, useEffect } from "react";
import { REST_INFO_API } from '../utils/constant';
import { useParams } from 'react-router';
import SimmerCards from "../components/SimmerCards";
import useFetchRestaurantInfo from '../utils/useFetchRestaurantInfo';
import useInternetStatus from '../utils/useInternetStatus';
import OrderMenu from "../components/OrderMenu";

const RestaurantMenu = ()=>{
    //const [restData, setRestData ]=useState([]);
    const params=useParams();
    const online = useInternetStatus();
    
    const restData = useFetchRestaurantInfo(params.id);
    if(restData.length===0) return <SimmerCards />

    const  {image, name, rating, cuisine, locality, timing, resId } = restData?.info;
    if(online===false) return <p className="text-center text-red-600 font-medium">Please check your internet connection</p>
    return (
        <div className="max-w-6xl mx-auto overflow-hidden  shadow-xl border border-slate-200 bg-white">
            <div className="relative h-80 md:h-[360px] overflow-hidden">
                <img src={image.url} alt={name} className="w-full h-full object-cover brightness-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="inline-flex items-center rounded-full bg-emerald-500/90 px-3 py-1 text-sm font-semibold shadow-lg">
                        {online ? 'Online' : 'Offline'}
                    </div>
                    <h2 className="mt-4 text-4xl font-bold tracking-tight drop-shadow-lg">{name}</h2>
                    <p className="mt-2 text-sm text-slate-200">{locality.name}</p>
                </div>
            </div>
            <div className="p-6 space-y-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-3">
                        <div className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-sm font-semibold text-white shadow-sm">
                            <span>{rating.aggregate_rating}</span>
                            <i className="ml-2 inline-flex" color="#FFFFFF">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="0.8rem" height="0.8rem" viewBox="0 0 20 20" role="img" className="inline-block">
                                    <title>star-fill</title>
                                    <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path>
                                </svg>
                            </i>
                        </div>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                        <p className="font-semibold text-slate-800 mb-2">Cuisine</p>
                        <p>{cuisine.map(data=>data.name).join(', ')}</p>
                    </div>
                </div>
                {/* <div className="rounded-3xl bg-slate-50 p-6 text-slate-700 space-y-3">
                    <h3 className="text-lg font-semibold text-slate-900">Restaurant details</h3>
                    <p className="text-sm">{timing?.text || 'No timing information available.'}</p>
                </div> */}
            </div>
            <OrderMenu id={resId} />
        </div>
    )

}

export default RestaurantMenu