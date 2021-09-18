

import React from "react" 
import ChildD from "./ChildD"

const ChildC = (props) => {

    return (
        <>
        <h1>Child C</h1>
        <ChildD person= {props.name}/>
        </>
    )
}

export default ChildC 