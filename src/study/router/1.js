import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Router1() {
    return (
        <>
            <>

<Router>
    <ul>
    <li>
          <Link to="/ho">Ho</Link>
        </li>
        <li>
          <Link to="/ten">Ten</Link>
        </li>
    </ul>

    <Switch>
    {/* exact  de noi cai dau tien*/}
    <Route path="/ho"> 
        <Ho />
      </Route>
      <Route path="/ten">
        <Ten />
      </Route>
      
    </Switch>

</Router>

</>
        </>
    )
}


function Ho(){
    return <h1> Phung </h1>
}

function Ten(){
    return <h1> Truong </h1>
}

export default Router1
