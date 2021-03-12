import React from "react";
import ItemsImg from "../items-img/items-img";
const ViewVihicles = ({
  element: { id, name, model, manufacturer, length, crew, passengers }
}) => {
  return (
    <div className="view">
      <ItemsImg id={id} elementImg={3} />

      <h4>Vihicles: {name}</h4>
      <span>Model: {model}</span>
      <span>Manufacturer: {manufacturer}</span>
      <span>Vihicles lenght: {length}</span>
      <span>Crew: {crew}</span>
      <span>Passengers: {passengers}</span>
    </div>
  );
};
export default ViewVihicles;
