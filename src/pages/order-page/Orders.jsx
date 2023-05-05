import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/card/Card";
import axios from "axios";
import AppContext from "../../helpers/context";



function Orders() {
  const {addToCart, isItemAdded} = useContext(AppContext)
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

	useEffect(()=> {
		(async()=> {
      try {
        const {data} = await axios.get("https://644d1633cfdddac9709ca6b1.mockapi.io/cart");
        setOrders(data.map(item => item))
      setIsLoading(false)
      } catch (error) {
        alert(error)
      }
    })();
	}, [])


	return ( 
		<>
		<main className="main">
          <div className="container">
            <section className="products">
              <div className="products-title__wrap">
                <h1 className="products__title">
                  Мои заказы
                </h1>
              </div>
              <ul className="card-list">
              {(isLoading ? [...Array(8)] : orders).map((item, index) => {
							return 	<Card key={index}
              onClickFavorite={() => console.log("Добавлено в закладки")}
              
              added={isItemAdded(item && item.id)}
              loading={isLoading}
              isFavorite={true}
              {...item}
							></Card>
							})}
              </ul>
            </section>
          </div>
        </main>
		</>
	)
}

export default Orders