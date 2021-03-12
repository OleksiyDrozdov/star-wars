import React from "react";
import ItemList from "../item-list/item-list";
import ViewElement from "../view-element/view-element";
import SwapiService from "../../services/swapi-service";

const ListOfVihicles = props => {
  const swapiService = new SwapiService();
  const view = props.handleSelected ? (
    <ViewElement
      selectedItem={props.selectedItem}
      get={swapiService.getStarship}
      nameElement={3}
    />
  ) : null;
  return (
    <>
      <ItemList
        onItemSelected={props.handleSelected}
        getData={swapiService.getAllStarships}
      >
        {i => `${i.name}`}
      </ItemList>
      {view}
    </>
  );
};

export default ListOfVihicles;
