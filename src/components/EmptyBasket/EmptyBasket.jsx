import { Link } from "react-router";

import { Header } from "../Header";

import basketImage from "./images/basket.svg";

import styles from "./emptyBasket.module.scss";

export function EmptyBasket() {
  return (
    <>
      <Header />
      <div className={styles.basket}>
        <h1>Корзина пуста</h1>
        <img src={basketImage} alt="basket" />

        <p>Но это никогда не поздно исправить :)</p>
        <Link to="/catalog">Перейти в каталог</Link>
      </div>
    </>
  );
}
