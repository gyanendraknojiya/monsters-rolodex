import React from "react";
import "./card.style.css";

function Card(props) {
  return (
    <div className="card-component">
      <img
        src={"https://robohash.org/" + props.monsters.id + "?set=set2"}
        alt=""
      />
      <h2>{props.monsters.name}</h2>
      <p>{props.monsters.email}</p>
    </div>
  );
}

export default Card;
