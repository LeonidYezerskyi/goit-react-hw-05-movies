import React, { Suspense, lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import cn from 'classnames';
import css from './App.module.css';
import Loader from './Loader/Loader';

const LazyHomePage = lazy(() => import("../pages/HomePage/HomePage"));
const LazyMoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const LazyMovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const LazyNotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

export const App = () => {
  return (
    <div>
      <nav className={css.header}>
        <NavLink to='/' className={({ isActive }) =>
          cn(css.tabPage, { [css.active]: isActive, })}>
          Home
        </NavLink>
        <NavLink to='/movies' className={({ isActive }) =>
          cn(css.tabPage, { [css.active]: isActive, })}>
          Movies
        </NavLink>
      </nav>

      <>
        <Suspense fallback={<Loader />}>
          <Routes >
            <Route path="/" element={<LazyHomePage />} />
            <Route path="/movies/*" element={<LazyMoviesPage />} />
            <Route path="/movies/:movieId/*" element={<LazyMovieDetails />} />
            <Route path="/*" element={<LazyNotFoundPage />} />
          </Routes>
        </Suspense>
      </>
    </div >
  );
};


