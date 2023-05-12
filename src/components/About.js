// import { Outlet } from "react-router-dom"
// import Profile from "./Profile"


// const About = () =>{
//     return (
//         <div>
//             <h1>about us page</h1>
//             <h2>the food villa is online food ordering app. you will get your food in no time</h2>
//             <div>
//                 <Profile name= {'rahul'} age = '23' place='nattika' />
//                 {/* <Outlet/> */}
//                 <ProfileClass name = 'Rahul class'/>
//             </div>
//         </div>
//     )
// }
// export default About
//  import ProfileClass from './ProfileClass'
import { Component } from "react";
import Profile from './Profile';

class About extends Component {
    constructor (props){
        super(props)
        console.log("parent-constructor")
    }
    
    componentDidMount(){
        console.log("paraent- component did mount")
       
    }

  render() {
    console.log("parent-render ")
    return (
      <div>
        <h1>about us page</h1>
        <h2>
          the food villa is online food ordering app. you will get your food in
          no time
        </h2>
        <div>
          {/* <ProfileClass name="first-child" /> */}
          {/* <ProfileClass name="second-child" /> */}
          <Profile/>
        </div>
      </div>
    );
  }
}

export default About