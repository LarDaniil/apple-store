import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./pagination.module.scss";

export function Pagination({ data, dataLimit }) {
  const [itemOffset, setItemOffset] = React.useState(0);

  const endOffset = itemOffset + dataLimit;
  const currentItems = data().slice(itemOffset, endOffset);
  const numberPages = Math.ceil(data().length / dataLimit);

  function onClickNumber(event) {
    const newOffset = (event.selected * dataLimit) % data().length;
    setItemOffset(newOffset);
  }

  return (
    <div className={styles.container}>
      <div className={styles.cards}>{currentItems}</div>
      <div className={styles.main}>
        <ReactPaginate
          activeLinkClassName={styles.activeClassName}
          breakLabel="..."
          nextLabel="Вперед"
          onPageChange={onClickNumber}
          pageRangeDisplayed={5}
          pageCount={numberPages}
          previousLabel="Назад"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}
