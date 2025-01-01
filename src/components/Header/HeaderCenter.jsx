import React from "react";
import { Link } from "react-router";

import { Data } from "../../App";

import siteNameBlackAndWhite from "./images/siteNameBlackAndWhite.jpg";

import search from "./images/search.svg";
import favourites from "./images/favourites.svg";
import basket from "./images/basket.svg";
import entrance from "./images/entrance.svg";

import styles from "./headerCenter.module.scss";

export function HeaderCenter() {
  const { addingItemFavorites, arrayProductsBasket } = React.useContext(Data);
  return (
    <div className={styles.headerCenter}>
      <div className={styles.container}>
        <Link to="/">
          <img
            className={styles.siteName}
            src={siteNameBlackAndWhite}
            alt="siteName"
          />
        </Link>
        <div className={styles.search}>
          <img src={search} alt="search" />
          <input type="text" placeholder="Поиск..." />
        </div>
        <div className={styles.tabs}>
          {addingItemFavorites.length > 0 ? (
            <Link to="/favourites" className={styles.tab}>
              <p>{addingItemFavorites.length}</p>
              <img src={favourites} alt="favourites" />
              <span>Избранное</span>
            </Link>
          ) : (
            <Link to="/favourites" className={styles.tab}>
              <img src={favourites} alt="favourites" />
              <span>Избранное</span>
            </Link>
          )}
          {arrayProductsBasket.length > 0 ? (
            <Link to="/basket" className={styles.tab}>
              <p>{arrayProductsBasket.length}</p>
              <img src={basket} alt="basket" />
              <span>Корзина</span>
            </Link>
          ) : (
            <Link to="/basket" className={styles.tab}>
              <img src={basket} alt="basket" />
              <span>Корзина</span>
            </Link>
          )}
          <Link className={styles.tab}>
            <img className={styles.entrance} src={entrance} alt="entrance" />
            <span>Войти</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
