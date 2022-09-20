import React from 'react'
import Home from './components/Home/Home'
import { useSelector } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { loadUser } from "./store/slices/authSlice"
import ProductDetail from './components/Product/ProductDetail';

import SignUp from "./components/Authentication/SignUp"
import Login from './components/Authentication/Login';
import ProtectedRoute from './more/ProctedRoute';
import UserData from "./more/UserData"
import Profile from "./components/User/Profile"
import EditProfile from './components/User/EditProfile';

const App = () => {
  const { user, token } = useSelector(state => state.auth)

  return (
    <>
      <BrowserRouter>
        {token && <UserData user={user} />}

        <Routes>

          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/me" element={<Profile />} />
            <Route path="/me/update/info" element={<EditProfile />} />
          </Route>
          {/* <Route path="/" element={ <ProtectedRoute Component={Home}></ProtectedRoute> }/> */}
          {/* <Route to="/" element={<Home/>} /> */}

          {/* <Route path="/products/:id" element={<ProductDetail />} /> */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App