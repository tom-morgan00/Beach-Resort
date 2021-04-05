import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Room from './pages/Room';
import Error from './pages/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms" exact component={Rooms} />
          <Route path="/rooms/:slug" exact component={Room} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
