import { useState } from "react";
import FilterContainer from "../components/FilterContainer";
import Cards from "./Cards";
import cardsList from "../utils/MockData"
import SimmerCards from "./SimmerCards";
import {Link} from "react-router-dom";
import useFetchRestarentsList from "../utils/useFetchRestarentsList"

const Body = () => {

    //let [data, setData] = useState([])
    //let [filterResData, setFilterResData] = useState([])
    let [searchText, setSearchText] = useState('')
    let topRating = ()=> {
        setData(data.filter(data=>data?.info?.rating?.aggregate_rating>4))
    }
    
    // useEffect(()=>{
    //     fetchRestarentsList();
    // },[])
    
    // let fetchRestarentsList = async ()=> {
    //     // Add 1 minute delay
    //     await new Promise(resolve => setTimeout(resolve, 2000));
        
    //     const cards = await fetch("http://localhost:3001/cardList");
    //     const json = await cards.json();
    //     //console.log(json);
    //    setData(json);
    //    setFilterResData(json)
    //}
    let {data,filterResData} = useFetchRestarentsList()
    return (data?.length===0) ? <SimmerCards />  : (
        <div>
            <div id="filter">
                <input onChange={(e)=>{
                    setSearchText(e.target.value);
                }} placeholder="Search Restarunts" value={searchText} type="search" id="gsearch" name="gsearch" />
                <input type="button" onClick={
                    ()=>{

                        let filterData = data.filter((item) => item.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilterResData(filterData)
                    }
                } value="search" />
                <button>Filter </button>
                <button>Offers </button>
                <button onClick={topRating}>RatingL 4.5+ </button>
            </div>
            <div id="card-cantainer">
                {
                    filterResData.map((data) => {
                        return (<Link key={data?.info?.resId} to={"/bangalore/"+data?.info?.resId}>
                                <Cards restaurantsDetails={data} />
                                </Link>)
                    }
                    )
                }
            </div>
            {/* <Cards restaurantsDetails={cardsList} /> */}
        </div>
    )
}

export default Body;