import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStatevalue } from './StateProvider';
import { auth } from './firebase';

function App() {

  const [{user}, dispatch] = useStatevalue(); 

  useEffect(() => {
    auth.onAuthStateChanged(authuser => {
      if(authuser){
        dispatch({
          type: "SET_USER",
          user: authuser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });

  }, []);

  console.log("User is >>>", user);

  return (
    <Router>
      <div className="App">
      
        <Switch>
          <Route exact path="/">
          <Header />
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/checkout">
          <Header />
            <h1>Check out page!</h1>
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
