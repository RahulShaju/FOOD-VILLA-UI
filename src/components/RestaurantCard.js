import { IMG_CDN_URL } from "../config"

const RestaurantCard = ({name,cuisines,cloudinaryImageId,totalRatingsString}) => {
  
  
   
    return(
      <div className='card'>
      <img src={IMG_CDN_URL+cloudinaryImageId}/>
      <h2>{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h4>{totalRatingsString}</h4>
      </div>
    )
  }

  export default RestaurantCard