import { useEffect } from "react";

const Profile = ({name,age,place}) => {
    useEffect(()=>{
       const timer = setInterval(()=>{
            console.log("timer")
        },1000)

        return(
          clearInterval(timer)
        )

    },[])
    
    return (
        <div>
            <h1> Functional --- profile component </h1>
        </div>
    )
}
export default Profile;