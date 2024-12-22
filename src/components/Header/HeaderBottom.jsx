import React from "react";
import { Link } from "react-router";

import listImage from "./images/list.svg";
import listImageOpen from "./images/listOpen.svg";

import styles from "./headerBottom.module.scss";

export function HeaderBottom() {
  const [active, setActive] = React.useState(false);

  const links = [
    {
      href: "/catalog/smartphones",
      title: "Смартфоны",
    },
    {
      href: "/catalog/tablets",
      title: "Планшеты",
    },
    {
      href: "/catalog/laptops",
      title: "Ноутбуки",
    },
    {
      href: "/catalog/watch",
      title: "Часы",
    },
    {
      href: "/catalog/computers",
      title: "Компьютеры",
    },
    {
      href: "/catalog/headphones",
      title: "Наушники",
    },
    {
      href: "/catalog/multimedia",
      title: "Мультимедиа",
    },
  ];

  const lists = [
    {
      href: "/catalog/accessoriesSmartphones",
      title: "смартфонов",
    },
    {
      href: "/catalog/accessoriesTablets",
      title: "планшетов",
    },
    {
      href: "/catalog/accessoriesLaptops",
      title: "ноутбуков",
    },
    {
      href: "/catalog/accessoriesWatch",
      title: "часов",
    },
    {
      href: "/catalog/accessoriesComputers",
      title: "компьютеров",
    },
  ];

  return (
    <div className={styles.headerBottom}>
      <div className={styles.container}>
        <div className={styles.links}>
          {links.map((obj, index) => (
            <Link key={index} to={obj.href} className={styles.link}>
              {obj.title}
            </Link>
          ))}
          <div className={styles.main}>
            <div
              className={styles.accessories}
              onClick={() => setActive(!active)}
            >
              <p className={styles.accessory}>Аксессуары</p>
              {active ? (
                <img src={listImageOpen} alt="#" />
              ) : (
                <img src={listImage} alt="#" />
              )}
            </div>

            {active && (
              <div className={styles.lists}>
                {lists.map((list, index) => (
                  <Link
                    to={list.href}
                    key={index}
                    className={styles.list}
                    onClick={() => setActive(false)}
                  >
                    Для {list.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
