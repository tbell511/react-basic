import React from 'react'
import './css/App.css'

import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'

import Login from './components/login'
import Signup from './components/signup'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="login">Login</Link>
        <Link to="signup">Signup</Link>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App
