

import React from "react" 

const ChildB = (props) => {


    return (
        <>
        <h3>My name is { props.name || "John" }</h3>
        </>
    )
}

export default ChildB 