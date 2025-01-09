import React from "react";

import { HeaderCenter } from "./HeaderCenter";
import { HeaderTop } from "./HeaderTop";
import { HeaderBottom } from "./HeaderBottom";
import { Search } from "./Search";

import styles from "./header.module.scss";

export function Header() {
  const [active, setActive] = React.useState(false);

  return (
    <>
      <header className={styles.header}>
        <HeaderTop styles={styles} />
        <HeaderCenter styles={styles} setActive={setActive} />
        <HeaderBottom styles={styles} />
      </header>
      {active ? <Search setActive={setActive} /> : ""}
    </>
  );
}
