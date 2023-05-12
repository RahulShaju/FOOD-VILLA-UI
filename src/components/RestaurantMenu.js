import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;


  const restaurantInfo = useRestaurant(id);
const dispatch = useDispatch()
  const addFoodItem = (item)=>{
    dispatch(addItem(item))
  }

  return restaurantInfo?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div className="text-center w-auto shadow-lg">
        <div className="inline-block mx-auto">
          <h2 className="bold">{restaurantInfo[0]?.card?.card?.info?.name}</h2>
          <img
            className="h-24"
            src={
              IMG_CDN_URL +
              restaurantInfo[0]?.card?.card?.info?.cloudinaryImageId
            }
            alt=""
          />
        </div>

        <h3>{restaurantInfo[0]?.card?.card?.info?.locality}</h3>
        <h3>
          {restaurantInfo[0]?.card?.card?.info?.areaName},{restaurantInfo?.city}
        </h3>
        <h3>{restaurantInfo[0]?.card?.card?.info?.avgRating} stars</h3>
        {/* <div>
          <button className="bg-green-700 text-sm p-2 rounded text-white mb-2" onClick={handleAddItem}>Add Item</button>
        </div> */}
      </div>
      <div className="p-5">
        <h1 className="font-bold ml-2">Menu</h1>
        <ul>
          {restaurantInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
            (item, index) => {
              return (
                <div className="" key={index}>
                  <li className="p-2 bg-gray-600 m-2 rounded text-white" key={item.card.info.id}>{item.card.info.name} - <button onClick={()=>{
                    addFoodItem(item.card.info)
                  }} className="p-1 bg-green-500 rounded">Add</button></li>
                </div>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
