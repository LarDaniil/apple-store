import React from "react";

import { Data } from "../../App";

import styles from "./productSpecifications.module.scss";

export function ProductSpecifications() {
  const { productСard } = React.useContext(Data);

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Характеристики</h1>
      <div className={styles.container}>
        {productСard.specifications.map((obj, index) => (
          <div key={index} className={styles.specifications}>
            <h2>{obj.title}</h2>

            {obj.parameters.map((el, index) => (
              <div key={index} className={styles.parameters}>
                <p>{el.title}</p>
                <div></div>
                <p>{el.parameter}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
