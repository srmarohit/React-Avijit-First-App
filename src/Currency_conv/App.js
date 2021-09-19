

import React, { useState } from 'react'

import {Container, CurrencyBox, Amount, CurrencyChanger, From,To,Icon,Output,Calculate} from "./Styles"

import {currencies} from "./Currencies"

import axios from "axios"


function App() {

    const [state, setState]  = useState({
             from:"USD",
             to : "INR",
             amount:"",
             output:""
    })

    const findExchangeRates = async () =>{
         const response = await axios.get(`https://v6.exchangerate-api.com/v6/4c8421a103efb87f5e1e7279/latest/${state.from}`)

         //console.log(response.data.conversion_rates[state.to] * state.amount)

         const result = response.data.conversion_rates[state.to] * state.amount ;

         setState({ ...state, output : result})
    }

    return (
        <Container>
            <CurrencyBox className="bg-light p-3">
                <h2 className="fw-bold p-3 text-center">Currency Convertor</h2>
                <Amount className="p-3 mb-4">
                    <span className="d-block fw-bold mb-1">Enter Amount :</span>
                    <input type="number" 
                    value={state.amount} 
                    onChange={(e) =>{
                         setState( { ...state, amount : e.target.value } )   
                      }
                    } 
                    className="form-control"
                    placeholder="Enter Amount" />
                </Amount>
                <CurrencyChanger className="d-flex justify-content-between align-items-center px-3">
                    <From>
                        <span className="d-block fw-bold mb-1">From :</span> 
                        <select
                        value={state.from} 
                        onChange={(e) =>{
                             setState({...state, from : e.target.value})   
                          }
                        }
                        >
                            {
                                currencies.map(curr => {
                                    return <option>{curr}</option>
                                })
                            }
                        </select>
                    </From>
 
                   <Icon className="mt-4">
                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-left-right" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="21" y1="17" x2="3" y2="17" />
                    <path d="M6 10l-3 -3l3 -3" />
                    <line x1="3" y1="7" x2="21" y2="7" />
                    <path d="M18 20l3 -3l-3 -3" />
                    </svg>
                   </Icon>

                    <To>
                        <span className="d-block fw-bold mb-1">To :</span> 
                        <select
                         value={state.to} 
                         onChange={(e) =>{
                              setState({...state, to : e.target.value})   
                           }
                         }
                        >
                        {
                                currencies.map(curr => {
                                    return <option>{curr}</option>
                                })
                        }
                        </select>
                    </To>
                </CurrencyChanger>

                <Output 
                className="text-center my-4"
                >
                    <h3>{state.output}</h3>
                </Output>

                <Calculate className="btn btn-lg btn-primary mt-5 fw-bold w-100 " onClick={findExchangeRates}>Calculate</Calculate>
            </CurrencyBox>
        </Container>
    )
}


export default App




