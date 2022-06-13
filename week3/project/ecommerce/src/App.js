import './App.css';
import Product from "./Pages/Product";
import ProductDetails from './Pages/ProductDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Favorites from './Pages/Favorites';
import { FavoritesContextProvider } from './store/favorites-context';



const App = () => {
  return (
    <FavoritesContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Product />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id/*" element={<ProductDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </FavoritesContextProvider>
  )
}

export default App