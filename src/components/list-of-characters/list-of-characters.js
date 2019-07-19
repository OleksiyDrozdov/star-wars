import React from "react";
import "../list-of-characters/list-of-characters.css";
import ItemList from "../item-list/item-list";
import SwapiService from "../../services/swapi-service";
import ViewElement from "../view-element/view-element";

const ListOfCharacters = props => {
  const swapiService = new SwapiService();

  const view = props.handleSelected ? (
    <ViewElement
      selectedItem={props.selectedItem}
      get={swapiService.getPerson}
      nameElement={2}
    />
  ) : null;
  return (
    <>
      <ItemList
        onItemSelected={props.handleSelected}
        getData={swapiService.getAllPeople}
      >
        {i => `${i.name}`}
      </ItemList>
      {view}
    </>
  );
};

export default ListOfCharacters;
