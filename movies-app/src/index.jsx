import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Spinner from "./components/LoadingSpinner";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import MainLayout from "./layouts/MainLayout";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
  <BrowserRouter>
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/liked-stuff" element={<FavoritesPage />} />
          <Route path="/movies/:movieId" element={<MoviePage />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);
