import { useEffect, useState } from 'react';
import {RESTAURANT_MENU_URL} from '../config'
const useRestaurant = (id) =>{
    const [restaurantInfo,setRestaurantInfo] = useState([])
    useEffect(()=>{
        getRestaurantInfo();
     },[])
 
     async function  getRestaurantInfo(){
         try {
             const data = await fetch(RESTAURANT_MENU_URL + id)
             const json = await data.json()
             console.log("json",json.data.cards)
             setRestaurantInfo(json.data.cards)
         } catch (error) {
             console.log(error.message)
         }
     }
  return restaurantInfo;
}

export default useRestaurant