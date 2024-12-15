import React from "react";

import { Data } from "../../App";
import { EmptyFavourites } from "../../components/EmptyFavourites/EmptyFavourites";
import { ProductsFavourites } from "../../components/ProductsFavourites/ProductsFavourites";

export function Favourites() {
  const { addingItemFavorites } = React.useContext(Data);
  return (
    <>
      {addingItemFavorites.length > 0 ? (
        <ProductsFavourites />
      ) : (
        <EmptyFavourites />
      )}
    </>
  );
}
