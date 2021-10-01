import React,  {Fragment } from 'react';
import { Route } from "react-router-dom";
import Home from './pages/Home'

const App: React.FC = () => {
  return (
  <Fragment>
     <Route exact path="/" component={Home} />
  </Fragment>
    
  );
}

export default App;
