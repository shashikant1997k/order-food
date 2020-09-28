import React from 'react';
// import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './component/Login';
import Otp from './component/Otp';
import Home from './component/Home';
import Header from './component/Header';
import { useStateValue } from './StateProvider';

function App() {

  const [{phone, token}, dispatch] = useStateValue();
  return (
    <>
      <Router>
        <Switch>
          {
            !token ? (
              <>
                <Route exact path="/">
                  <Login />
                </Route>
                <Route path="/otp">
                    <Otp />
                </Route>
              </>
            ) : (
              <>
                <Route path="/">
                  <Header />
                  <Home />
                </Route>
              </>
            )
          }
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
