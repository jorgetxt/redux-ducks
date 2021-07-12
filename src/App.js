import "./App.css";
import { Provider } from "react-redux";
import Login from "./components/login/Login";
import Home from './components/session/home/Home'
import generateStore from "./redux/store";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const store = generateStore();
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <div className="App">
            <Route  path="/login">
              <Login></Login>
            </Route>
            <Route  path="/home">
              <Home></Home>
            </Route>
          </div>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
