import { IMG_CDN_URL } from "../config"

const RestaurantCard = ({name,cuisines,cloudinaryImageId,totalRatingsString}) => {
  
  
   
    return(
      <div className='w-56 m-5 p-2 shadow-lg rounded-lg'>
      <img className="rounded-lg" src={IMG_CDN_URL+cloudinaryImageId}/>
      <h2 className="font-bold">{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h4>{totalRatingsString}</h4>
      </div>
    )
  }

  export default RestaurantCard