import React from "react";
import { Link } from "react-router";

import { Header } from "../Header";

import favourites from "./images/favourites.svg";

import styles from "./emptyFavourites.module.scss";

export function EmptyFavourites() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Избранное</h1>
        <img src={favourites} alt="" />
        <h2>Здесь будут ваши избранные товары</h2>
        <p>Добавьте товары, чтобы не искать их снова</p>
        <Link to="/catalog">Перейти в каталог</Link>
      </div>
    </>
  );
}
