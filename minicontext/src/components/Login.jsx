import React, { useContext, useState }  from "react";
import UserContext from "../Context/UserContext";

function Login(){
    let [username, setName] = useState("")
    let [password, setPassword] = useState("")
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div>
            <h1>Login</h1>
            <input type="text" value = {username} onChange={(e)=> setName(e.target.value)}></input>
            <input type="password" value = {password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button onClick={handleSubmit}> Submit </button>
        </div>
    )
}
export default Login