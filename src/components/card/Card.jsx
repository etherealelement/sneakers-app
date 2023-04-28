import React from "react";
import styles from "./card.module.scss";

function Card({name, type, image, price}) {

  const onClickBtn = () => {
    return alert(name)
  }

  return (
    <>
      <li className={styles.cardList}>
        <div className="favorite">
          <img src="images/heart-unlike.svg" alt="unlike" />
        </div>
        <img
          src={image}
          alt=""
          className="card-list__img"
          width="133px"
        />
        <div className={styles.cardInner}>
          <p className={styles.cardListTitle}>{type}</p>
          <p className={styles.cardListSub}>{name}</p>
        </div>
        <div className={styles.CardWrap}>
          <div className={styles.cardInner}>
            <span className={styles.CardListSub}>Цена:</span>
            <p className={styles.CardListPrice}>{price} руб.</p>
          </div>
          <button className={styles.ButtonInner} onClick={onClickBtn}>
            <img src="/images/add-item.svg" alt="" />
          </button>
        </div>
      </li>
    </>
  );
}

export default Card;
