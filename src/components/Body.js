import { useEffect, useState } from "react";
import { restaurantData } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";




function filterData(searchInput,restaurants) {
 const filteredRestaurants = restaurants.filter((items)=>{
       return  items?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    })
    console.log(filteredRestaurants)
    return filteredRestaurants
}

const Body = () => {

 
    
    
    const [searchInput,setSearchInput] = useState("")
    const [allRestaurants,setAllRestaurants] = useState([])
    const [filteredRestaurants,setFilteredRestaurants] = useState([])
    useEffect(()=>{
       console.log("useffect trigeered")
       getRestaurants()
     },[])
   
    async function getRestaurants(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.5241391&lng=76.9366376&page_type=DESKTOP_WEB_LISTING")
    const  json = await data.json()
     console.log(json)
      // console.log(json?.data?.cards[1]?.data?.data?.cards)
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

   
   
  return (allRestaurants?.length === 0) ? <Shimmer/>:  (
    <>
      <div className="search-container">
        <input style={{width:'50%',height:"30px"}} 
          type="text"
          className="search-input"
          placeholder="search"
          value={searchInput}
          onChange={onChangeInput=(e)=>{
                  setSearchInput(e.target.value)
                
          }}
        />
        <button className="search-btn" onClick={()=>{
           const data = filterData(searchInput,allRestaurants);
           setFilteredRestaurants(data)
        }}>Search</button>
      </div>
      
      <div className="restaurant-list">
      {filteredRestaurants?.length === 0 ? <h1>No Restaurants matched your search..!!</h1> : 
        filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>

    </>
  );
};

export default Body;
