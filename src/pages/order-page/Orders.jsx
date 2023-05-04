import React from "react";
import Card from "../../components/card/Card";

function Orders() {
	
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
              {[].map(item => {
							return 	<Card 
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