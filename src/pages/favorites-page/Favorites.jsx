import React, { useContext } from "react";
import Card from "../../components/card/Card";
import AppContext from "../../helpers/context";


function Favorites({onClickFav}) {
	const state = useContext(AppContext);
	console.log(state);

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
              {[].map((item, index) => {
							return 	<Card name={item.name}
							key={index}
							isFavorite = {onClickFav}
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