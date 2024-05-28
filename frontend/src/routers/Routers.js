import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Tours from "../pages/Tours";
import TourDetails from "./../pages/TourDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";
import NotFound from "../pages/NotFound";
import ThankYou from "../pages/ThankYou";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
<<<<<<< HEAD:frontend/src/routers/Routers.js
      <Route path="/tours" element={<Tours/>} />
      <Route path="/tour/:id" element={<TourDetails />} />
=======
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
>>>>>>> 644fdd6ab500612277a330986011b9830593fa56:src/routers/Routers.js
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou/>} />
      <Route path="/tours/search" element={< SearchResultList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;