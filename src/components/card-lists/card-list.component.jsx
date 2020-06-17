import React from "react";
import "./card-list.style.css";
import Card from "../card/card.component";

function CardList(props) {
  return (
    <div className="cardlist">
      {props.monsters.map((Element) => (
        <Card key={Element.id} monsters={Element} />
      ))}
    </div>
  );
}

export default CardList;
