import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from "../src/components/layout"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Home from "../src/components/home"
import About from '../src/components/about';
import NotFound from "../src/components/404"
import Hobby from "../src/components/hobby"
import DisplayJson from "../src/components/jsondataview"
  class App extends React.Component {
    render() {
      return (
        <Router>
      <div>
      <Layout>
      <h1>Created By Chrysnaardy123</h1>
        <a href="https://github.com/chrysnaardy123/Simple-React-Router" target="__Blank">Repository For This React-App Just Click to visit</a>
        <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/hobby' component={Hobby}></Route>
      <Route exact path='/jsondataview' component={DisplayJson}></Route>
      <Route path="*" component={NotFound}></Route>
      </Switch>
      </Layout>
      </div>
     
      </Router>
      );
    }
  }

  export default App;