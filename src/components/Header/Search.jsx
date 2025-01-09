import styles from "./search.module.scss";

import magnifier from "./images/search.svg";
import cross from "./images/cross.svg";
import React from "react";
import { Data } from "../../App";

export function Search({ setActive }) {
  const { products } = React.useContext(Data);
  const [value, setValue] = React.useState("");
  const autoFocus = React.useCallback(
    (input) => (input ? input.focus() : null),
    []
  );

  function test() {
    return;
  }
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.search}>
          <input
            type="text"
            ref={autoFocus}
            placeholder="Поиск..."
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <img className={styles.magnifier} src={magnifier} alt="magnifier" />
          <img
            className={styles.cross}
            src={cross}
            alt="cross"
            onClick={() => setActive(false)}
          />
        </div>
        <div className={styles.cards}>
          {value &&
            products.map((obj) =>
              obj.products.map(
                (el) =>
                  el.title.toLowerCase().includes(value.toLowerCase()) && (
                    <div key={el.id}>{el.title}</div>
                  )
              )
            )}
        </div>
      </div>
    </div>
  );
}
