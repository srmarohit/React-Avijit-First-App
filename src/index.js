

import React from 'react'
import reactDom from 'react-dom'

import Portfolio from './portfolio/App'

import PropsDrilling  from './props-drilling/App'

import Hooks from "./toggle-post/App"

import AdditionGame from './addtion-game/App'

import TaskManager from './task-manage/App'

import CurrencyConv from './Currency_conv/App'

import ReactRouter from './React-Router/App'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

reactDom.render(

<BrowserRouter>
    
    <Switch>
        <Route exact path="/" component={Portfolio}/>
        <Route exact path="/task-manager" component={TaskManager}/>
        <Route exact path="/currency-convertor" component={CurrencyConv}/>
        <Route exact path="/add-game" component={AdditionGame}/>
    </Switch>

</BrowserRouter>

    , document.getElementById("root") )