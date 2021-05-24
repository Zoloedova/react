import React from "react";

import "../../css/Main/Card.css";

function Card(props) {
  return (
    <div
      className="card col-12 col-md-6 col-xl-4"
      data-category={props.item.category}
    >
      <img className="card-image" src={props.item.image} alt={props.item.alt} />
      <h3 className="card-title">{props.item.title}</h3>
      <p className="card-desc">{props.item.desc}</p>
      <a
        className="btn"
        target="_blank"
        rel="noreferrer"
        href={props.item.href}
      >
        Перейти в магазин
      </a>
    </div>
  );
}

export default Card;
