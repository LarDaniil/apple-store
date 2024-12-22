import React from "react";

import { Data } from "../../App";

import star from "./images/star.svg";
import starGold from "./images/starGold.svg";

import styles from "./starRating.module.scss";

export function StarRating() {
  const { numberStars, setNumberStars } = React.useContext(Data);

  return (
    <>
      <div className={styles.starRating}>
        {[...Array(5)].map((_, index) => {
          index += 1;
          return (
            <button
              key={index}
              onClick={() =>
                setNumberStars((numberStars) => (numberStars = index))
              }
            >
              {index <= numberStars ? (
                <img src={starGold} alt="star" />
              ) : (
                <img src={star} alt="star" />
              )}
            </button>
          );
        })}
      </div>
    </>
  );
}
