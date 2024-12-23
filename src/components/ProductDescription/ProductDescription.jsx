import React from "react";

import { Data } from "../../App";

import styles from "./productDescription.module.scss";

export function ProductDescription() {
  const { productСard } = React.useContext(Data);

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Описание товара</h1>
      <div className={styles.container}>
        {productСard.description.map((obj, index) => (
          <div key={index}>
            <h2>{obj.title}</h2>
            <p>{obj.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
