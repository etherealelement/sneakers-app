import React, {useContext, useState} from "react";
import styles from "./drawer.module.scss";
import DrawerCard from "./drawer-card/DrawerCard";
import CartEmpty from "./cart-empty/CartEmpty";
import AppContext from "../../helpers/context";
// import axios from "axios";

function Drawer({ onClose, drawerProduct, onRemove }) {
  const [isCompleted, setCompleted] = useState(false);
  const { setCartItems, SERVER_URL_POST } = useContext(AppContext);
  const [orderId, setOrderId] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const onClickOrder = () => {
    try {
      setIsLoading(true)
    setCompleted(true);
    setCartItems([]);
    setOrderId(orderId + 1);
    setIsLoading(false)
    } catch (error) {
      
    }
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
            <button disabled={isLoading} onClick={onClickOrder} className={styles.ButtonBuy}>
              Оформить заказ
              <img src="/images/arrow-left.svg" alt="arrow-icon" />
            </button>
          </div>
              </div>
            ) : (
              <CartEmpty image={isCompleted ?  "images/ordered.jpg" : "images/empty-cart.jpg"} 
              descr={isCompleted ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`: "Добавьте хотябы одну пару кроссовок, чтобы сделать заказ."}
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
