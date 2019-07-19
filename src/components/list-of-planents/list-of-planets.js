import React from "react";
import "../list-of-planents/list-of-plnets.css";
import ItemList from "../item-list/item-list";
import SwapiService from "../../services/swapi-service";
import ViewElement from "../view-element/view-element";

const ListOfPlanets = props => {
  const swapiService = new SwapiService();
  const view = props.handleSelected ? (
    <ViewElement
      selectedItem={props.selectedItem}
      get={swapiService.getPlanet}
      nameElement={1}
    />
  ) : null;
  return (
    <>
      <ItemList
        onItemSelected={props.handleSelected}
        getData={swapiService.getAllPlanets}
      >
        {i => `${i.name}`}
      </ItemList>
      {view}
    </>
  );
};

export default ListOfPlanets;
