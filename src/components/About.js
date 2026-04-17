import User from "./User";
import UserClass from "./UserClass";
import React from "react"
class AboutUs extends React.Component {

    constructor(props){
        super(props)
        console.log("parent constructor")
    }

    componentDidMount(){
        console.log("parent did mount")
    }
     componentDidUpdate(){
        console.log("parent did Update")
    }
    componentWillUnmount() {
        console.log("parent will unmount")
    }
    render() {
        console.log("parent render")
        return (
            <div>
                <h1>About Us</h1>
                <p>This is our about us page</p>
                {/* <User name="first (function)" email="saravanan.uiengineer@gmail.com" contact="9686761005" />
                <User name="second (function)" email="saravanan.uiengineer@gmail.com" contact="9686761005" /> */}
                <hr />
                <UserClass name="first (class)" email="saravanan.uiengineer@gmail.com" contact="9686761005" />
                <UserClass name="Second (class)" email="saravanan.uiengineer@gmail.com" contact="9686761005" />
            </div>
        )
    }
}

// const AboutUs = ()=> {
    // return (
    //     <div>
    //         <h1>About Us</h1>
    //         <p>This is our about us page</p>
    //     <User name="saravanan (function)" email="saravanan.uiengineer@gmail.com" contact="9686761005" />
    //     <hr />
    //     <UserClass name="saravanan (class)" email="saravanan.uiengineer@gmail.com" contact="9686761005"/>
    //     </div>
    // )
// }

export default AboutUs;