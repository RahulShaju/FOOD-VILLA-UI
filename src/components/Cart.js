import { useDispatch, useSelector } from "react-redux"
import FoodItem from "./FoodItem"
import { clearCart } from "../utils/cartSlice"


const Cart = () =>{
    const dispatch = useDispatch()
    
    const cartItems = useSelector(store=>store.cart.items )
    const handleClearCart = () =>{
         dispatch(clearCart())
    }
    return (
        <div>
            <h1 className="font-bold text-3xl">Cart items - {cartItems.length} </h1>
            <button className="bg-red-600 text-white rounded p-1" onClick={()=>{handleClearCart()}}>Clear cart</button>
            <div className="flex">
            {cartItems.map((item,index)=>{
                return (
                    <div  key={index} >
                        <FoodItem  {...item} />
                    </div>
                )
            })}
            </div>
        </div>
    )
}
export default Cart