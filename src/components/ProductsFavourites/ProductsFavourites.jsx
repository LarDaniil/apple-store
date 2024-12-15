import React from "react";
import { Link } from "react-router";

import { Card } from "../Card/Card";
import { Header } from "../Header";
import { Data } from "../../App";

import styles from "./productsFavourites.module.scss";

export function ProductsFavourites() {
  const { addingItemFavorites } = React.useContext(Data);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.links}>
          <Link to="/">Главная</Link>
          <p>/</p>
          <p>Избранное</p>
        </div>
        <div className={styles.cards}>
          {addingItemFavorites.map((obj) => (
            <Card
              key={obj.id}
              items={obj}
              link={obj.link}
              linkName={obj.linkName}
              active={true}
            />
          ))}
        </div>
      </div>
    </>
  );
}
