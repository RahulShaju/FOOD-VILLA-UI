import { useState } from "react"

const Section = ({title,description,isVisible,setIsVisible}) =>{ 
    return(
        <div className="border-black m-2 border-2 p-2 ">
           {isVisible ? <button onClick={()=>{
             setIsVisible("worng")
           }} className="cursor-pointer underline">hide</button>
           :
           <button onClick={()=>{
            setIsVisible(title)
           }} className="cursor-pointer underline">show</button>
           
    }
            <h1 className="font-bold text-xl">{title}</h1>
    
           { isVisible && <p>{description}</p>}
        </div>
    )
}

const Instamart = () =>{
    const [sectionVisible,setSectionVisible]=useState(null)
    return(
        <div>
            <h1 className="font-bold text-3xl p-2">instamart</h1>
            <Section setIsVisible={(a)=>{
                setSectionVisible(a)
            }} isVisible={sectionVisible ==="about"} title="about" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
            <Section setIsVisible={(a)=>{
                setSectionVisible(a)
            }} isVisible={sectionVisible==="career"} title="career" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Section>
            <Section setIsVisible={(a)=>{
                setSectionVisible(a)
            }}  isVisible={sectionVisible==="product"} title="product" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
        </div>
    )
}
export default Instamart