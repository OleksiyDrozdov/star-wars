import React from "react";
import ItemsImg from "../items-img/items-img";
import "../view-planets/view-planets.css";

const ViewPlanets = ({
  element: { id, name, population, rotationPeriod, diameter, terrain }
}) => {
  return (
    <div className="view">
      <ItemsImg id={id} elementImg={1} />

      <h4>Planet name: {name}</h4>
      <span>Population: {population}</span>
      <span>Rotation period: {rotationPeriod}</span>
      <span>Diameter: {diameter}</span>
      <span>Terrain: {terrain}</span>
    </div>
  );
};
export default ViewPlanets;
