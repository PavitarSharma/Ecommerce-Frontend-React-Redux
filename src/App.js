import React from 'react'
import Home from './components/Home/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductDetail from './components/Product/ProductDetail';

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App