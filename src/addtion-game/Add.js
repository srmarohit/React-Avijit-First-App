import React, { useState } from 'react'

function Add() {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");


    const userHandler = (e) => {
        setUser(e.target.value)
    }

    const passHandler = (e) => {
        setPass(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setUser("")
        setPass("")
    }
 
    return (
        <div>
            <h1>Addition Game</h1>

           <form onSubmit={submitHandler}>
              <input type="text" value={user} onChange={userHandler} /> 
                <br/>
              <input type="password" value={pass} onChange={passHandler} />
                <br/>
              <button type="submit">Submit</button>
           </form>

        </div>
    )
}

export default Add
