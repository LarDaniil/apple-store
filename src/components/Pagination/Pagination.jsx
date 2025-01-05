import React from "react";

import styles from "./pagination.module.scss";

export function Pagination() {

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <p>Назад</p>
        <p>1</p>
        <p>2</p>
        <p>Вперед</p>
      </div>
    </div>
  );
}
