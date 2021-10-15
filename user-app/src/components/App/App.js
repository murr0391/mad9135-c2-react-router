import "./App.css";
import Navigation from "../Navigation/Navigation";
import Users from "../Users/Users";
import Home from "../Home/Home";
import Not from "../Not/Not";
import { Container } from "react-materialize";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Container>
          <Switch>
            <Route path="/addresses">
              <Users />
            </Route>
            <Route path="/users" exact>
              <Users />
            </Route>
            <Route path="/user/:id">
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
        </Container>
      </main>
    </div>
  );
}

export default App;
