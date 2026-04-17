import {useState, useEffect} from 'react';

const useFetchRestaurantInfo = (id)=> {
    const [restInfo,setRestInfo] =useState([]); 
    useEffect(()=>{
        fetchRestaurantInfo();
    },[])
   
    let fetchRestaurantInfo = async ()=> {
         // Add 1 minute delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        const cards = await fetch("http://localhost:3001/cardList/"+id);
        const json = await cards.json();
        setRestInfo(json);
    }

    return restInfo;
}

export default useFetchRestaurantInfo;