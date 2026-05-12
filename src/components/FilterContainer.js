const FilterContainer = () => {
    
    return (
        <div id="filter" className="py-10 flex">
            <input placeholder="Search Restarunts" />
            <button>Filter </button>
            <button>Offers </button>
            <button onClick="">RatingL 4.5+ </button>
        </div>
    );
}

export default FilterContainer;