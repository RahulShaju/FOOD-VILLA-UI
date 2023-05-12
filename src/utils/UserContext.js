import { createContext } from "react";

const UserContext = createContext({
   user:{
    name:"dummy",
    email:"dummy@123"
   }
})

export default UserContext;