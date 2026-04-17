import {useEffect} from 'react'
const User = ({name, email, contact})=> {

    useEffect(()=>{
        console.log(name+"child function useEffect")
    },[])

    return (
        
        <div>{console.log(name+"child function render")}
            <h3>Saravanan V</h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Contact: {contact}</p>
        </div>
    );
}

export default User;