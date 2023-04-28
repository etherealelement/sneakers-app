import React from "react";
import "./card.module.scss";

function Card({name, type, image}) {
  return (
    <>
      <li className="card-list__item">
        <div className="favorite">
          <img src="images/heart-unlike.svg" alt="unlike" />
        </div>
        <img
          src={image}
          alt=""
          className="card-list__img"
          width="133px"
        />
        <div className="card-list__inner">
          <p className="card-list__title">{type}</p>
          <p className="card-list__subtitle">{name}</p>
        </div>
        <div className="card-wrap">
          <div className="card-inner">
            <span className="card__list-sub">Цена:</span>
            <p className="card__list-price">12 999 руб.</p>
          </div>
          <button className="card-button__wrap">
            <img src="/images/add-item.svg" alt="" />
          </button>
        </div>
      </li>
    </>
  );
}

export default Card;
