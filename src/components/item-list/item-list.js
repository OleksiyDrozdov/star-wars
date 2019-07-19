import React, { Component } from "react";
import "../item-list/item-list.css";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/error-message";
class ItemList extends Component {
  state = {
    listOfElements: [],
    loading: true,
    error: false
  };

  componentDidMount() {
    const { getData } = this.props;
    getData()
      .then(listOfElements => {
        this.setState({
          listOfElements,
          loading: false
        });
      })
      .catch(this.onError);
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true
    });
  };

  showPlanet(arr) {
    return arr.map(item => {
      const { id } = item;
      const label = this.props.children(item);
      return (
        <span key={id} onClick={() => this.props.onItemSelected(id)}>
          {label}
        </span>
      );
    });
  }

  render() {
    const { listOfElements, loading, error } = this.state;

    const items = !(loading || error) ? this.showPlanet(listOfElements) : null;
    const spinner = loading ? <Spinner /> : null;
    const errorMes = error ? <ErrorMessage /> : null;

    return (
      <div className="listOfElements">
        {spinner}
        {items}
        {errorMes}
      </div>
    );
  }
}

export default ItemList;
