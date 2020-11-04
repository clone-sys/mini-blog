import React from "react";
import { AppContextProvider } from "./ context/AppContext";
import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Users from "./pages/Users";
import User from "./pages/User";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Navigation />
        <Container
          id="container"
          className="pt-3 d-flex flex-column align-items-center text-center"
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/posts/:id" component={Post} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:id" component={User} />
          </Switch>
        </Container>
        <Navigation id="footer" />
      </Router>
    </AppContextProvider>
  );
}

export default App;
