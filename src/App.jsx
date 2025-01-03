import React from "react";
import { Route, Routes } from "react-router";

import products from "./assets/products.json";

import {
  Home,
  AboutСompany,
  StoresProducts,
  Favourites,
  Basket,
  ProductСard,
  ProductCatalog,
} from "./pages";

export const Data = React.createContext();

export default function App() {
  const [arrayProductsBasket, setArrayProductsBasket] = React.useState([]); // Добавление товара в корзину (обновление используеться в Card.jsx)
  const [addingItemFavorites, setAddingItemFavorites] = React.useState([]); // Добавление товара в избранное (обновление используеться в Card.jsx)
  const [productСard, setProductСard] = React.useState(); // Описание карточки товара (обновление используеться в Card.jsx)
  const [productLink, setProductLink] = React.useState(""); // Изменение https (обновление используеться в Card.jsx)
  const [reviews, setReviews] = React.useState(); // Отзывы товара. Используються в productСard.jsx и ProductReviews.jsx (обновление используеться в ProductReviews.jsx)
  const [leaveReview, setLeaveReview] = React.useState(false);
  const [numberStars, setNumberStars] = React.useState(0);
  const [hrefHeader, setHrefHeader] = React.useState("");
  // const [products, setProducts] = React.useState([]);

  const addBasket = React.useMemo(
    () => ({
      arrayProductsBasket,
      setArrayProductsBasket,
      addingItemFavorites,
      setAddingItemFavorites,
      setProductLink,
      productСard,
      setProductСard,
      reviews,
      setReviews,
      leaveReview,
      setLeaveReview,
      numberStars,
      setNumberStars,
      hrefHeader,
      setHrefHeader,
    }),
    [
      arrayProductsBasket,
      addingItemFavorites,
      productСard,
      reviews,
      leaveReview,
      numberStars,
      hrefHeader,
    ]
  );

  // React.useEffect(() => {
  //   fetch("https://676955c1cbf3d7cefd3a693a.mockapi.io/ghbdtn")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, []);

  return (
    <Data.Provider value={addBasket}>
      <div style={{ background: "rgb(230, 230, 230)", minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home /> /* Главная страница */} />
          <Route
            path="/aboutСompany"
            element={<AboutСompany /* Об компании */ />}
          />

          <Route path="/catalog" element={<ProductCatalog />} />

          {products.map((obj, index) => (
            <Route /* Страница с карточками товаров */
              key={index}
              path={hrefHeader}
              element={<StoresProducts obj={obj} />}
            />
          ))}

          <Route /* Описание карточки товара */
            path={productLink}
            element={<ProductСard />}
          />
          <Route path="/favourites" element={<Favourites /* Избранное */ />} />
          <Route path="/basket" element={<Basket /* Корзина */ />} />
        </Routes>
      </div>
    </Data.Provider>
  );
}
