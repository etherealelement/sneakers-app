import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/card/Card";
import AppContext from "../../helpers/context";
import FavEmpty from "./fav-empty/FavEmpty";
import axios from "axios";

function Favorites({ onClickAdd }) {
  const { cartItems } = useContext(AppContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://644d1633cfdddac9709ca6b1.mockapi.io/cart"
        );
        setOrders(data.map((item) => item));
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  return (
    <>
      <main className="main">
        <div className="container">
          {orders.length <= 0 ? (
            <FavEmpty
              title={"Закладок нет :("}
              sub={"Вы ничего не добавляли в закладки"}
              img={"sneakers-app/images/smiles-img.svg"}
            ></FavEmpty>
          ) : (
            <>
              <section className="products">
                <div className="products-title__wrap">
                  <h1 className="products__title">Мои закладки</h1>
                </div>

                <ul className="card-list">
                  {cartItems.map((item) => {
                    return (
                      <Card
                        name={item.name}
                        type={item.type}
                        key={item.id}
                        image={item.image}
                        price={item.price}
                        isFavorite={true}
                        {...item}
                      ></Card>
                    );
                  })}
                </ul>
              </section>
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default Favorites;
