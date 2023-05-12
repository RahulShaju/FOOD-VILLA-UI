import { useContext } from "react"
import UserContext from "../utils/UserContext"
import UserContext from "../utils/UserContext"

const Footer = () => {
  const {user} = useContext(UserContext)
    return(
    <div>
      <p>This site is developed by - {user.email}</p>
    </div>
    )
  }

  export default Footer