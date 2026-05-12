import { useState } from "react";
import FilterContainer from "../components/FilterContainer";
import Cards, {promotedCard} from "./Cards";
import cardsList from "../utils/MockData"
import SimmerCards from "./SimmerCards";
import {Link} from "react-router-dom";
import useFetchRestarentsList from "../utils/useFetchRestarentsList"

const Body = () => {

    //let [data, setData] = useState([])
    //let [filterResData, setFilterResData] = useState([])
    let [searchText, setSearchText] = useState('')
    let [showTopRating, setShowTopRating] = useState(false)
    let {data,filterResData,setData,setFilterResData} = useFetchRestarentsList();

    const toggleTopRating = () => {
        const topRated = data.filter((item) => parseFloat(item?.info?.rating?.aggregate_rating) >= 4)
        setFilterResData(showTopRating ? data : topRated)
        setShowTopRating((prev) => !prev)
    }
    
    const SponsoredCard = promotedCard(Cards)
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
    // }
   
    return (data?.length===0) ? <SimmerCards />  : (
        <div>
            <div id="filter" className="py-8 mx-10 flex">
                <input className="bg-grey-100 border-solid border-b-2 outline-none cursor-pointer" onChange={(e)=>{
                    setSearchText(e.target.value);
                }} placeholder="Search Restarunts" value={searchText} type="search" id="gsearch" name="gsearch" />
                <input type="button" className="bg-green-300 ml-10 px-3 py-1 border cursor-pointer transition duration-300 ease-in-out hover:bg-green-400 hover:shadow-lg" onClick={
                    ()=>{

                        let filterData = data.filter((item) => item.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilterResData(filterData)
                    }
                } value="search" />
                {/* <button className="bg-green-300 ml-10 px-3 py-1 border cursor-pointer" >Filter </button>
                <button className="bg-green-300 ml-10 px-3 py-1 border cursor-pointer" >Offers </button> */}
                <button className="bg-green-300 ml-10 px-3 py-1 border cursor-pointer transition duration-300 ease-in-out hover:bg-green-400 hover:shadow-lg" onClick={toggleTopRating}>
                    {showTopRating ? 'Show All' : 'Top Rating 4+'}
                </button>
            </div>
            <div id="card-cantainer" className="flex flex-wrap gap-0 justify-evenly">
                {
                    filterResData.map((data) => {
                        return (<Link key={data?.info?.resId} to={"/bangalore/"+data?.info?.resId}>
                               { data.isPromoted ? <SponsoredCard restaurantsDetails={data} /> : <Cards restaurantsDetails={data} />}
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