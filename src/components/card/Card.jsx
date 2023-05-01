import React, { useEffect, useState } from "react";
import styles from "./card.module.scss";

function Card({name, type, image, price, onClickFavorite, onClickAdd, keyId}) {

  const [add, setAdded] = useState(false);
  const [isFav, setIsFav] = useState(false)

  const handleClick = () => {
    setAdded(!add);
    onClickAdd({name, type, image, price, keyId});
  }

  useEffect(()=> {
  },[add])

const onClickFav = () => {
  setIsFav(!isFav)
}

  return (
    <>
      <li className={styles.cardList}>
        <div onClick={onClickFav}className="favorite" >
          <img src={isFav ? "/images/heart-liked.svg" : "/images/heart-unlike.svg"} alt="unlike"/>
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
          <button className={styles.ButtonInner} onClick={handleClick}>
            <img src= {add ? "/images/added-btn.svg" : "/images/add-item.svg"} alt={name}/>
          </button>
        </div>
      </li>
    </>
  );
}

export default Card;
