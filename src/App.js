import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main';


function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
