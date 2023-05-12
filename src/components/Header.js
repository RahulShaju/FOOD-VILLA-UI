import { useState ,useContext} from "react";
import {Link} from "react-router-dom"
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from 'react-redux';



 const Title = () => {
    return (
      <a href="/">
        <img
          className="h-24 p-2"
          src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj
          "
          // ../assets/foodie-low-resolution-logo-color-on-transparent-background.png
          alt="logo"
        />
      </a>
    );
  };
  
 

const HeaderComponent = () =>{
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const isOnline = useOnline()
  const {user} = useContext(UserContext)
  console.log(user)

  const cartItems = useSelector(store => store.cart.items)
  console.log(cartItems)

    return (
      <div className='flex  justify-between bg-orange-600 text-white shadow-lg'>
        <div>

       <Title/>                                   
        </div>
        <div className="flex" >
          <ul className="flex py-10">
            <li className="px-2"><Link to='/'> Home </Link></li>
            <li className="px-2"><Link to='/about'>About</Link></li>
            <li className="px-2"><Link to='/contact' >Contact</Link></li>
            <li className="px-2"><Link to='/cart'>Cart-{cartItems.length} items</Link></li>
            <li className="px-2"><Link to='/instamart'>Instamart</Link></li>
          </ul>
        </div>
        <h2 className="py-10 font-bold text-white">{user.email}</h2>
          <h5 className="py-10">{isOnline?"Online":"offline"}</h5>
        
       
        {
          isLoggedIn ? 
          <button className="bg-red-500" onClick = {()=>
            {
            setIsLoggedIn(false)
            }
          }>
            Log Out

            </button>
          :
          <button className="bg-green-500" onClick = { () => 
            {
            setIsLoggedIn(true)
            }
            }>
            Log In
            </button>
        }
       
      
      
      </div>
    )
  }

  export default HeaderComponent
  