import React from 'react'

class Profile extends React.Component{

    constructor(props){
        super(props)
        this.state={
            userInfo:{
              
            }
        }
        console.log(this.props.name + "constructor")
    }
    
    async componentDidMount(){
        // console.log(this.props.name + "component did mount")
        // const data = await fetch("https://api.github.com/users/Rahulshaju")
        // const json = await data.json()
        // console.log(json)
        // console.log("api call is finsihed in the child")
        // this.setState({
        //     userInfo:json
        // })
        console.log("asdf")
       this.timer = setInterval(()=>{
            console.log("timer")
          },1000)
        
       
    }
    componentDidUpdate(){
        
        console.log("component did update")
    }
    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("component will unmount")
    }
     
    render(){
        console.log(this.props.name + "component rendered")
        return (
           <div>
             <h1>class component for profile</h1>
             <h3>{this.state?.userInfo?.login}</h3>
            
             <img src={this.state?.userInfo?.avatar_url} alt=""  />
           </div>
        )
    }
}

export default Profile