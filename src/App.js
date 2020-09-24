import React, { Component } from "react";
import Body from "./components/body/Body";
import Services from './components/pages/Services';
import Blog from './components/pages/Blog';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

export default class App extends Component {
  state = {
    heading: [
      {title: 'Services'},
      {title: 'Portfolio'},
      {title: 'Blog'},
      {title: 'About'},
    ]
  } 

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Body}>
            <Body />
          </Route>
          <Route path="/services" component={Services}>
            <Services title={this.state.heading[0].title} />
          </Route>
          <Route path="/portfolio" component={Portfolio}>
            <Portfolio title={this.state.heading[1].title} />
          </Route>
          <Route path="/blog" component={Blog}>
            <Blog title={this.state.heading[2].title}/>
          </Route>
          <Route path="/about" component={About}>
            <About title={this.state.heading[3].title}/>
          </Route>
        </Switch>
      </Router>
    );
  }
}
