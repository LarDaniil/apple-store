import React from "react";

import { Header } from "../Header";
import { CardBasket } from "./CardBasket";

import flagImage from "./images/flag.svg";

import styles from "./productsBasket.module.scss";
import { Data } from "../../App";

export const DataProductBasket = React.createContext();

export function ProductsBasket() {
  const { arrayProductsBasket, setArrayProductsBasket } =
    React.useContext(Data);

  const [deleteSelected, setDeleteSelected] =
    React.useState(arrayProductsBasket);

  const [active, setActive] = React.useState(true);

  function selectWholeProduct() {
    setActive(true);
    setDeleteSelected(arrayProductsBasket);
  }

  function resetAllProducts() {
    setActive(false);
    setDeleteSelected([]);
  }

  function deleteAllProducts() {
    if (active) {
      setArrayProductsBasket([]);
    }
  }

  const value = React.useMemo(
    () => ({ active, setActive, setDeleteSelected }),
    [active]
  );

  return (
    <>
      <Header />
      <DataProductBasket.Provider value={value}>
        <div className={styles.basket}>
          <h1>
            Корзина
            {deleteSelected.length === 0 ? (
              ""
            ) : (
              <span>{deleteSelected.length}</span>
            )}
          </h1>
          <div className={styles.choice}>
            {active ? (
              <div onClick={resetAllProducts}>
                <div className={styles.chooseActive}>
                  <img src={flagImage} alt="flag" />
                </div>
                <p>Выбрать все</p>
              </div>
            ) : (
              <div onClick={selectWholeProduct}>
                <div className={styles.choose}></div>
                <p>Выбрать все</p>
              </div>
            )}
            <p className={styles.delete} onClick={deleteAllProducts}>
              Удалить все
            </p>
          </div>
          {arrayProductsBasket.map((obj) => (
            <CardBasket key={obj.id} obj={obj} />
          ))}

          <div className={styles.orderDetails}>
            <h2>Детали заказа</h2>

            <div className={styles.nds}>
              <h3>НДС 20%</h3>
              <div></div>
              <p>10000</p>
            </div>
            <div className={styles.total}>
              <h3>Итого</h3>
              <div></div>
              <p>10000</p>
            </div>
            <button>Оформить заказ</button>
          </div>
        </div>
      </DataProductBasket.Provider>
    </>
  );
}
