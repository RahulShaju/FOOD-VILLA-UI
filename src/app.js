import React, { Children, lazy,Suspense, useContext, useState } from 'react'
import ReactDOM  from 'react-dom/client'
import HeaderComponent from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import Cart from './components/Cart'
import About from './components/About'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom' 
import Contact from './components/Contact'
import Body from './components/Body'
import RestaurantMenu from './components/RestaurantMenu'
import Login from './components/Login'
import Profile from './components/Profile'
import Shimmer from './components/Shimmer'
import UserContext from './utils/UserContext'
import { Provider } from 'react-redux'
import store from './utils/store'

// import Instamart from './components/Instamart'

const Instamart = lazy(()=>{
  return import('./components/Instamart')
})



  const AppLayout = () =>{
    const user = useContext(UserContext)
    console.log(user)
    // const [user,setUser] = useState({
    //   name:"Rahul",
    //   email:"rahul@gmail.com"
    // })
    return(

      <>
      <Provider store={store} >
      <UserContext.Provider value={user} >
        <HeaderComponent/>
       <Outlet/>
        <Footer/>
      </UserContext.Provider>
      </Provider>

      </>
    )
  }
 
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error/>,
      children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/about",
          element:<About/>,
          children:[
            {
              path:'profile',
              element:<Profile/>
            }
          ]
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/cart",
          element:<Cart/>
        },
        {
          path:'/restaurants/:id',
          element:<RestaurantMenu/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/instamart',
          element:(
            <Suspense fallback={<Shimmer/>}>
              <Instamart/>
            </Suspense>
          )
        }

      ]
    }
    
  ] )
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter} />);     