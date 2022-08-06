import React from 'react'
import Home from './components/Home/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductDetail from './components/Product/ProductDetail';

import SignUp from "./components/Authentication/SignUp"
import Login from './components/Authentication/Login';

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App