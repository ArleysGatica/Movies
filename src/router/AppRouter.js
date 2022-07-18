import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Series } from "../pages/Series";
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";

export const AppRouter = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>


  )
}
