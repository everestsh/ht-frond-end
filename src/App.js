import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
