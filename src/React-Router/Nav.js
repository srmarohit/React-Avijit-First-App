import React from 'react'


import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Error from './Error'
import About from './About'
import Contact from './Contact'
import Home from './Home'

function Nav() {
    return (

        <Router>

            
            
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                </ul>
            </nav>
            
            <Switch>
               <Route path="/" exact component={Home}/>
               <Route path="/about/:title" component={About}/>
               <Route path="/contact" component={Contact}/>

               <Route path="/*" component={Error}/>
            </Switch>

        </Router>

    )
}

export default Nav
