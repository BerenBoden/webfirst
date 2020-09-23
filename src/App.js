import React, { Component } from "react";
import Body from "./components/body/Body";
import Services from './components/pages/Services';
import Blog from './components/pages/Blog';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Body}>
            <Body />
          </Route>
          <Route path="/services" component={Services}>
            <Services />
          </Route>
          <Route path="/portfolio" component={Portfolio}>
            <Portfolio />
          </Route>
          <Route path="/blog" component={Blog}>
            <Blog />
          </Route>
          <Route path="/about" component={About}>
            <About />
          </Route>
        </Switch>
      </Router>
    );
  }
}
