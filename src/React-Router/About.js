
import React from 'react'
import { useParams } from 'react-router-dom'

function About() {

    const params = useParams();

    return (
        <div>
            <h1>About  {params.title}</h1>
        </div>
    )
}

export default About
