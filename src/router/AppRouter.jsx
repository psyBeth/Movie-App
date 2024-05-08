import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import Navbar from '../components/Navbar';
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    // to use useNavigate hook, moved this to index.js
    // <BrowserRouter>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="" element={<PrivateRouter />}>
          <Route path="/details/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </>
    // </BrowserRouter>
  )
};

export default AppRouter;