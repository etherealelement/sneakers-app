import React, {useContext, useState} from "react";
import styles from "./drawer.module.scss";
import DrawerCard from "./drawer-card/DrawerCard";
import CartEmpty from "./cart-empty/CartEmpty";
import AppContext from "../../helpers/context";

function Drawer({ onClose, drawerProduct, onRemove }) {
  const [isCompleted, setCompleted] = useState(false)
  const { setCartItems } = useContext(AppContext)


  const onClickOrder = () => {
    setCompleted(true);
    setCartItems([]);
  }

  return (
    <>
      <div className={styles.Overlay}>
        <div className={styles.Drawer}>
          <div className="drawer__inner">
            <h2 className={styles.DrawerTitle}>
              Корзина
              <button className={styles.ButtonClose} onClick={onClose}>
                <img src="images/btn-close.svg" className="close-btn" alt="" />
              </button>
            </h2>
            {drawerProduct.length > 0 ? (
              <div>
                <ul className="cart">
                {drawerProduct.map((item) => {
                  console.log(item.id);
                  return (
                    <DrawerCard
                      url={item.image}
                      key={item.id}
                      type={item.type}
                      name={item.name}
                      price={item.price}
                      onRemove={onRemove}
                      dataId={item}
                    ></DrawerCard>
                  );
                })}
              </ul>
              <div className={styles.Total}>
            <div className={styles.TotalFirst}>
              <p className={styles.TotalTitle}>Итого: </p>
              <div className={styles.Border}></div>
              <p className={styles.TotalPrice}>21 498 руб.</p>
            </div>
            <div className={styles.TotalSecond}>
              <p className={styles.TotalTitle}>Налог 5%:</p>
              <div className={styles.Border}></div>
              <p className={styles.TotalPrice}>1074 руб.</p>
            </div>
            <button onClick={onClickOrder} className={styles.ButtonBuy}>
              Оформить заказ
              <img src="/images/arrow-left.svg" alt="arrow-icon" />
            </button>
          </div>
              </div>
            ) : (
              <CartEmpty image={isCompleted ?  "images/ordered.jpg" : "images/empty-cart.jpg"} 
              descr={isCompleted ? "Ваш заказ #18 скоро будет передан курьерской доставке": "Добавьте хотябы одну пару кроссовок, чтобы сделать заказ."}
              title={isCompleted ? "Заказ оформлен" : "Корзина пустая"}
              ></CartEmpty>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
