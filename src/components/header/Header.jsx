import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom"

function Header({onClickOpen}) {
	return(
			<header className={styles.Header}>
          <div className={styles.HeaderContent}>
            <a href="#logo">
              <img src="/images/logo.png" alt="logo" width={40} height={40} />
            </a>
            <div className={"header__content-wrap"}>
              <h3 className={styles.HeaderTitle}>REACT SNEAKERS</h3>
              <p className={styles.LogoSub}>Магазин лучших кроссовок</p>
            </div>
          </div>

          <div className="header__login">
            <div className={styles.HeaderLoginBox}>
              <div className={styles.HeaderLoginInner} 
              onClick={onClickOpen}
              >
                <Link><img src="./images/shop-icon.svg" alt="Корзина" /></Link>
                <span className={styles.HeaderLoginSpn}>1205 руб.</span>
              </div>
              <a href="#">
              <Link><img src="./images/favorites-icon.svg" alt="Закладки" /></Link>
              </a>
              <Link><img src="./images/login-icon.svg" alt="Личный кабинет" /></Link>
            </div>
          </div>
        </header>
	)
}

export default Header;