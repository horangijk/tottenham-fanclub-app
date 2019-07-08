import React, { Component } from 'react';
import './App.css';

import { Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import SignupForm from './Components/SignupForm';
import LoginForm from './Components/LoginForm';
import CommentForm from './Components/CommentForm';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div>
      <div className='NavBar'>
        <Nav>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signup">Signup</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/comment_form">Comment</NavLink>
            </NavItem>
        </Nav>
        <Router>
          <Switch>
            <Route path='/home' exact component={Home}></Route>
            <Route path='/login' component={LoginForm}></Route>
            <Route path='/signup' component={SignupForm}></Route>
            <Route path='/comment_form' component={CommentForm}></Route>
          </Switch>
        </Router>
      </div>
      
      </div>
    );
  }
}

export default App;