import React from "react";
import ItemsImg from "../items-img/items-img";
import "../view-characters/view-characters.css";
const ViewCharacters = ({
  element: { id, name, gender, birthYear, eyeColor }
}) => {
  return (
    <div className="view">
      <ItemsImg id={id} elementImg={2} />
      <h4>Characters: {name}</h4>
      <span>Gender: {gender}</span>
      <span>Birthday: {birthYear}</span>
      <span>Eye color: {eyeColor}</span>
    </div>
  );
};

export default ViewCharacters;
