import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Projects from './components/Projects'
import "./app.scss"
import Skills from './components/Skills'

const App = () => {
   
    return (
        <>
        <Navbar/>  
        <Header/>
        <Skills/>
        <Projects/>
        </>      
    )
}

export default App 
