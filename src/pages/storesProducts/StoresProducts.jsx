import React from "react";
import { Link } from "react-router";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card/Card";

import sort from "./images/sort.svg";
import sortOpen from "./images/sortOpen.svg";

import styles from "./storesProducts.module.scss";
import { Pagination } from "../../components/Pagination/Pagination";

export function StoresProducts({ obj }) {
  const [active, setActive] = React.useState(false); // Разновидность верстки в зависимоти от сортировки
  const [sortId, setSortId] = React.useState(0); // Выбор позиции сортировки

  const lists = [
    {
      title: "Популярные",
    },
    {
      title: "По возрастанию цены",
    },
    {
      title: "По убыванию цены",
    },
  ];
  // Изменение сортировки
  function onClickList(index) {
    setSortId(index);
    setActive(false);
  }

  function sorting() {
    if (lists[sortId].title === "Популярные") {
      return obj.products
        .sort((a, b) => b.popular - a.popular)
        .map((items, index) => (
          <Card
            key={items.id}
            items={items}
            link={obj.link}
            linkName={obj.linkName}
          />
        ));
    } else if (lists[sortId].title === "По возрастанию цены") {
      return obj.products
        .sort((a, b) => a.price - b.price)
        .map((items, index) => (
          <Card
            key={items.id}
            items={items}
            link={obj.link}
            linkName={obj.linkName}
          />
        ));
    } else {
      return obj.products
        .sort((a, b) => b.price - a.price)
        .map((items, index) => (
          <Card
            key={items.id}
            items={items}
            link={obj.link}
            linkName={obj.linkName}
          />
        ));
    }
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
                    {lists[sortId].title}
                    <img src={sortOpen} alt="sort" />
                  </span>
                </p>
                <div>
                  {lists.map((list, index) => (
                    <p key={index} onClick={() => onClickList(index)}>
                      {list.title}
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              <p className={styles.choosingSort}>
                Сортировка:
                <span onClick={() => setActive(!active)}>
                  {lists[sortId].title}
                  <img src={sort} alt="sort" />
                </span>
              </p>
            )}
          </div>
        </div>
        <Pagination data={sorting} dataLimit={3} />
      </div>
    </>
  );
}
