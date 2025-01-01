import React from "react";
import { Link } from "react-router";

import { Header } from "../../components/Header";

import smartphones from "./images/smartphones.png";
import tablets from "./images/tablets.png";
import laptops from "./images/laptops.png";
import watch from "./images/watch.png";
import computers from "./images/computers.png";
import headphones from "./images/headphones.png";
import multimedia from "./images/multimedia.png";
import accessories from "./images/accessories.png";

import styles from "./productCatalog.module.scss";

export function ProductCatalog() {
  const [active, setActive] = React.useState(false);

  const category = [
    {
      href: "/catalog/smartphones",
      title: "Смартфоны",
      image: smartphones,
      width: "580px",
      bottom: "10px",
      right: "-48px",
    },
    {
      href: "/catalog/tablets",
      title: "Планшеты",
      image: tablets,
      width: "400px",
      bottom: "-40px",
      right: "30px",
      transform: "rotate(-40deg)",
    },
    {
      href: "/catalog/laptops",
      title: "Ноутбуки",
      image: laptops,
      width: "520px",
      bottom: "20px",
      right: "-20px",
    },
    {
      href: "/catalog/watch",
      title: "Часы",
      image: watch,
      width: "580px",
      bottom: "-10px",
      right: "-50px",
    },
    {
      href: "/catalog/computers",
      title: "Компьютеры",
      image: computers,
      width: "420px",
      bottom: "20px",
      right: "30px",
    },
    {
      href: "/catalog/headphones",
      title: "Наушники",
      image: headphones,
      width: "540px",
      bottom: "30px",
      right: "-30px",
    },
    {
      href: "/catalog/multimedia",
      title: "Мультимедиа",
      image: multimedia,
      width: "420px",
      bottom: "20px",
      right: "30px",
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

  function onClickAccessories() {}

  return (
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.links}>
          <Link to="/">Главная</Link>
          <p>/</p>
          <p>Каталог</p>
        </div>

        <div className={styles.mains}>
          {category.map((obj, index) => (
            <div className={styles.main} key={index}>
              <Link to={obj.href}>{obj.title}</Link>
              <img
                style={{
                  width: obj.width,
                  bottom: obj.bottom,
                  right: obj.right,
                  transform: obj.transform,
                }}
                src={obj.image}
                alt=""
              />
            </div>
          ))}
          <div className={styles.main}>
            <Link onClick={() => setActive((active) => !active)}>
              Аксессуары
            </Link>
            {active && (
              <div className={styles.accessories}>
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
            <img
              style={{ width: "420px", right: "30px", bottom: "30px" }}
              src={accessories}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
