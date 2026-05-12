import { useState, useEffect } from "react";

const useFetchRestarentsList = ()=> {
     let [data, setData] = useState([])
    let [filterResData, setFilterResData] = useState([])
    useEffect(()=>{
        fetchRestarentsList();
    },[])
    
    let fetchRestarentsList = async ()=> {
        // Add 1 minute delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const cards = await fetch("http://localhost:3001/cardList");
        const json = await cards.json();
        //console.log(json);
        setData(json);
        setFilterResData(json)
    }

    return {data, filterResData, setFilterResData,setData};
}

export default useFetchRestarentsList;