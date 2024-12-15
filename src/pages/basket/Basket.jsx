import React from "react";
import { EmptyBasket } from "../../components/EmptyBasket/EmptyBasket";
import { ProductsBasket } from "../../components/ProductsBasket/ProductsBasket";
import { Data } from "../../App";

export function Basket() {
  const { arrayProductsBasket } = React.useContext(Data);

  return (
    <>{arrayProductsBasket.length > 0 ? <ProductsBasket /> : <EmptyBasket />}</>
  );
}
