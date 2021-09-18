
import React, { useState } from 'react'

import Add from './Add'
import Congrats from './Congrats'
import GameOne from './GameOne'

function App() {

    const [score, setScore] = useState(0)

    const updateScore = () => {
        setScore(score + 1)
    }
    
   
    if(score < 5){
        return (
            <div>
                <GameOne incScore = {updateScore} />
                <h2>Score : {score}</h2>
            </div>
        )
    }else{
        return (
            <div>
                <Congrats/>
            </div>
        )
    }


}

export default App
