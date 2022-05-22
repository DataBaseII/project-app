import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "pages/Home";
import Movie from "pages/Admin/Movie";
import Movies from "pages/Admin/Movies";
import Categories from "pages/Admin/Categories";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/admin-movies" element={<Movies />} />
      <Route path="/admin-movies/:id" element={<Movie />} />
      <Route path="/admin-categories" element={<Categories />} />
    </Routes>
  );
}
export default App;
