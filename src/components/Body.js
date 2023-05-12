import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { restaurantData } from "../config";
import useOnline from "../utils/useOnline";
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

    const online = useOnline()
    if(!online){
     return <h1>looks like you have no internet connection</h1>
    }
   
   
  return (allRestaurants?.length === 0) ? <Shimmer/>:  (
    <>
      <div className="py-10 text-center">
        
        <input style={{width:'50%',height:"40px"}} 
          type="text"
          className="p-2 border-2 border-gray-700 rounded-lg focus:bg-green-50 focus:outline-none"
          placeholder="search"
          value={searchInput}
          onChange={onChangeInput=(e)=>{
                  setSearchInput(e.target.value)
                
          }}
        />
        <button className="mx-5 p-2 bg-green-600 text-white rounded-lg hover:bg-green-800 active:bg-red-500" onClick={()=>{
           const data = filterData(searchInput,allRestaurants);
           setFilteredRestaurants(data)
        }}>Search</button>
      </div>

      <h1 className="mx-10 font-bold text-2xl mb-2 underline">Restaurants Near You</h1>
      
      
      <div className="flex flex-wrap">
      {filteredRestaurants?.length === 0 ? <h1>No Restaurants matched your search..!!</h1> : 
        filteredRestaurants.map((restaurant) => {
          return (
            <Link to={'/restaurants/'+restaurant.data.id} key={restaurant.data.id}  >
            <RestaurantCard  {...restaurant.data} />
            </Link>
          );
        })}
      </div>

    </>
  );
};

export default Body;
