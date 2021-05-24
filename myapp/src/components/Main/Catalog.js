import React from "react";

import "../../css/Main/Catalog.css";
import dataCards from "./dataCards";
import Card from "./Card";

function Catalog() {
  const cardItems = dataCards.map((elem) => <Card item={elem} key={elem.id} />);

  return (
    <section id="catalog" className="Catalog">
      <div className="container">
        <div className="row">
          <h2 className="col-12 section-title">Популярные интернет-магазины</h2>
          <div className="cards col-12">{cardItems}</div>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
