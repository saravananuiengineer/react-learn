import FilterContainer from "../components/FilterContainer";
import Cards from "../components/Cards";
import cardsList from "../utils/MockData"

const Body = () => {
    return (
        <div>
            <FilterContainer />
            <div id="card-cantainer">
            {
                cardsList.map( data => <Cards key={data?.info?.resId} restaurantsDetails={data} />)
            }
            </div>
            {/* <Cards restaurantsDetails={cardsList} /> */}
        </div>
    )
}

export default Body;