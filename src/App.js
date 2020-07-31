import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
 
import HomePage from './Home/HomePage';
import Header from './Home/Header'
import EpisodePage from './Episode/EpisodePage';
import NotFound from './NotFound/NotFound';

class App extends Component {
  render() {
    return (      
      <section className="App">
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/users" component={HomePage} />
          <Route exact path="/season/:season/episode/:episode" component={EpisodePage} />
          <Route exact path="/search" component={HomePage} />
          <Route exact path="/about" component={HomePage} />
          <Route component={NotFound} />
        </Switch>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/episisode">Episodes</Link> */}
        {/* <Link to="/search?q=react">Search</Link> */}
        
      </Router>
      {/* <a href="/about">about with browser reload</a> */}
    </section>
    );
  }
}
 
export default App;