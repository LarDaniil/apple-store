import React from "react";
import { Link } from "react-router";

import { Header } from "../../components/Header";
import { Data } from "../../App";
import { ProductDescription } from "../../components/ProductDescription/ProductDescription";
import { ProductSpecifications } from "../../components/ProductSpecifications/ProductSpecifications";
import { ProductReviews } from "../../components/ProductReviews";

import star from "./images/star.svg";
import starGold from "./images/starGold.svg";

import upArrow from "./images/upArrow.svg";
import downArrow from "./images/downArrow.svg";
import favourites from "./images/favourites.svg";
import addFavourites from "./images/addFavourites.svg";

import styles from "./productCard.module.scss";
import { ReviewCreationPage } from "../../components/ProductReviews/ReviewCreationPage";

export function ProductСard() {
  // Меняет значок в верстке при добавлении в корзину
  const [activeBasket, setActiveBasket] = React.useState(false);
  const [activeFavourit, setActiveFavourit] = React.useState(false);
  const [numImage, setNumImage] = React.useState(0);
  const [swiperActive, setSwiperActive] = React.useState(0);

  const {
    setArrayProductsBasket,
    setAddingItemFavorites,
    addingItemFavorites,
    productСard,
    reviews,
    leaveReview,
  } = React.useContext(Data);

  function averageRating() {
    let result = 0;
    let sum = 0;
    const arrNumber = reviews.map((num) => num.star);
    arrNumber.map((num) => (sum += num));
    result = sum / arrNumber.length;

    let str = String(result.toFixed(1));

    if (+str[2] === 0) {
      return result;
    } else {
      return result.toFixed(1);
    }
  }

  const swipers = [
    {
      linkName: "Описание",
      text: <ProductDescription />,
    },
    {
      linkName: "Характеристики",
      text: <ProductSpecifications />,
    },
    {
      linkName: "Отзывы" + " (" + reviews.length + ")",
      text: <ProductReviews averageRating={averageRating()} />,
    },
  ];

  // Добавление в корзину
  function onClickAddBasket() {
    setArrayProductsBasket((arrayProductsBasket) => [
      ...arrayProductsBasket,
      productСard,
    ]);
    setActiveBasket(true);
  }

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
      if (addingItemFavorites.length === 0) {
        setAddingItemFavorites((addingItemFavorites) => [
          ...addingItemFavorites,
          productСard,
        ]);
      } else {
        addingItemFavorites.filter(
          (item) =>
            item.id !== Number(event.target.id) &&
            setAddingItemFavorites((addingItemFavorites) => [
              ...addingItemFavorites,
              productСard,
            ])
        );
      }
    }
  }

  // Просмотр фотографии выше по списку
  function onClickUp() {
    if (numImage === 0) {
      setNumImage((numImage) => (numImage = productСard.image.length));
    }
    setNumImage((numImage) => (numImage = numImage - 1));
  }

  // Просмотр фотографии ниже по списку
  function onClickDown() {
    if (numImage === productСard.image.length - 1) {
      setNumImage((numImage) => (numImage = 0));
    } else {
      setNumImage((numImage) => (numImage = numImage + 1));
    }
  }

  function declensionEnding(num, text) {
    num = Math.abs(num) % 100;
    var n1 = num % 10;
    if (num > 10 && num < 20) {
      return text[2];
    }
    if (n1 > 1 && n1 < 5) {
      return text[1];
    }
    if (n1 === 1) {
      return text[0];
    }
    return text[2];
  }

  return (
    <div className={leaveReview ? styles.leaveReview : ""}>
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
          <div className={styles.info}>
            <h1 className={styles.nameProduct}>{productСard.title}</h1>
            <div className={styles.articleNumberAndFavourites}>
              <p className={styles.articleNumber}>
                Код товара: {productСard.articleNumber}
              </p>
              {activeFavourit ? (
                <img
                  id={productСard.id}
                  src={addFavourites}
                  alt="favourites"
                  onClick={(event) => onClickAddFavourites(event)}
                />
              ) : (
                <img
                  id={productСard.id}
                  src={favourites}
                  alt="favourites"
                  onClick={(event) => onClickAddFavourites(event)}
                />
              )}
            </div>
            {reviews.length === 0 ? (
              <div
                className={styles.stars}
                onClick={() => setSwiperActive(swipers.length - 1)}
              >
                <div className={styles.containerStar}>
                  <img src={star} alt="star" />
                </div>
                <p>Нет оценок</p>
              </div>
            ) : (
              <div
                className={styles.stars}
                onClick={() => setSwiperActive(swipers.length - 1)}
              >
                <div className={styles.containerStar}>
                  <img src={starGold} alt="star" />
                  <p>{averageRating()}</p>
                </div>
                <p>
                  <span>
                    {reviews.length + " "}
                    {declensionEnding(reviews.length, [
                      "отзыв",
                      "отзыва",
                      "отзывов",
                    ])}
                  </span>
                </p>
              </div>
            )}

            <h3 className={styles.price}>{productСard.price} руб</h3>
            {activeBasket ? (
              <button className={styles.activeBtn}>Товар в корзине</button>
            ) : (
              <button onClick={onClickAddBasket}>Добавить в корзину</button>
            )}
          </div>
        </div>
        <div className={styles.swipers}>
          {swipers.map((swiper, index) => (
            <Link
              key={index}
              id={index}
              className={
                swiperActive === index ? styles.swiperActive : styles.swiper
              }
              onClick={(event) => setSwiperActive(+event.target.id)}
            >
              {swiper.linkName}
            </Link>
          ))}
        </div>
        {swipers[swiperActive].text}
      </div>
      <ReviewCreationPage />
    </div>
  );
}
