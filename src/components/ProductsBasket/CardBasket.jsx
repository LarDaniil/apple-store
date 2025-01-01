import React from "react";

import basketImage from "./images/basket.svg";
import flagImage from "./images/flag.svg";

import styles from "./cardBasket.module.scss";
import { Data } from "../../App";
import { DataProductBasket } from "./ProductsBasket";
import { Link } from "react-router";

export function CardBasket({ obj }) {
  const [valueInput, setValueInput] = React.useState(1);
  const [price, setPrice] = React.useState(obj.price);

  const { setArrayProductsBasket, setProductСard, setProductLink, setReviews } =
    React.useContext(Data);
  const { active, setActive, setDeleteSelected } =
    React.useContext(DataProductBasket);

  function onChangeInput(event) {
    setValueInput((value) => (value = event.target.value));
    setPrice((num) => (num = obj.price * event.target.value));
  }

  function minus() {
    if (valueInput > 1) {
      setValueInput((value) => (value -= 1));
      setPrice((num) => (num -= obj.price));
    }
  }

  function plus() {
    setValueInput((value) => (value = +value + 1));
    setPrice((num) => (num += obj.price));
  }

  function productDelete(event) {
    setArrayProductsBasket((arrayProductsBasket) =>
      arrayProductsBasket.filter((item) => item.id !== Number(event.target.id))
    );
  }

  function onClickChoose() {
    setActive(!active);
    setDeleteSelected((el) => [...el, obj]);
  }

  function onClickOffChoose() {
    setActive(!active);
    setDeleteSelected((deleteSelected) =>
      deleteSelected.filter((item) => item.id !== obj.id)
    );
  }

  function onClickLinkProduct() {
    setReviews(obj.reviews);
    setProductСard((el) => (el = obj));
    setProductLink((el) => (el = obj.linkTitle));
  }

  return (
    <div className={styles.card}>
      {active ? (
        <div className={styles.chooseActive}>
          <img src={flagImage} alt="flag" onClick={onClickOffChoose} />
        </div>
      ) : (
        <div className={styles.choose}>
          <img src={flagImage} alt="flag" onClick={onClickChoose} />
        </div>
      )}
      <Link
        className={styles.returnProductCard}
        onClick={onClickLinkProduct}
        to={obj.linkTitle}
      >
        <div className={styles.image}>
          <img src={obj.image[0]} alt="#" />
        </div>
        <p className={styles.title}>{obj.title}</p>
      </Link>
      <div className={styles.quantity}>
        <button className={styles.click} onClick={minus}>
          -
        </button>
        <input
          type="text"
          placeholder="1"
          value={valueInput}
          onChange={(event) => onChangeInput(event)}
        />
        <button onClick={plus}>+</button>
      </div>
      <p className={styles.price}>{price}</p>
      <img
        id={obj.id}
        className={styles.basket}
        src={basketImage}
        alt="basket"
        onClick={(event) => productDelete(event)}
      />
    </div>
  );
}
