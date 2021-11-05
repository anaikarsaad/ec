import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = (props) => (
  <div>
    <h1>{props.myProp}</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path="/hats" component={() => (<HatsPage myProp="Hats Page" />)}/>
        <Route path="/jackets" component={() => (<HatsPage myProp="Jackets Page" />)}/>
        <Route path="/Sneakers" component={() => (<HatsPage myProp="Sneakers Page" />)}/>
        <Route path="/mens" component={() => (<HatsPage myProp="Mens Page" />)}/>
        <Route path="/womens" component={() => (<HatsPage myProp="Womens Page" />)}/>
      </Switch>
    </div>
  );
}

export default App;
