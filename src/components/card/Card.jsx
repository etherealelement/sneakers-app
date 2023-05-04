import React, { useEffect, useState } from "react";
import styles from "./card.module.scss";
import Loader from "../skeleton-loader/Loader";

function Card({
  name,
  id,
  type,
  image,
  price,
  onClickAdd,
  keyId,
  isFavorite,
  added = false,
  loading = false,
}) {
  const [add, setAdded] = useState(added);
  const [isFav, setIsFav] = useState(isFavorite);

  const handleClick = () => {
    setAdded(!add);
    onClickAdd({ name, type, image, price, keyId, id });
  };

  useEffect(() => {}, [add]);

  const onClickFav = () => {
    setIsFav(!isFav);
  };

  return (
    <>
    <li className={styles.cardList}>
      {loading ? (
        <Loader></Loader>
      ) : (
          <>
          <div onClick={onClickFav} className="favorite">
            <img
              src={
                isFav ? "/images/heart-liked.svg" : "/images/heart-unlike.svg"
              }
              alt="unlike"
            />
          </div>
          <img src={image} alt="" className="card-list__img" width="133px" />
          <div className={styles.cardInner}>
            <p className={styles.cardListTitle}>{type}</p>
            <p className={styles.cardListSub}>{name}</p>
          </div>
          <div className={styles.CardWrap}>
            <div className={styles.cardInner}>
              <span className={styles.CardListSub}>Цена:</span>
              <p className={styles.CardListPrice}>{price} руб.</p>
            </div>
            {isFavorite ? null : (
              <button className={styles.ButtonInner} onClick={handleClick}>
                <img
                  src={add ? "/images/added-btn.svg" : "/images/add-item.svg"}
                  alt={name}
                />
              </button>
            )}
          </div></>
      )}
      </li>
    </>
  );
}

export default Card;
