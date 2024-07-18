import React, { useState } from "react";
import { Link } from "react-router-dom";



function Login(){
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')


   function submint(){
    var emailuser = document.getElementById("email");
    var passworduser = document.getElementById("password");

    if (emailuser === "admin@gmail.com" && passworduser === "123") {

        alert('success')
        window.location.href('/dashbaord')
        
    }
    else{
        console.log("error")
    }
   }
    return(
    
    <> 

       
        <form onSubmit={submint()} >
          <h2>BEUTY SALOON</h2>
          <p>Your warmly welcome</p>
                <input
                 type="text"
                 placeholder="email"
                 id="email"
                 value={email}
                 onChange={(e)=> setEmail(e.target.value)}
                  required
                 />
            <div class="form-group">
                <label password></label>
                <input
                 type="text"
                 id="password"
                 placeholder="password"
                 value={password}
                 onChange={(e)=> setPassword(e.target.value)}
                  required>
                    </input>
                     </div>
            <Link to= "/dashbaord">
           
            <button type="submit"  class="login-button">Login</button>
            </Link>
            <Link to= "register">
            <a href="/register">your have an account? create account</a>
           </Link>
        </form>

        
    
        </>
    )
}

export default Login;