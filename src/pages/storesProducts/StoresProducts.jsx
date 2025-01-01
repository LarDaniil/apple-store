import React from "react";
import { Link } from "react-router";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card/Card";

import sort from "./images/sort.svg";
import sortOpen from "./images/sortOpen.svg";

import styles from "./storesProducts.module.scss";

export function StoresProducts({ obj }) {
  const [active, setActive] = React.useState(false); // Разновидность верстки в зависимоти от сортировки
  const [sortId, setSortId] = React.useState(0); // Выбор позиции сортировки

  const lists = ["Популярные", "По возрастанию цены", "По убыванию цены"];
  // Изменение сортировки
  function onClickList(index) {
    setSortId(index);
    setActive(false);
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.links}>
            <Link to="/">Главная</Link>
            <p>/</p>
            <Link to="/catalog">Каталог</Link>
            <p>/</p>
            <p>{obj.linkName}</p>
          </div>
          <div className={styles.sort}>
            <p className={styles.numberProducts}>
              {obj.products.length} <span>Товаров</span>
            </p>
            {active ? (
              <div className={styles.choosingSortActive}>
                <p className={styles.choosingSort}>
                  Сортировка:
                  <span onClick={() => setActive(false)}>
                    {lists[sortId]}
                    <img src={sortOpen} alt="sort" />
                  </span>
                </p>
                <div>
                  {lists.map((list, index) => (
                    <p key={index} onClick={() => onClickList(index)}>
                      {list}
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              <p className={styles.choosingSort}>
                Сортировка:
                <span onClick={() => setActive(!active)}>
                  {lists[sortId]}
                  <img src={sort} alt="sort" />
                </span>
              </p>
            )}
          </div>
        </div>
        <div className={styles.cards}>
          {obj.products.map((items) => (
            <Card
              key={items.id}
              items={items}
              link={obj.link}
              linkName={obj.linkName}
            />
          ))}
        </div>
      </div>
    </>
  );
}
