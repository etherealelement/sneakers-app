import React from "react";
import Card from "../../components/card/Card";

function Favorites({items}) {
	console.log(items);
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
              {items.map(item => {
							return 	<Card name={item.name}
							type={item.type}
							key={item.id}
							image={item.image}
							price={item.price}
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