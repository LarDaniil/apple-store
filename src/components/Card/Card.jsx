import React from "react";
import { Link } from "react-router";

import { Data } from "../../App";

import favourites from "./images/favourites.svg";
import addFavourites from "./images/addFavourites.svg";
import basket from "./images/basket.svg";
import addBasket from "./images/addBasket.svg";

import styles from "./card.module.scss";

export function Card({ items, link, linkName, active }) {
  // Меняет значок в верстке при добавлении в корзину
  const [activeBasket, setActiveBasket] = React.useState(false);
  // Меняет значок в верстке при добавлении в избранное
  const [activeFavourit, setActiveFavourit] = React.useState(active);

  const {
    setArrayProductsBasket,
    setAddingItemFavorites,
    setProductLink,
    setProductСard,
    setReviews,
  } = React.useContext(Data);

  // Добавление и удаление из избранного
  function onClickAddFavourites(event) {
    setActiveFavourit((el) => !el);
    if (activeFavourit) {
      setAddingItemFavorites((addingItemFavorites) =>
        addingItemFavorites.filter(
          (item) => item.id !== Number(event.target.id)
        )
      );
    } else {
      items.link = link;
      items.linkName = linkName;
      setAddingItemFavorites((addingItemFavorites) => [
        ...addingItemFavorites,
        items,
      ]);
    }
  }
  // Добавление в корзину
  function onClickAddBasket() {
    items.link = link;
    items.linkName = linkName;
    items.linkTitle = linkProduct();
    setArrayProductsBasket((arrayProductsBasket) => [
      ...arrayProductsBasket,
      items,
    ]);
    setActiveBasket(true);
  }
  // Убирает лишние элементы и заменят пробелы в title элемента
  function linkProduct() {
    let title = items.title;
    while (title.includes(" ")) {
      title = title.replace(" ", "-");
    }
    while (title.includes(",")) {
      title = title.replace(",", "");
    }
    return link + "/" + title;
  }
  // Создание объекта описания карточки товара и создание перехода на https карточки товара
  function onClickLinkProduct() {
    items.link = link;
    items.linkName = linkName;
    items.linkTitle = linkProduct();
    setReviews(items.reviews);
    setProductСard((el) => (el = items));
    setProductLink((el) => (el = items.linkTitle));
  }

  return (
    <div key={items.id} className={styles.card}>
      {activeFavourit ? (
        <img
          id={items.id}
          className={styles.addFavourites}
          src={addFavourites}
          alt="addFavourites"
          onClick={(event) => onClickAddFavourites(event)}
        />
      ) : (
        <img
          id={items.id}
          className={styles.favourites}
          src={favourites}
          alt="favourites"
          onClick={(event) => onClickAddFavourites(event)}
        />
      )}

      <Link to={linkProduct()} onClick={onClickLinkProduct}>
        <img
          style={{
            marginTop: `${items.top}px`,
            marginBottom: `${items.m_btm}px`,
          }}
          width={items.width}
          src={items.image[0]}
          alt="img"
        />
        <h3>{items.title}</h3>
        <p>
          {items.price} <span>руб</span>
        </p>
      </Link>
      {activeBasket ? (
        <img className={styles.addBasket} src={addBasket} alt="basket" />
      ) : (
        <img
          className={styles.basket}
          src={basket}
          alt="basket"
          onClick={onClickAddBasket}
        />
      )}
    </div>
  );
}
