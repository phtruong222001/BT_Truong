import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();   //  ${match.url} laasy casi topics, lay tu props
  // let { path, url } = useRouteMatch(); // cach hay path = match.path url = match.url
  
  return (
    <div>
      <h2>Topics list</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}> 
           {/* DUOWNG DAN {match.url} <br/> {match.url} la  topics   */}
            Props v. State  :  
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:params`}>
            <Topic />
        {/* <Route path={`${match.path}/:params`} children={<Topic/>}>           Cach */}
          
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { params } = useParams(); // laasy duong dan tu cau path  vd ( /topics/ params  ) o day lay cai component
  return <h3>Requested topic ID (params): {params}</h3>;
}