import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

function Header({ onClickOpen }) {
  const { TotalPrice } = useCart();
  return (
    <header className={styles.Header}>
      <Link to="/">
        <div className={styles.HeaderContent}>
          <img src="images/logo.png" alt="logo" width={40} height={40} />
          <div className={"header__content-wrap"}>
            <h3 className={styles.HeaderTitle}>REACT SNEAKERS</h3>
            <p className={styles.LogoSub}>Магазин лучших кроссовок</p>
          </div>
        </div>
        
      </Link>
      <div className="header__login">
        <div className={styles.HeaderLoginBox}>
          <div className={styles.HeaderLoginInner} onClick={onClickOpen}>
            <Link>
              <img src="./images/shop-icon.svg" alt="Корзина" />
            </Link>
            <span className={styles.HeaderLoginSpn}>{TotalPrice} руб.</span>
          </div>
          <Link to="/favorites">
            <div>
              <img src="./images/favorites-icon.svg" alt="Закладки" />
            </div>
          </Link>
          <Link to="/orders">
            <img src="./images/login-icon.svg" alt="Личный кабинет" />
          </Link>
        </div>
      </div>
      
    </header>
  );
}

export default Header;
