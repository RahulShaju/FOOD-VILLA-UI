import { useState } from "react";



 const Title = () => {
    return (
      <a href="/">
        <img
          className="logo"
          src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
          alt="logo"
        />
      </a>
    );
  };
  
 

const HeaderComponent = () =>{
  const [isLoggedIn,setIsLoggedIn] = useState(false)
    return (
      <div className='header'>
       <Title/>  
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
       
        {
          isLoggedIn ? 
          <button onClick = {()=>
            {
            setIsLoggedIn(false)
            }
          }>
            Log Out

            </button>
          :
          <button onClick = { () => 
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
  