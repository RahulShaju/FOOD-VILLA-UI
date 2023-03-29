import React, { Children } from 'react'
import ReactDOM  from 'react-dom/client'
import HeaderComponent from './components/Header'
import { IMG_CDN_URL } from './config'
import Footer from './components/Footer'
import Body from './components/Body'
  

  const AppLayout = () =>{
    return(
      <>
        <HeaderComponent/>
        <Body/>
        <Footer/>

      </>
    )
  }
 
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayout/>);     