import React, { useContext, useState } from "react";
import styles from "./card.module.scss";
import Loader from "../skeleton-loader/Loader";
import AppContext from "../../helpers/context";

function Card({name, 
  id, 
  type, 
  image, 
  price, 
  onClickAdd, 
  keyId, 
  isFavorite, 
  loading = false}) {


  const { isItemAdded } = useContext(AppContext);
  const [isFav, setIsFav] = useState(isFavorite)

  const handleClick = () => {
    onClickAdd({name, type, image, price, keyId, id});
  }


const onClickFav = () => {
  setIsFav(!isFav)
}

  return (
    <>
      
        {
          loading ?   <li className={styles.cardItem}><Loader></Loader></li>: <>
          <li className={styles.cardItem}>
            <div onClick={onClickFav}className="favorite" >
          <img src={isFav ? "sneakers-app/images/heart-liked.svg" : "sneakers-app/images/heart-unlike.svg"} alt="unlike"/>
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
          {isFavorite ? null : <button className={styles.ButtonInner} onClick={handleClick}>
            <img src= {isItemAdded(id) ? "sneakers-app/images/added-btn.svg" : "images/add-item.svg"} alt={name}/>
          </button>}
        </div>
        </li>
          </>
        }
    </>
  );
}

export default Card;
