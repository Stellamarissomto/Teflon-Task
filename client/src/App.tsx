import React,  {Fragment } from 'react';
import { Route } from "react-router-dom";
import Home from './pages/Home';
import Paystack from './pages/paystack';
import Flutter from './pages/Flutter';
import Bemaswitch from './pages/bemaswitch'

const App: React.FC = () => {
  return (
  <Fragment>
     <Route exact path="/" component={Home} />
     <Route exact path="/paystack" component={Paystack} />
     <Route exact path="/flutter" component={Flutter} />
     <Route exact path="/bemaswitch" component={Bemaswitch} />
  </Fragment>
    
  );
}

export default App;
