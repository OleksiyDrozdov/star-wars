import React, { Component } from "react";
import "../items-img/items-img.css";
import SwapiImg from "../../services/swapi-img";
import ErrorMessage from "../error-message/error-message";
import Spinner from "../spinner/spinner";

class ItemsImg extends Component {
  swapi = new SwapiImg();
  state = {
    indexImg: null,
    error: false,
    loading: true
  };
  componentDidMount() {
    this.updete();
  }
  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
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
    if (this.props.elementImg === 1) {
      this.swapi
        .getPlanetImg(this.props.id)
        .then(img => {
          this.setState({ indexImg: img, loading: false });
        })
        .catch(this.onError);
    } else if (this.props.elementImg === 2) {
      this.swapi
        .getCharactersImg(this.props.id)
        .then(img => {
          this.setState({ indexImg: img, loading: false });
        })
        .catch(this.onError);
    } else if (this.props.elementImg === 3) {
      this.swapi
        .getVihiclesImg(this.props.id)
        .then(img => {
          this.setState({ indexImg: img, loading: false });
        })
        .catch(this.onError);
    }
  };
  render() {
    const { loading, error } = this.state;
    const imgElement = (
      <div className="col">
        <img
          src={this.state.indexImg}
          alt="star-wars-foto"
          onClick={this.props.click}
        />
      </div>
    );
    const viewError = error ? <ErrorMessage /> : null;
    const viewSpiner = loading ? <Spinner /> : null;
    const viewImg = !(loading || error) ? imgElement : null;
    return (
      <>
        {viewError}
        {viewSpiner}
        {viewImg}
      </>
    );
  }
}
export default ItemsImg;
