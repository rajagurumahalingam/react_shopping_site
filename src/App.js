import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="App">
      
        <Switch>
          <Route exact path="/">
          <Header />
            <Home />
          </Route>
          <Route exact path="/login">
            <h1>Login page!</h1>
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
