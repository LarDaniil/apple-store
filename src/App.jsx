import React from "react";
import { Route, Routes } from "react-router";

import {
  Home,
  AboutСompany,
  StoresProducts,
  Favourites,
  Basket,
  ProductСard,
} from "./pages";

import products from "./assets/products.json";

export const Data = React.createContext();

export default function App() {
  const [arrayProductsBasket, setArrayProductsBasket] = React.useState([]); // Добавление товара в корзину (обновление используеться в Card.jsx)
  const [addingItemFavorites, setAddingItemFavorites] = React.useState([]); // Добавление товара в избранное (обновление используеться в Card.jsx)
  const [productСard, setProductСard] = React.useState(); // Описание карточки товара (обновление используеться в Card.jsx)
  const [productLink, setProductLink] = React.useState(""); // Изменение https (обновление используеться в Card.jsx)

  const addBasket = React.useMemo(
    () => ({
      arrayProductsBasket,
      setArrayProductsBasket,
      addingItemFavorites,
      setAddingItemFavorites,
      setProductLink,
      setProductСard,
    }),
    [arrayProductsBasket, addingItemFavorites]
  );

  const catalogs = [
    {
      link: "/catalog/smartphones",
      storesProducts: products.smartphones,
      linkName: "Смартфоны",
    },
    {
      link: "/catalog/tablets",
      storesProducts: products.tablets,
      linkName: "Планшеты",
    },
    {
      link: "/catalog/laptops",
      storesProducts: products.laptops,
      linkName: "Ноутбуки",
    },
    {
      link: "/catalog/watch",
      storesProducts: products.watch,
      linkName: "Часы",
    },
    {
      link: "/catalog/computers",
      storesProducts: products.computers,
      linkName: "Компьютеры",
    },
    {
      link: "/catalog/headphones",
      storesProducts: products.headphones,
      linkName: "Наушники",
    },
    {
      link: "/catalog/multimedia",
      storesProducts: products.multimedia,
      linkName: "Мультимедиа",
    },
    {
      link: "/catalog/accessoriesSmartphones",
      storesProducts: products.accessories.accessoriesSmartphones,
      linkName: "Акссесуары для смартфонов",
    },
    {
      link: "/catalog/accessoriesTablets",
      storesProducts: products.accessories.accessoriesTablets,
      linkName: "Акссесуары для планшетов",
    },
    {
      link: "/catalog/accessoriesLaptops",
      storesProducts: products.accessories.accessoriesLaptops,
      linkName: "Акссесуары для ноутбуков",
    },
    {
      link: "/catalog/accessoriesWatch",
      storesProducts: products.accessories.accessoriesWatch,
      linkName: "Акссесуары для часов",
    },
    {
      link: "/catalog/accessoriesComputers",
      storesProducts: products.accessories.accessoriesComputers,
      linkName: "Акссесуары для компьютеров",
    },
  ];

  return (
    <Data.Provider value={addBasket}>
      <div style={{ background: "rgb(230, 230, 230)", minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home /> /* Главная страница */} />
          <Route
            path="/aboutСompany"
            element={<AboutСompany /* Об компании */ />}
          />
          {catalogs.map((obj, index) => (
            <Route /* Страница с карточками товаров */
              key={index}
              path={obj.link}
              element={<StoresProducts obj={obj} />}
            />
          ))}
          <Route /* Описание карточки товара */
            path={productLink}
            element={<ProductСard productСard={productСard} />}
          />
          <Route path="/favourites" element={<Favourites /* Избранное */ />} />
          <Route path="/basket" element={<Basket /* Корзина */ />} />
        </Routes>
      </div>
    </Data.Provider>
  );
}
