import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile(){

    const {user} = useContext(UserContext)
    console.log(user)
    if(!user){
        return <h1>Please login</h1>
    }
    return <div> Welcome, {user.username}</div>
}
export default Profile