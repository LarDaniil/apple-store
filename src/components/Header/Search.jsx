import styles from "./search.module.scss";

import magnifier from "./images/search.svg";
import cross from "./images/cross.svg";
import React from "react";
import { Data } from "../../App";
import { Link } from "react-router";

export function Search({ setActive }) {
  const { products, setReviews, setProductСard, setProductLink } =
    React.useContext(Data);
  const [value, setValue] = React.useState("");
  //   const [counter, setCounter] = React.useState(0);
  const autoFocus = React.useCallback(
    (input) => (input ? input.focus() : null),
    []
  );
  const forwardRef = React.useRef(null);
  console.log(forwardRef);

  function linkProduct(obj, el) {
    let title = el.title;
    while (title.includes(" ")) {
      title = title.replace(" ", "-");
    }
    while (title.includes(",")) {
      title = title.replace(",", "");
    }
    return obj.link + "/" + title;
  }

  function onClickLinkProduct(obj, el) {
    el.link = obj.link;
    el.linkName = obj.linkName;
    el.linkTitle = linkProduct(obj, el);
    setReviews(el.reviews);
    setProductСard((elem) => (elem = el));
    setProductLink((elem) => (elem = linkProduct(obj, el)));
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
        <p
          className={styles.back}
          onClick={() => (forwardRef.current.scrollLeft -= 380)}
        >
          Назад
        </p>
        <div className={styles.cards} ref={forwardRef}>
          {value &&
            products.map((obj) =>
              obj.products.map(
                (el) =>
                  el.title.toLowerCase().includes(value.toLowerCase()) && (
                    <Link
                      to={linkProduct(obj, el)}
                      key={el.id}
                      onClick={() => onClickLinkProduct(obj, el)}
                    >
                      <div>
                        <img
                          style={{ width: el.width, top: el.top }}
                          src={el.image[0]}
                          alt="images"
                        />
                      </div>
                      <p>{el.title}</p>
                    </Link>
                  )
              )
            )}
        </div>
        <p
          className={styles.forward}
          onClick={() => (forwardRef.current.scrollLeft += 380)}
        >
          Вперед
        </p>
      </div>
    </div>
  );
}
