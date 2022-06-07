import './App.css';
import Product from "./Pages/Product";
import ProductDetails from './Pages/ProductDetails'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Product />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id/*" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App