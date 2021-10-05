import React,  {Fragment } from 'react';
import { Route } from "react-router-dom";
import Home from './pages/Home';
import Paystack from './pages/paystack';
import Flutter from './pages/Flutter'

const App: React.FC = () => {
  return (
  <Fragment>
     <Route exact path="/" component={Home} />
     <Route exact path="/paystack" component={Paystack} />
     <Route exact path="/flutter" component={Flutter} />
  </Fragment>
    
  );
}

export default App;
