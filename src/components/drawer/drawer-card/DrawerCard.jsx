import React from "react";
import styles from "./DrawerCard.module.scss";

function DrawerCard({title,url,price}) {
  return (
    <>
      <li className={styles.CartItem}>
        <img
          width="70px"
          height="70px"
          src={url}
          alt="shop"
        />
        <div className={styles.CartItemBox}>
          <p className={styles.CartItemTitle}>
            {title}
          </p>
          <b className="cart__item-sub">{price}</b>
        </div>
        <button className={styles.DeleteButton}>
          <img src="images/btn-close.svg" className={styles.CloseBtn} alt="" />
        </button>
      </li>
    </>
  );
}

export default DrawerCard;
