import React from 'react'

class UserClass extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userInfo:{
                login:"*****",
                user_view_type:"*****"
            }
        }
       console.log(this.props.name+"child constructor")
    }

    async componentDidMount(){
       // const data = await fetch("https://api.github.com/user/111775618");
        await new Promise(resolve => setTimeout(resolve, 2000));
        const data = await fetch("http://localhost:3001/userInfo")
        const json = await data.json();
        // this.setState({
        //     userInfo:json
        // })
        // console.log(json);

        console.log(this.props.name+"child did mount")
    }

    componentDidUpdate() {
        console.log(this.props.name+"child did Update")
    }
    
    componentWillUnmount(){
        console.log(this.props.name+"child will UnMount")
    }

    render() {
        console.log(this.props.name+"child render")
        const {login, email, user_view_type,avatar_url } = this.state.userInfo;
        const {count} = this.state;
        return (
        <div>
            <img src={avatar_url} />
            <h3>Saravanan V</h3>
            <p>Name: {login}</p>
            <p>Email: {email}</p>
            <p>Contact: {user_view_type}</p>
        </div>
        )
    }
}

export default UserClass;