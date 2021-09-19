import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import "./app.scss"
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Faq from './components/Faq'
import Contact from './components/Contact'

const App = () => {
   
    return (
        <>
        <Navbar/>  
        <Header/>
        <Skills/>
        <Projects/>
        <Testimonials/>
        <Portfolio/>
        <Faq/>
        <Contact/>
        </>      
    )
}

export default App 
