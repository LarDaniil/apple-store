import { Link } from "react-router";

import { Header } from "../../components/Header";

import styles from "./aboutCompany.module.scss";

export function AboutСompany() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.links}>
          <Link to="/">Главная</Link>
          <p>/</p>
          <p>О компании</p>
        </div>
        <div className={styles.info}>
          <h2>Добро пожаловать на сайт QPICK!</h2>
          <p>
            Мы продаем оригинальрые товары Apple. Спасибо что выбираете нас.
          </p>
        </div>
      </div>
    </>
  );
}
