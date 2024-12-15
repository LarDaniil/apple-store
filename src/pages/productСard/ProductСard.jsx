import React from "react";
import { Link } from "react-router";

import { Header } from "../../components/Header";
import { Data } from "../../App";

import upArrow from "./images/upArrow.svg";
import downArrow from "./images/downArrow.svg";

import styles from "./productCard.module.scss";

export function ProductСard({ productСard }) {
  // Меняет значок в верстке при добавлении в корзину
  const [activeBasket, setActiveBasket] = React.useState(false);
  const [numImage, setNumImage] = React.useState(0);

  const { setArrayProductsBasket } = React.useContext(Data);

  // Добавление в корзину
  function onClickAddBasket() {
    setArrayProductsBasket((arrayProductsBasket) => [
      ...arrayProductsBasket,
      productСard,
    ]);
    setActiveBasket(true);
  }

  function onClickUp() {
    if (numImage === 0) {
      setNumImage((numImage) => (numImage = productСard.image.length));
    }
    setNumImage((numImage) => (numImage = numImage - 1));
  }

  function onClickDown() {
    if (numImage === 3) {
      setNumImage((numImage) => (numImage = 0));
    } else {
      setNumImage((numImage) => (numImage = numImage + 1));
    }
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.links}>
          <Link to="/">Главная</Link>
          <p>/</p>
          <Link to="/catalog">Каталог</Link>
          <p>/</p>
          <Link to={productСard.link}>{productСard.linkName}</Link>
          <p>/</p>
          <p>{productСard.title}</p>
        </div>
        <div className={styles.main}>
          <div className={styles.images}>
            <div className={styles.listImages}>
              <img
                className={styles.arrow}
                src={upArrow}
                alt="up"
                onClick={onClickUp}
              />
              {productСard.image.map((image, index) => (
                <div
                  key={index}
                  id="test"
                  className={styles.contImage}
                  onClick={() => setNumImage(index)}
                >
                  <img src={image} alt="product" />
                </div>
              ))}
              <img
                className={styles.arrow}
                src={downArrow}
                alt="down"
                onClick={onClickDown}
              />
            </div>
            <div className={styles.image}>
              <img src={productСard.image[numImage]} alt="product" />
            </div>
          </div>
          <div>
            <h1>{productСard.title}</h1>
            <p>Код товара: {productСard.articleNumber}</p>
            <h3>{productСard.price} руб</h3>
            {activeBasket ? (
              <button>Товар в корзине</button>
            ) : (
              <button onClick={onClickAddBasket}>Добавить в корзину</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
