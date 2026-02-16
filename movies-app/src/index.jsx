import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "./components/LoadingSpinner";

const HomePage = lazy(() => import("./pages/HomePage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
  <BrowserRouter>
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/liked-stuff" element={<FavoritesPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
