import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favoriteProductIds: [],
    addFavorite: (favoriteProduct) => { },
    removeFavorite: (productId) => { },
});

export function FavoritesContextProvider({ children }) {
    const [favoriteProductIds, setFavoriteProductIds] = useState([])

    function addFavoriteHandler(productId) {
        setFavoriteProductIds((prevUserFavorites) => {
            return prevUserFavorites.concat(productId)
        })
    }
    function removeFavoriteHandler(id) {
        setFavoriteProductIds(
            favoriteProductIds.filter((productId) => productId !== id)
        );
    }


    const context = {
        favoriteProductIds: favoriteProductIds,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler
    }

    return <FavoritesContext.Provider value={context}>
        {children}
    </FavoritesContext.Provider>

}

export default FavoritesContext