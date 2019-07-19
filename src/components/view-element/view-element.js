import React, { Component } from "react";
import "./view-element.css";
import Spinner from "../spinner/spinner";
import ViewPlanets from "../view-planets/view-planets";
import ViewVihicles from "../view-vihicles/view-vihicles";
import ViewCharacters from "../view-characters/view-characters";
import ErrorMessage from "../error-message/error-message";

class ViewElement extends Component {
  state = {
    element: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updete();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedItem !== prevProps.selectedItem) {
      this.updete();
    }
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updete = () => {
    if (!this.props.selectedItem) return;
    this.props
      .get(this.props.selectedItem)
      .then(element => {
        this.setState({
          element,
          loading: false
        });
      })
      .catch(this.onError);
  };
  render() {
    const { element, loading, error } = this.state;

    const spinner = loading && this.props.selectedItem ? <Spinner /> : null;
    const contentPlanets = !(loading || error) ? (
      <ViewPlanets element={element} selectedItem={this.props.selectedItem} />
    ) : null;
    const contentCharacters = !(loading || error) ? (
      <ViewCharacters
        element={element}
        selectedItem={this.props.selectedItem}
      />
    ) : null;
    const contentVihicles = !(loading || error) ? (
      <ViewVihicles element={element} selectedItem={this.props.selectedItem} />
    ) : null;

    const errorMes = error ? <ErrorMessage /> : null;
    const text = !this.props.selectedItem ? <Choice /> : null;
    return (
      <div className="main">
        {spinner}
        {this.props.nameElement === 1 ? contentPlanets : null}
        {this.props.nameElement === 2 ? contentCharacters : null}
        {this.props.nameElement === 3 ? contentVihicles : null}
        {errorMes}
        {text}
      </div>
    );
  }
}
const Choice = () => {
  return (
    <>
      <span>choose the name and get information</span>
    </>
  );
};
export default ViewElement;
