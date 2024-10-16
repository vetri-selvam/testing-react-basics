import { useState } from "react"

export default function Login(){
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [message, setMessage]= useState("");

    function signInHandler(){
        setMessage("verifying...");
        
        if (email === 'someemail@gmail.com' && password ==='Something'){
            setTimeout(()=>
                setMessage("Successfully Logged in!")
            ,2000) ;
            
        }
        else{
            setTimeout(()=>
                setMessage("Wrong Credentials!")
            ,2000);
        }
    }


    return( 
        <>
            <h1>Login Page</h1>
            <input type="text" placeholder="Email" onChange={e=> setEmail(e.target.value)}/><br/>
            <input type="text" placeholder="Password" onChange={e=> setPassword(e.target.value)}/><br/>
            <button onClick={signInHandler}>Log in</button>
            {message && <p>{message}</p>}
        </>
    )
}