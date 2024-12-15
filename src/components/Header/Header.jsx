import { HeaderCenter } from "./HeaderCenter";
import { HeaderTop } from "./HeaderTop";
import { HeaderBottom } from "./HeaderBottom";

import styles from "./index.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <HeaderTop styles={styles} />
      <HeaderCenter styles={styles} />
      <HeaderBottom styles={styles} />
    </header>
  );
}
