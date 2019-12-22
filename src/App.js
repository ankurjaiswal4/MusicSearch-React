import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Songs from './pages/songs';
import Home from './pages/home';
import UserContext from './context/UserContext';
import Header from './components/Header';
import './index.css';

const user = {};

function App() {
  return (
    <UserContext.Provider value={user}>
      < Router >
        <Header></Header>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/portfolio" component={Songs} exact></Route>
          <Route path="/songs" component={Songs} exact></Route>
          <Route path="/contacts" component={Songs} exact></Route>
        </Switch>
      </Router >
    </UserContext.Provider>
  );
}

export default App;
