const Search = (props) => {
  let { listofRestro,setListofRestro } = props || {};

  const handleFilterResto = () =>{
    console.log("entr to handle resto");
    let filteredRestro = listofRestro?.filter((item)=> item?.info?.avgRatingString > 4)
    console.log({filteredRestro});
    setListofRestro(filteredRestro)
  }

  return (
    <div className="btn-class">
      <button
        className="filter-btn"
        onClick={handleFilterResto}
      >
        Top Rated Restro
      </button>
    </div>
  );
};

export default Search;
