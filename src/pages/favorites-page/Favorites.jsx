import React, { useContext } from "react";
import Card from "../../components/card/Card";
import AppContext from "../../helpers/context";

function Favorites({ onClickAdd}) {
	
	const {cartItems} = useContext(AppContext)
	console.log(cartItems);
	return ( 
		<>
		<main className="main">
          <div className="container">
            <section className="products">
              <div className="products-title__wrap">
                <h1 className="products__title">
                  Мои закладки
                </h1>
              </div>
              <ul className="card-list">
              {cartItems.map(item => {
							return 	<Card name={item.name}
							type={item.type}
							key={item.id}
							image={item.image}
							price={item.price}
							isFavorite = {true}
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

export default Favorites