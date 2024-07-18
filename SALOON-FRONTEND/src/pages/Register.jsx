import React, { useState } from "react";

function Register(){
    const[firstname,setFirstname] = useState('')
    const[secondname,setSecondname] = useState('')
    const[email,setEmail] = useState('')
    const[date,setDate] = useState('')
    const[password,setPassword] = useState('')
    
    return(
        <>
        <h1>
            Register
        </h1>
        <input
                 type="text"
                 placeholder="firstname"
                 value={firstname}
                 onChange={(e)=> setFirstname(e.target.value)}
                  required
                     />
            <div class="form-group">
                <label secondname></label>
                <input
                 type="text"
                 placeholder="secondname"
                 value={secondname}
                 onChange={(e)=> setSecondname(e.target.value)}
                  required>
                    </input>
                     </div>
                     <div class="form-group">
                <label email></label>
                <input
                 type="text"
                 placeholder="email"
                 value={email}
                 onChange={(e)=> setEmail(e.target.value)}
                  required>
                    </input>
                    </div>
                    <div class="form-group">
                <label date></label>
                <input
                 type="date"
                 placeholder="date"
                 value={date}
                 onChange={(e)=> setDate(e.target.value)}
                  required>
                    </input>
                    </div>
                    <div class="form-group">
                <label password></label>
                <input
                 type="text"
                 placeholder="password"
                 value={password}
                 onChange={(e)=> setPassword(e.target.value)}
                  required>
                    </input>
                    </div>
            <button type="submit" class="register-button">submit</button>
             <a href="/" >
       <button >
            Login
        </button>
       </a>
        </>
    )
}

export default Register;