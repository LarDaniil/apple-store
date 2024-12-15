import { Link } from "react-router";

import styles from "./headerTop.module.scss";

export function HeaderTop() {
  return (
    <div className={styles.headerTop}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link className={styles.link} to="/aboutСompany">
            О компании
          </Link>
          <Link className={styles.link}>Доставка</Link>
          <Link className={styles.link}>Гарантия</Link>
          <Link className={styles.link}>Trade-in</Link>
          <Link className={styles.link}>Контакты</Link>

          <a href="tel:89997772255" className={styles.telephone}>
            8(999)777-22-55
          </a>
        </div>
      </div>
    </div>
  );
}
