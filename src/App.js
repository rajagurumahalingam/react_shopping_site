import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Amazon Clone!</h1>
        <Switch>
          <Route path="/">
            <h1>Home page!</h1>
          </Route>
          <Route path="/login">
            <h1>Login page!</h1>
          </Route>
          <Route path="/checkout">
            <h1>Check out page!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
