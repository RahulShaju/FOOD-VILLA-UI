import { useEffect, useState } from "react";

// import { restaurantData } from "../config";
// import RestaurantCard from "./RestaurantCard";




function filterData(searchInput,restaurants) {
 const filteredRestaurants = restaurants.filter((items)=>{
       return  items.data.name.includes(searchInput)
    })
    console.log(filteredRestaurants)
    return filteredRestaurants
}
const RestaurantCard = () => {
  
  
   
    return(
      <div className='card shimmer' style={{backgroundColor:" #f2f2f2",width:"200px",height:"347px",border:0}} >
      <img  />
      <h2 ></h2>
      <h5 ></h5>
      <h4 ></h4>
      </div>
    )
  }

const Body = () => {

 
    
    // const [searchInput,setSearchInput] = useState("")
    const [allRestaurants,setAllRestaurants] = useState([])
    const [filteredRestaurants,setFilteredRestaurants] = useState([])
    useEffect(()=>{
   
       getRestaurants()
     },[])

    async function getRestaurants(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.5241391&lng=76.9366376&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json()
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }
 
    // if(!allRestaurants) return <h1>no data found</h1>
    // else
    
 
  return (
    <>
      <div className="search-container" >
        <input className="search-input shimmer" style={{width:'50%',height:"30px",backgroundColor:" #f2f2f2",border:0}} 
          type="text"
          
         
          
          onChange={onChangeInput=(e)=>{
                  setSearchInput(e.target.value)
                
          }}
        />
        <button className="search-btn shimmer" style={{backgroundColor:" #f2f2f2",width:"57px",height:"35",border:0}} onClick={()=>{
           const data = filterData(searchInput,allRestaurants);
           setFilteredRestaurants(data)
        }}></button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};
const Shimmer = () =>{
    return(
        <>
        <div style={{minHeight:"1200px"}}>

        <Body/>
        </div>
        </>
    )
}

export default Shimmer;

// const Shimmer = () =>{
//     return(
//         <>
//         <h1>LOADING</h1>
//         </>
//     )
// }
// export default Shimmer