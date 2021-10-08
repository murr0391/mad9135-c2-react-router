import "./App.css";
import Navigation from "../Navigation/Navigation";
import Users from "../Users/Users";
import Home from "../Home/Home";
import Not from "../Not/Not";
import Addresses from "../Addresses/Addresses";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Switch>
          <Route path="/addresses">
            <Addresses />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/404">
            <Not />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
