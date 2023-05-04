import React from "react";
import Card from "../../components/card/Card";

function HomePage({
  searchValue,
  onChangeSearchInput,
  products,
  addToCart,
  cartItems,
  isLoading,
})
{

  const RenderItems = () => {
    const filtredItems = products.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    
    return (isLoading ? [...Array(10)]: filtredItems).map((item,index) => (
      <Card
      key={index}
        onClickFavorite={() => console.log("Добавлено в закладки")}
        onClickAdd={(obj) => addToCart(obj)}
        added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
        loading={isLoading}
        {...item}
      ></Card>
    ));
  };

  return (
    <>
      <main className="main">
        <div className="container">
          <section className="products">
            <div className="products-title__wrap">
              <h1 className="products__title">
                {searchValue
                  ? `Поиск по запросу: "${searchValue}"`
                  : `Все кроссовки`}
              </h1>
              <div className="search-block">
                <img src="/images/search.svg" alt="Search" className="search" />
                <input
                  onChange={onChangeSearchInput}
                  type="text"
                  placeholder="Поиск..."
                  className="products__input"
                />
              </div>
            </div>

            <ul className="card-list">{RenderItems()}</ul>
          </section>
        </div>
      </main>
    </>
  );
}

export default HomePage;
