import React from "react";
import "./card.style.css";

function Card(props) {
  return (
    <div className="card-component">
      <img
        src={"https://robohash.org/" + props.monsters.id + "?set=set2"}
        alt=""
      />
      <h1>{props.monsters.name}</h1>
    </div>
  );
}

export default Card;
