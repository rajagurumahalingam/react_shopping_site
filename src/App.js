import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
          <Route exact path="/">
            <h1>Home page!</h1>
          </Route>
          <Route exact path="/login">
            <h1>Login page!</h1>
          </Route>
          <Route exact path="/checkout">
            <h1>Check out page!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
