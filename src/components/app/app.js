import React, { Component } from "react";
import "./app.css";
import ListOfCharacters from "../list-of-characters/list-of-characters";
import ListOfVihicles from "../list-of-vihicles/list-of-vihicles";
import Header from "../header/header";
import ListOfPlanets from "../list-of-planents/list-of-planets";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ItemImg from "../items-img/items-img";
import ErrorMessage from "../error-message/error-message";

class App extends Component {
  state = {
    selectedItem: null
  };
  handleSelected = id => {
    console.log("handleSelected");
    this.setState({
      selectedItem: id
    });
  };
  componentWillUnmount() {
    console.log("componentWillUnmount");
    this.setState({
      selectedItem: null
    });
  }

  handleClick = () => {
    console.log("click");
    this.setState({
      selectedItem: null
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Header click={this.handleClick} />
          <section className="wrapImg">
            <Link to="/planets">
              <ItemImg id={13} elementImg={1} click={this.handleClick} />
            </Link>
            <Link to="/characters">
              <ItemImg id={11} elementImg={2} click={this.handleClick} />
            </Link>
            <Link to="/vehicle">
              <ItemImg id={10} elementImg={3} click={this.handleClick} />
            </Link>
          </section>
          <main className="info">
            <Switch>
              <Route path="/" exact />
              <Route
                path="/planets"
                render={() => (
                  <ListOfPlanets
                    selectedItem={this.state.selectedItem}
                    handleSelected={this.handleSelected}
                  />
                )}
              />
              <Route
                path="/characters"
                render={() => (
                  <ListOfCharacters
                    selectedItem={this.state.selectedItem}
                    handleSelected={this.handleSelected}
                  />
                )}
              />
              <Route
                path="/vehicle"
                render={() => (
                  <ListOfVihicles
                    selectedItem={this.state.selectedItem}
                    handleSelected={this.handleSelected}
                  />
                )}
              />
              <Route component={ErrorMessage} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
