import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Price } from "./pages/Price";
import { Contact } from "./pages/Contact";
import { NoMatch } from "./pages/NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavBar";
import { Jumbotron } from "./components/Jumbotron";
import { Footer } from "./components/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/price" component={Price} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
