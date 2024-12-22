import React from "react";

import { Data } from "../../App";

import star from "./images/star.svg";
import starGold from "./images/starGold.svg";

import styles from "./productReviews.module.scss";

export function ProductReviews({ averageRating }) {
  const {
    reviews,
    setLeaveReview,
  } = React.useContext(Data);

  function onClickButton() {
    setLeaveReview(true);
  }

  return (
    <div className={styles.reviews}>
      <h1>
        Отзывы <span>{reviews.length}</span>
      </h1>
      {reviews.length === 0 ? (
        <div className={styles.noReviews}>
          <p>Отзывов пока нет. Ваш отзыв станет первым!</p>
          <button onClick={() => setLeaveReview(true)}>Оставить отзыв</button>
        </div>
      ) : (
        <div className={styles.yesReviews}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, index) => {
              index += 1;
              return index <= averageRating ? (
                <img key={index} src={starGold} alt="star" />
              ) : (
                <img key={index} src={star} alt="star" />
              );
            })}

            <p>{averageRating}</p>
          </div>
          <button className={styles.addReviews} onClick={() => onClickButton()}>
            Оставить отзыв
          </button>
        </div>
      )}
      <div className={styles.peoplesReviews}>
        {reviews.map((obj) => (
          <div key={obj.id} className={styles.reviewPerson}>
            <div className={styles.header}>
              <h3>{obj.name}</h3>
              <p>{obj.date}</p>
              <div>
                {[...Array(5)].map((_, index) =>
                  obj.star <= index ? (
                    <img key={index} src={star} alt="star" />
                  ) : (
                    <img key={index} src={starGold} alt="star" />
                  )
                )}
              </div>
            </div>
            <p className={styles.reviewPersonText}>{obj.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
