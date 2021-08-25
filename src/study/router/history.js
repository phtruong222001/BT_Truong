
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Home from '../api/home';
import Login from '../api/login';

function History() {
    return (
        <>
           <Router>       
               <Switch>
                    <Route exact path="/home" 
                        render = {()=>{
                            return (localStorage.getItem("access_token")  ? <Home /> : <Redirect to="/"/>
                            )}}>
                    </Route>
                    <Route exact path="/"  render={()=>{
                        return(
                            localStorage.getItem("access_token")  ? <Redirect to="/home"/> : <Login />
                        )
                    }}>       
                    </Route>
               </Switch>
           </Router>
           
        </>
    )
}

export default History;