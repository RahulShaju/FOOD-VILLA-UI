import React from 'react'
// import { IMG_CDN_URL } from '../config'
const Img_url = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"

function FoodItem({name,price,category,imageId,description}) {
  return (
    <div className='w-56 m-5 p-2 shadow-lg rounded-lg'>
    <img className="rounded-lg" src={Img_url+imageId}/>
    <h2 className="font-bold">{name}</h2>
    <h5>{description}</h5>
    <h5>{category}</h5>
    <h4>{price}</h4>
    </div>
  )
}

export default FoodItem