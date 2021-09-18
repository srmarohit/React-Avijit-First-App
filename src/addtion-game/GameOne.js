import React, { useState } from 'react'

function GameOne({incScore}) {
    
    const [ num1, setNum1 ] = useState(1)
    const [ num2, setNum2 ] = useState(1)

    const [response, setResponse] = useState("")

    const [ correct, setCorrect] = useState(true)


    const inputHandler = e => {
        setResponse(e.target.value)
    }

    const addNumbers = (event) => {

        if(event.key === "Enter"){
             const res = parseInt(response);

             if(res === num1 + num2){
                 setNum1(Math.ceil(Math.random() * 10))
                 setNum2(Math.ceil(Math.random() * 10))
                 setResponse("")
                 setCorrect(true)

                incScore();
             }else{
                 setResponse("")
                 setCorrect(false)
             }
        }

    }


    return (
        <div>
            <h2 
            style =  { correct ? {} : { color : "red" }  } 
            >{num1}  + {num2}</h2>

            <input type="text" 
            value={response}
            onChange={inputHandler}
            onKeyPress={addNumbers} 
            />

        </div>
    )
}

export default GameOne
